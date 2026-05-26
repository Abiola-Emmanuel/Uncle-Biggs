"use client";

import { createClient } from "@/lib/supabase/client";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleEmailSignUp(event) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setStatus("");

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setIsLoading(false);
      return;
    }

    setStatus("Account created. Taking you to your account...");
    router.push("/account");
    router.refresh();
  }

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setError("");

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
    const { error: googleError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/callback`,
      },
    });

    if (googleError) {
      setError(googleError.message);
      setIsLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen bg-stone-50 text-stone-900 lg:grid-cols-[0.95fr_1fr]">
      <section className="flex items-center justify-center px-5 py-20">
        <div className="w-full max-w-md">
          <Link href="/" className="font-[var(--font-heading)] text-3xl uppercase text-[#fc791a] lg:hidden">
            Uncle Biggs
          </Link>
          <p className="mt-8 font-[var(--font-main)] text-sm font-bold uppercase tracking-[0.25em] text-[#fc791a] lg:mt-0">
            Sign up
          </p>
          <h1 className="mt-3 font-[var(--font-heading)] text-6xl uppercase leading-none">
            Create Account
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            Join Uncle Biggs for easier account access today and smoother ordering later.
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

          <form onSubmit={handleEmailSignUp} className="grid gap-5">
            <label className="grid gap-2 text-sm font-bold uppercase">
              Full name
              <span className="relative">
                <UserRound className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="h-12 w-full rounded-full border border-stone-200 bg-white px-11 text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-4 focus:ring-[#fc791a]/15"
                  placeholder="Your name"
                />
              </span>
            </label>

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
                  minLength={6}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="h-12 w-full rounded-full border border-stone-200 bg-white px-11 pr-12 text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-4 focus:ring-[#fc791a]/15"
                  placeholder="At least 6 characters"
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
              {isLoading ? "Creating..." : "Create account"}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-stone-500">
            Already have an account?{" "}
            <Link href="/signin" className="font-bold text-[#fc791a] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </section>

      <section className="relative hidden overflow-hidden lg:block">
        <Image
          src="/food-taste.webp"
          alt="Uncle Biggs fresh meal"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white">
          <Link href="/" className="font-[var(--font-heading)] text-4xl uppercase">
            Uncle Biggs
          </Link>
          <h2 className="mt-8 max-w-xl font-[var(--font-heading)] text-7xl uppercase leading-[0.85]">
            Your Table Is Waiting.
          </h2>
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
