"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useRipple } from "@/hooks/useRipple";
import RippleEffect from "./RippleEffect";

type ButtonProps = {
  children: ReactNode;
  variant?: "filled" | "outline";
  href?: string;
  className?: string;
  icon?: ReactNode;
};

export default function Button({
  children,
  variant = "filled",
  href,
  icon,
  className = "",
}: ButtonProps) {
  const Tag = href ? motion.a : motion.button;
  const { ripples, addRipple, removeRipple } = useRipple();

  if (variant === "filled") {
    return (
      <Tag
        href={href}
        className={`relative flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-sm font-bold uppercase bg-primary text-black overflow-hidden transition-transform duration-100 hover:scale-105 active:scale-95 ${className}`}
        onPointerDownCapture={addRipple}
      >
        {icon && (
          <span className="flex items-center text-xl leading-none">{icon}</span>
        )}
        {children}
        <RippleEffect
          ripples={ripples}
          color="rgba(0,0,0,0.45)"
          onRemove={removeRipple}
        />
      </Tag>
    );
  }

  return (
    <Tag
      href={href}
      className={`group relative flex h-12 items-center justify-center rounded-lg px-8 text-sm font-bold uppercase border-2 border-primary text-primary overflow-hidden transition-transform duration-100 hover:scale-105 active:scale-95 ${className}`}
      onPointerDownCapture={addRipple}
    >
      <div className="absolute inset-0 bg-primary origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <span className="relative inline-flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
        {icon && (
          <span className="flex items-center text-xl leading-none">{icon}</span>
        )}
        {children}
      </span>
      <RippleEffect
        ripples={ripples}
        color="rgba(0,0,0,0.45)"
        onRemove={removeRipple}
      />
    </Tag>
  );
}
