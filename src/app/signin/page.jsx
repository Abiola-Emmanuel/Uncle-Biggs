"use client";

import { createClient } from "@/lib/supabase/client";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useMemo, useState } from "react";

export default function SignInPage() {
  return (
    <Suspense fallback={<SignInShell />}>
      <SignInForm />
    </Suspense>
  );
}

function SignInShell() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-50 px-5 text-stone-900">
      <p className="font-[var(--font-heading)] text-4xl uppercase text-[#fc791a]">
        Uncle Biggs
      </p>
    </main>
  );
}

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const next = searchParams.get("next") || "/account";

  async function handleEmailSignIn(event) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setStatus("");

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setIsLoading(false);
      return;
    }

    setStatus("Welcome back. Taking you to your account...");
    router.push(next);
    router.refresh();
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setError("");

    const { error: googleError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (googleError) {
      setError(googleError.message);
      setIsLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen bg-stone-50 text-stone-900 lg:grid-cols-[1fr_0.95fr]">
      <section className="relative hidden overflow-hidden lg:block">
        <Image
          src="/hero-banner.webp"
          alt="Uncle Biggs meal spread"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
          <Link href="/" className="font-[var(--font-heading)] text-4xl uppercase">
            Uncle Biggs
          </Link>
          <h1 className="mt-8 max-w-xl font-[var(--font-heading)] text-7xl uppercase leading-[0.85]">
            Big Flavor Starts Here.
          </h1>
        </div>
      </section>

      <section className="flex items-center justify-center px-5 py-20">
        <div className="w-full max-w-md">
          <Link href="/" className="font-[var(--font-heading)] text-3xl uppercase text-[#fc791a] lg:hidden">
            Uncle Biggs
          </Link>
          <p className="mt-8 font-[var(--font-main)] text-sm font-bold uppercase tracking-[0.25em] text-[#fc791a] lg:mt-0">
            Sign in
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-6xl uppercase leading-none">
            Welcome Back
          </h2>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            Sign in to manage your Uncle Biggs account and keep your favorites close.
          </p>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full border border-stone-300 bg-white px-5 text-sm font-bold text-stone-800 transition hover:border-stone-950 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <GoogleLogo />
            Continue with Google
          </button>

          <div className="my-7 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-400">
            <span className="h-px flex-1 bg-stone-200" />
            Or
            <span className="h-px flex-1 bg-stone-200" />
          </div>

          <form onSubmit={handleEmailSignIn} className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold uppercase">
              Email
              <span className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 w-full rounded-full border border-stone-200 bg-white px-11 text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-4 focus:ring-[#fc791a]/15"
                  placeholder="you@example.com"
                />
              </span>
            </label>

            <label className="grid gap-2 text-sm font-bold uppercase">
              Password
              <span className="relative">
                <LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 w-full rounded-full border border-stone-200 bg-white px-11 pr-12 text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-4 focus:ring-[#fc791a]/15"
                  placeholder="Your password"
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>

            {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            {status && <p className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">{status}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#fc791a] px-6 font-[var(--font-heading)] text-xl uppercase text-white transition hover:bg-stone-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? "Signing in..." : "Sign in"}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-stone-500">
            New here?{" "}
            <Link href="/signup" className="font-bold text-[#fc791a] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}

function GoogleLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3.01h3.88c2.27-2.09 3.54-5.17 3.54-8.88Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.85l-3.88-3.01c-1.08.72-2.45 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96H1.26v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.32A7.22 7.22 0 0 1 4.89 12c0-.81.14-1.59.38-2.32v-3.1H1.26A12 12 0 0 0 0 12c0 1.93.46 3.75 1.26 5.42l4.01-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.72c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.55 11.55 0 0 0 12 0 12 12 0 0 0 1.26 6.58l4.01 3.1C6.22 6.83 8.87 4.72 12 4.72Z"
      />
    </svg>
  );
}
