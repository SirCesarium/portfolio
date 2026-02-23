"use client";

import { SectionHeader } from "@/components/section-header";
import { motion } from "framer-motion";

interface SectionLayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  isFullWidth?: boolean;
}

export const SectionLayout = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  isFullWidth = false,
}: SectionLayoutProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
        margin: "0px 0px -100px 0px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      id={id}
      className={`relative py-20 px-6 ${className}`}
    >
      <div
        className={`${isFullWidth ? "max-w-screen-xl" : "max-w-screen-md"} mx-auto`}
      >
        <SectionHeader title={title} subtitle={subtitle} />
        {children}
      </div>
    </motion.section>
  );
};
