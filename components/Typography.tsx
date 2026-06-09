import type { ReactNode } from "react";

const variants = {
  h1: {
    as: "h1",
    className:
      "text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl",
  },
  h2: {
    as: "h2",
    className: "text-2xl font-bold leading-tight text-text sm:text-3xl",
  },
  h3: {
    as: "h3",
    className: "text-xl font-bold leading-tight text-text sm:text-2xl",
  },
  h4: {
    as: "h4",
    className: "text-lg font-semibold leading-tight text-text",
  },
  lead: {
    as: "p",
    className: "text-xl text-text/70 sm:text-2xl",
  },
  body: {
    as: "p",
    className: "text-base leading-relaxed text-text/80",
  },
  small: {
    as: "p",
    className: "text-sm leading-relaxed text-text/60",
  },
  muted: {
    as: "span",
    className: "text-text/50",
  },
} as const;

type Variant = keyof typeof variants;

type TypographyProps = {
  variant?: Variant;
  as?: keyof HTMLElementTagNameMap;
  children: ReactNode;
  className?: string;
};

export default function Typography({
  variant = "body",
  as,
  children,
  className = "",
}: TypographyProps) {
  const config = variants[variant];
  const Tag = as ?? config.as;

  return (
    <Tag className={`${config.className} ${className}`.trim()}>{children}</Tag>
  );
}
