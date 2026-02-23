"use client";

import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubLogo } from "../components/icons";
import { useContactForm } from "@/hooks/use-contact-form";
import { CustomInput } from "@/components/ui/custom-input";
import { SectionLayout } from "@/components/section-layout";
import { SOCIAL_LINKS } from "@/constants/links";

const Contact = () => {
  const { status, sendEmail } = useContactForm();

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${SOCIAL_LINKS.email()}`;
  };

  return (
    <SectionLayout
      id="contact"
      title="Contact"
      subtitle="Reach out via form or use one of the quick links below"
    >
      <form onSubmit={sendEmail} className="flex flex-col gap-4 mb-8">
        <CustomInput name="name" placeholder="Name" required />
        <CustomInput name="email" type="email" placeholder="Email" required />
        <CustomInput name="subject" placeholder="Subject" maxLength={200} />
        <CustomInput name="message" placeholder="Message" isTextArea required />

        <input
          type="text"
          name="address_verify"
          className="hidden"
          tabIndex={-1}
        />

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full font-bold shadow-none"
          data-track-id="contact-submit-button"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className="text-green-500 text-center">Message sent!</p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-center">Error sending message.</p>
        )}
      </form>

      {/* Quick Links */}
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <Button
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer"
          onClick={handleEmailClick}
          data-track-id="contact-email-link"
        >
          <Mail className="w-4 h-4" /> Email Me
        </Button>

        <Button
          asChild
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            data-track-id="contact-github-link"
          >
            <GithubLogo className="w-4 h-4" /> GitHub
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-track-id="contact-linkedin-link"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="flex items-center gap-2 px-4 py-2 rounded-full"
        >
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            data-track-id="contact-telegram-link"
          >
            <MessageCircle className="w-4 h-4" /> Telegram
          </a>
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Contact;
