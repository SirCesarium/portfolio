import { db, adminApp } from "./firebase-admin";

export async function logError(error: unknown, context: string) {
  try {
    const message =
      typeof error === "string" ? error : (error as Error).message;

    let topStackLine: string | null = null;
    if (error instanceof Error && error.stack) {
      const lines = error.stack
        .split("\n")
        .map((line) =>
          line.replace(/([a-zA-Z]:)?[\\/][^ ]+/g, "[PROJECT_ROOT]"),
        );
      topStackLine = lines[1]?.trim() ?? null;
    }

    await db.collection("error_logs").add({
      context,
      message,
      topStackLine,
      severity: "ERROR",
      timestamp: adminApp.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) {
    console.error("Failed to log error:", e);
  }
}
