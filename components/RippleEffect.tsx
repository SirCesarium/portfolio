"use client";

import type { Ripple } from "@/hooks/useRipple";

type RippleEffectProps = {
  ripples: Ripple[];
  color?: string;
  onRemove: (id: number) => void;
};

export default function RippleEffect({
  ripples,
  color = "rgba(255,255,255,0.4)",
  onRemove,
}: RippleEffectProps) {
  return (
    <span className="absolute inset-0 pointer-events-none z-50" aria-hidden>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            background: color,
            animation: "ripple-expand 0.6s ease-out forwards",
          }}
          onAnimationEnd={() => onRemove(r.id)}
        />
      ))}
    </span>
  );
}
