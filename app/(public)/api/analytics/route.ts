import { adminApp } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const data = await request.json();

    const uaString = request.headers.get("user-agent") || "unknown";

    const isMobile = /mobile/i.test(uaString);
    const browser = uaString.includes("Edg")
      ? "Edge"
      : uaString.includes("Chrome")
        ? "Chrome"
        : uaString.includes("Safari")
          ? "Safari"
          : uaString.includes("Firefox")
            ? "Firefox"
            : "Other";

    const db = adminApp.firestore();

    await db.collection("analytics").add({
      ...data,
      timestamp: adminApp.firestore.FieldValue.serverTimestamp(),
      device: isMobile ? "mobile" : "desktop",
      browser: browser,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
