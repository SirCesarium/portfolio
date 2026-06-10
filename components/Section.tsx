"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Typography from "./Typography";

type SectionProps = {
  id: string;
  title: string;
  icon?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  icon,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`flex w-full max-w-4xl flex-col py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography variant="h2" icon={icon} separator>
          {title}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
