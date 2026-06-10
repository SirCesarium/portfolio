"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type UnderlineProps = {
  children: ReactNode;
  className?: string;
};

export default function Underline({
  children,
  className = "",
}: UnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        style={{ transformOrigin: "left center" }}
        className="absolute -bottom-0.5 left-0 h-[0.35em] w-full -rotate-1 rounded-sm bg-primary/40"
      />
    </span>
  );
}
