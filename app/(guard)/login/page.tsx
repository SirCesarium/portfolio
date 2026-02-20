"use client";
import { createBrowserClient } from "@supabase/ssr";

export default function LoginPage() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Error while connecting to github");
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="rounded-lg bg-white px-6 py-3 font-medium text-black transition-all hover:bg-zinc-200 active:scale-95"
    >
      Login
    </button>
  );
}
