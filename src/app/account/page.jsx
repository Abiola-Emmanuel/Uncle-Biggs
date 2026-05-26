import { signOut } from "@/app/account/actions";
import { createClient } from "@/lib/supabase/server";
import { ArrowLeft, LogOut, Mail, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Account | Uncle Biggs",
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin?next=/account");
  }

  const displayName =
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split("@")[0] ||
    "Guest";

  return (
    <main className="min-h-screen bg-stone-50 px-5 py-10 text-stone-900">
      <section className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-stone-700 transition hover:border-stone-950"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-xl shadow-stone-200/70">
          <div className="bg-[#282725] px-8 py-10 text-white md:px-10">
            <p className="font-[var(--font-main)] text-sm font-bold uppercase tracking-[0.25em] text-[#fc791a]">
              Uncle Biggs Account
            </p>
            <h1 className="mt-4 font-[var(--font-heading)] text-6xl uppercase leading-none md:text-7xl">
              Hi, {displayName}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-300">
              Your account is active. We will use this space for favorites,
              saved details, and order history as the app grows.
            </p>
          </div>

          <div className="grid gap-5 p-8 md:grid-cols-3 md:p-10">
            <article className="rounded-2xl border border-stone-200 p-6">
              <Mail className="text-[#fc791a]" size={28} />
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                Email
              </p>
              <p className="mt-2 break-words text-sm font-bold">{user.email}</p>
            </article>

            <article className="rounded-2xl border border-stone-200 p-6">
              <UserRound className="text-[#fc791a]" size={28} />
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                Provider
              </p>
              <p className="mt-2 text-sm font-bold uppercase">
                {user.app_metadata?.provider || "email"}
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 p-6">
              <ShieldCheck className="text-[#fc791a]" size={28} />
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-stone-400">
                Status
              </p>
              <p className="mt-2 text-sm font-bold uppercase">Signed in</p>
            </article>
          </div>

          <div className="border-t border-stone-100 p-8 md:p-10">
            <form action={signOut}>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-3 font-[var(--font-heading)] text-xl uppercase text-white transition hover:bg-[#fc791a]"
              >
                Sign out
                <LogOut size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
