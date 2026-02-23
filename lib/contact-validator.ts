export class ContactValidator {
  private static readonly BLACKLIST = [
    "crypto",
    "casino",
    "poker",
    "buy followers",
  ];

  // Note: This endpoint is intentionally restricted to browser-based clients.
  // User-Agent filtering is used as a heuristic, not as a security boundary.
  private static readonly BOT_AGENTS = [
    "headless",
    "selenium",
    "python",
    "postman",
    "axios",
  ];

  static isBot(
    userAgent: string,
    honeypot: string | null | undefined,
  ): boolean {
    if (honeypot?.trim()) return true;
    const agent = userAgent.toLowerCase();

    const botPattern = new RegExp(this.BOT_AGENTS.join("|"), "i");
    return botPattern.test(agent);
  }

  static isSpam(message: string, subject: string): boolean {
    const content = `${message} ${subject}`.toLowerCase();
    return this.BLACKLIST.some((word) => content.includes(word));
  }
}
