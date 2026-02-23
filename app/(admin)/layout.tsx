import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../(public)/globals.css";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { redirect } from "next/navigation";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "CMS Admin",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.className} antialiased`}>
        <div className="flex min-h-screen">
          <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tighter mb-8">
                CMS Admin
              </h2>
              <nav className="space-y-2">
                <a
                  href="/admin"
                  className="block p-2 hover:bg-zinc-900 rounded-md transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="/admin/projects"
                  className="block p-2 hover:bg-zinc-900 rounded-md transition-colors"
                >
                  Projects
                </a>
              </nav>
            </div>
          </aside>

          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
