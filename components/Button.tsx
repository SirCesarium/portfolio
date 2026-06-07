"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
};

const base =
  "flex h-12 items-center justify-center rounded-lg px-8 text-sm font-bold";

const primary = `${base} bg-secondary text-black`;
const secondary = `${base} border-2 border-secondary text-secondary`;

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      className={`${variant === "primary" ? primary : secondary} transition-colors duration-250 ${className}`}
      whileHover={
        variant === "primary"
          ? { scale: 1.06, backgroundColor: "#fb4934" }
          : { scale: 1.06, backgroundColor: "#fb4934", color: "#000000" }
      }
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </Tag>
  );
}
