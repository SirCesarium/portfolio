export const saveSessionData = async (data: any) => {
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
