"use client";

import { motion } from "framer-motion";
import { type ReactNode, useRef, useState } from "react";
import RippleEffect, { type Ripple } from "./RippleEffect";

type ButtonProps = {
  children: ReactNode;
  variant?: "filled" | "outline";
  href?: string;
  className?: string;
};

export default function Button({
  children,
  variant = "filled",
  href,
  className = "",
}: ButtonProps) {
  const Tag = href ? motion.a : motion.button;
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);

  function handlePointerDown(e: React.PointerEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = nextId.current++;
    setRipples((prev) => [...prev, { id, x, y, size }]);
  }

  function removeRipple(id: number) {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  }

  if (variant === "filled") {
    return (
      <Tag
        href={href}
        className={`relative flex h-12 items-center justify-center rounded-lg px-8 text-sm font-bold bg-primary text-black overflow-hidden ${className}`}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        transition={{ duration: 0.1 }}
        onPointerDownCapture={handlePointerDown}
      >
        {children}
        <RippleEffect
          ripples={ripples}
          color="rgba(0,0,0,0.25)"
          onRemove={removeRipple}
        />
      </Tag>
    );
  }

  return (
    <Tag
      href={href}
      className={`group relative flex h-12 items-center justify-center rounded-lg px-8 text-sm font-bold border-2 border-primary text-primary overflow-hidden ${className}`}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.1 }}
      onPointerDownCapture={handlePointerDown}
    >
      <div className="absolute inset-0 bg-primary origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      <span className="relative transition-colors duration-300 group-hover:text-black">
        {children}
      </span>
      <RippleEffect
        ripples={ripples}
        color="rgba(255,255,255,0.35)"
        onRemove={removeRipple}
      />
    </Tag>
  );
}
