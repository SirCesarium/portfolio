export interface SessionData {
  duration_seconds: number;
  max_scroll_percent: number;
  time_per_section: Record<string, number>;
  clicks: Array<{
    button_id: string;
    section: string;
    time_offset: number;
  }>;
}

export const saveSessionData = async (data: SessionData) => {
  try {
    await fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      keepalive: true,
    });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to send analytics:", e);
    }
  }
};
