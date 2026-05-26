"use client";

import { createClient } from "@/lib/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import { LogOut, Menu, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Menu', link: '/menu' },
  { id: 4, name: 'Contact', link: '/contact' }

];

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    setIsMenuOpen(false);
    router.push("/signin");
    router.refresh();
  }

  const linkColor = scrolled ? "text-stone-950 after:bg-stone-950" : "text-white after:bg-white";
  const menuButtonColor = scrolled ? "border-stone-300 text-stone-950" : "border-white/40 text-white";
  const authButtonClass = scrolled
    ? "border-stone-300 text-stone-950 hover:border-[#fc791a] hover:text-[#fc791a]"
    : "border-white/40 text-white hover:border-white hover:bg-white hover:text-stone-950";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg shadow-black/10" : "bg-transparent"
          }`}
      >
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" aria-label="Uncle Biggs home">
            <Image
              src="/logo.svg"
              width={50}
              height={50}
              alt="Uncle Biggs"
              className="rounded-full"
              priority
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`relative font-[var(--font-main)] text-sm font-semibold uppercase transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:-translate-y-0.5 hover:after:w-full ${linkColor}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="hidden items-center gap-2 sm:flex">
                <Link
                  href="/account"
                  aria-label="Account"
                  className={`grid size-11 place-items-center rounded-full border transition ${authButtonClass}`}
                >
                  <UserRound size={18} />
                </Link>
                <button
                  type="button"
                  aria-label="Sign out"
                  onClick={handleSignOut}
                  className={`grid size-11 place-items-center rounded-full border transition ${authButtonClass}`}
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className={`hidden rounded-full border px-5 py-3 font-[var(--font-main)] text-xs font-bold uppercase transition sm:inline-flex ${authButtonClass}`}
              >
                Sign in
              </Link>
            )}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
              className={`grid size-11 place-items-center rounded-full border lg:hidden ${menuButtonColor}`}
            >
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-6 bg-black/95 text-white"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-6 top-6 grid size-12 place-items-center rounded-full border border-white/20"
            >
              <X />
            </button>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="font-[var(--font-main)] text-xl font-bold uppercase tracking-wide transition hover:scale-110 hover:text-[#fc791a]"
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/account"
                  onClick={() => setIsMenuOpen(false)}
                  className="font-[var(--font-main)] text-xl font-bold uppercase tracking-wide transition hover:scale-110 hover:text-[#fc791a]"
                >
                  Account
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="font-[var(--font-main)] text-xl font-bold uppercase tracking-wide transition hover:scale-110 hover:text-[#fc791a]"
                >
                  Sign out
                </button>
              </>
            ) : (
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="font-[var(--font-main)] text-xl font-bold uppercase tracking-wide transition hover:scale-110 hover:text-[#fc791a]"
              >
                Sign in
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
