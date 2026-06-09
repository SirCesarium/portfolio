"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRipple } from "@/hooks/useRipple";
import RippleEffect from "./RippleEffect";

type NavItemProps = {
  icon: string;
  label: string;
  href?: string;
  isActive?: boolean;
};

export default function NavItem({ icon, label, href, isActive }: NavItemProps) {
  const Tag = href ? motion.a : motion.button;
  const { ripples, addRipple, removeRipple } = useRipple();

  return (
    <Tag
      href={href}
      className={`relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-3 transition-colors duration-300 ${
        isActive
          ? "text-primary bg-primary/10"
          : "text-text/60 hover:text-text hover:bg-white/[0.04]"
      }`}
      onPointerDownCapture={addRipple}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="active-bar"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full bg-primary origin-center"
          />
        )}
      </AnimatePresence>
      <span
        className="icon text-xl transition-all duration-300"
        style={
          isActive
            ? {
                fontVariationSettings:
                  '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
              }
            : undefined
        }
      >
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
      <RippleEffect
        ripples={ripples}
        color="rgba(255,255,255,0.12)"
        onRemove={removeRipple}
      />
    </Tag>
  );
}
