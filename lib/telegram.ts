import { logError } from "./logger";

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
  ): Promise<boolean> {
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

    const text = `
*${escaped.subject}*

📧 *From*
\`${escaped.email}\` - ${escaped.name}

💬 *Message*
${escaped.message}
`.trim();

    try {
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: this.CHAT_ID,
          text: text,
          parse_mode: "MarkdownV2",
        }),
      });

      return response.ok;
    } catch (error) {
      await logError(error, "telegram-service");
      return false;
    }
  }
}
