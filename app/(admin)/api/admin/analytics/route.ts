import { adminApp } from "@/lib/firebase-admin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = adminApp.firestore();
    const snapshot = await db
      .collection("analytics")
      .orderBy("timestamp", "desc")
      .limit(500)
      .get();

    const stats = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        timestamp: data.timestamp?.toDate ? data.timestamp.toDate() : data.timestamp,
      };
    });

    return NextResponse.json(stats, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
