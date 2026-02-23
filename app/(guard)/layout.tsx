import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../(public)/globals.css";
const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Login",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} antialiased`}>
        <div className="flex min-h-screen">
          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
