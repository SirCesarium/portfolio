import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/screens/footer";
import Telemetry from "@/components/telemetry";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Cesar Marcano | Backend Developer",
  description:
    "Backend developer focused on decoupled, testable systems and data integrity. I build maintainable API flows and open-source tools to solve real development friction.",
  openGraph: {
    title: "Cesar Marcano | Backend Developer",
    description:
      "Backend developer focused on decoupled, testable systems and data integrity.",
    url: "https://cesarm.vercel.app",
    siteName: "Cesar Marcano",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cesar Marcano | Backend Developer",
    description:
      "Backend developer focused on decoupled, testable systems and data integrity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" fill="%238B5CF6">💼</text></svg>',
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" fill="%238B5CF6">💼</text></svg>',
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90" fill="%238B5CF6">💼</text></svg>',
        type: "image/svg+xml",
      },
    ],
  },
  metadataBase: new URL("https://cesarm.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} antialiased`}>
        <Telemetry />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
