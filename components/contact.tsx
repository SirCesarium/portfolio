"use client";

import { useState } from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubLogo } from "./icons";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 max-w-xl mx-auto">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Contact
          </h2>
          <p className="text-muted-foreground mt-2">
            Reach out via form or use one of the quick links below
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mb-8"
          autoComplete="off"
        >
          <input
            name="name"
            placeholder="Name"
            required
            className="p-2 bg-secondary/20 border border-accent rounded"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-2 bg-secondary/20 border border-accent rounded"
          />
          <input
            name="subject"
            placeholder="Subject"
            className="p-2 bg-secondary/20 border border-accent rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="p-2 bg-secondary/20 border border-accent rounded h-32"
          />

          <input
            type="text"
            name="address_verify"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            data-track-id="contact-form-submit"
            className="bg-primary text-primary-foreground py-2 rounded-full font-bold disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500">Message sent!</p>
          )}
          {status === "error" && (
            <p className="text-red-500">Error sending message.</p>
          )}
        </form>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-full"
          >
            {/* TODO: change email */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${["cesar", "marcano.dev"].join("@")}`;
              }}
              data-track-id="contact-email-link"
            >
              <Mail className="w-4 h-4" /> Email Me
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full"
          >
            <a
              href="https://github.com/SirCesarium"
              target="_blank"
              data-track-id="contact-github-link"
            >
              <GithubLogo className="w-4 h-4" /> GitHub
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            data-track-id="contact-linkedin-link"
          >
            {/* TODO: change linkedin link */}
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            data-track-id="contact-telegram-link"
          >
            {/* TODO: change telegram */}
            <a href="https://t.me/yourtelegram" target="_blank">
              <MessageCircle className="w-4 h-4" /> Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
