"use client";
import { useSearchParams, notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function MessagePage() {
  const searchParams = useSearchParams();

  const name = searchParams.get("n");
  const email = searchParams.get("e");
  const subject = searchParams.get("s");
  const msgBase64 = searchParams.get("msg");

  if (!name || !email || !msgBase64) return notFound();

  let message = "";
  try {
    const binaryString = atob(msgBase64);

    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    message = new TextDecoder().decode(bytes);
  } catch (e) {
    console.error("Error decoding message:", e);
    return notFound();
  }

  const mailtoUrl = `mailto:${email}?subject=RE: ${subject}`;

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
      <section className="max-w-2xl w-full">
        <div className="space-y-8">
          <div className="border-b border-accent pb-6 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter mb-6 leading-tight">
              {subject}
            </h1>
            <div className="space-y-2 text-base">
              <p className="text-muted-foreground">
                From: <span className="text-primary font-mono">{name}</span>
              </p>
              <p className="text-muted-foreground">
                Email: <span className="text-primary font-mono">{email}</span>
              </p>
            </div>
          </div>

          <div className="p-8 bg-secondary/20 border border-accent rounded-sm font-sans text-lg leading-relaxed whitespace-pre-wrap">
            {message}
          </div>

          <div className="flex justify-center sm:justify-start pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-base shadow-xl shadow-primary/20"
            >
              <a href={mailtoUrl}>
                <Mail className="mr-2 h-5 w-5" /> Reply to {name}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
