import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Message Viewer",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function MessageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-mono text-sm opacity-50">
          Loading message...
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
