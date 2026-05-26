import Link from "next/link";

export const metadata = {
  title: "Auth Error | Uncle Biggs",
};

export default function AuthCodeErrorPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-50 px-5 text-stone-900">
      <section className="w-full max-w-md rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-xl shadow-stone-200/60">
        <p className="font-[var(--font-main)] text-sm font-bold uppercase tracking-[0.25em] text-[#fc791a]">
          Sign in issue
        </p>
        <h1 className="mt-4 font-[var(--font-heading)] text-5xl uppercase leading-none">
          That Link Did Not Work
        </h1>
        <p className="mt-4 text-sm leading-6 text-stone-500">
          The auth link may have expired or the sign-in flow was interrupted.
          Try signing in again.
        </p>
        <Link
          href="/signin"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#fc791a] px-7 py-3 font-[var(--font-heading)] text-xl uppercase text-white transition hover:bg-stone-950"
        >
          Back to sign in
        </Link>
      </section>
    </main>
  );
}
