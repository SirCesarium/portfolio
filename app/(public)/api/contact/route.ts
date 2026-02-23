import { TelegramService } from "@/lib/telegram";
import { ContactValidator } from "@/lib/contact-validator";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";
import { logError } from "@/lib/logger";

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.email(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(2000),
  address_verify: z.string().optional().nullable(),
});

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "60 s"),
});

export async function POST(req: Request) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] ?? "127.0.0.1";

    const { success: limitOk } = await ratelimit.limit(ip);
    if (!limitOk) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    const { name, email, subject, message, address_verify } = parsed.data;
    const userAgent = req.headers.get("user-agent") || "";

    if (ContactValidator.isBot(userAgent, address_verify)) {
      return NextResponse.json({ success: true });
    }

    if (ContactValidator.isSpam(message, subject)) {
      return NextResponse.json({ success: true });
    }

    await TelegramService.sendMessage(name, email, subject, message);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    await logError(error, "contact-api");
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
