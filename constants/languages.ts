export const LANGUAGE_CONFIG = {
  Java: {
    label: "Java",
    colorClass: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  },
  TypeScript: {
    label: "TypeScript",
    colorClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  JavaScript: {
    label: "JavaScript",
    colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  },
  Python: {
    label: "Python",
    colorClass: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-500 border-yellow-500/20",
  },
  Rust: {
    label: "Rust",
    colorClass: "bg-orange-700/10 text-orange-700 dark:text-orange-500 border-orange-700/20",
  },
} as const;

export type Language = keyof typeof LANGUAGE_CONFIG;
