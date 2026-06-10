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
  icon?: string;
  separator?: boolean;
};

export default function Typography({
  variant = "body",
  as,
  children,
  className = "",
  icon,
  separator,
}: TypographyProps) {
  const config = variants[variant];
  const Tag = as ?? config.as;

  const heading = (
    <Tag className={`${config.className} ${className}`.trim()}>
      {icon && (
        <span className="icon mr-2 align-middle text-[1.1em]">{icon}</span>
      )}
      {children}
    </Tag>
  );

  if (separator) {
    return (
      <Tag
        className={`flex w-full items-center gap-4 ${config.className} ${className}`.trim()}
      >
        {icon && <span className="icon align-middle text-[1.1em]">{icon}</span>}
        <span>{children}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
      </Tag>
    );
  }

  return heading;
}
