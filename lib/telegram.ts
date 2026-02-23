export class TelegramService {
  private static readonly BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  private static readonly CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  private static escapeMarkdown(text: string): string {
    return text.replace(/[_*\[\]()~`>#+\-=|{}.!]/g, "\\$&");
  }

  static async sendMessage(
    name: string,
    email: string,
    subject: string,
    message: string,
  ): Promise<void> {
    if (!this.BOT_TOKEN || !this.CHAT_ID) {
      throw new Error("Telegram credentials not configured");
    }

    const baseUrl = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;

    const escaped = {
      name: this.escapeMarkdown(name),
      email: this.escapeMarkdown(email),
      subject: this.escapeMarkdown(subject),
      message: this.escapeMarkdown(message),
    };

    const isLong = message.length > 150;
    const previewMessage = isLong ? message.substring(0, 150) + "..." : message;

    const text = `
*${escaped.subject}*

📧 *From*
\`${escaped.email}\` \\- ${escaped.name}

💬 *Message*
${this.escapeMarkdown(previewMessage)}
`.trim();

    const portfolioUrl = "https://cesarm.vercel.app/admin/message";
    const msgEncoded = Buffer.from(message).toString("base64");

    const viewFullUrl = `${portfolioUrl}?n=${encodeURIComponent(name)}&e=${encodeURIComponent(email)}&s=${encodeURIComponent(subject)}&msg=${encodeURIComponent(msgEncoded)}`;

    const workerBaseUrl = "https://crimson-unit-0b52.cesarium3600.workers.dev/";
    const proxyUrl = `${workerBaseUrl}?e=${email}&s=${encodeURIComponent("RE: " + subject)}`;

    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: this.CHAT_ID,
        text: text,
        parse_mode: "MarkdownV2",
        reply_markup: {
          inline_keyboard: [
            [{ text: "📧 Reply", url: proxyUrl }],
            [{ text: "👁️ View", url: viewFullUrl }],
          ],
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API Error: ${errorData.description}`);
    }
  }
}
