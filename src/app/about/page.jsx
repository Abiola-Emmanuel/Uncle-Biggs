"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Clock3,
  HeartHandshake,
  MapPin,
  Sandwich,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  [HeartHandshake, "Warm Welcome", "Friendly service that makes every visit feel relaxed and familiar."],
  [Sandwich, "Big Flavor", "Burgers, chicken, rice plates, sides, and drinks made for real cravings."],
  [Clock3, "Everyday Easy", "Quick lunches, family dinners, takeout runs, and casual celebrations."],
];

const highlights = [
  ["Fresh Meals", "Cooked with dependable ingredients and served hot."],
  ["Family Tables", "Enough room, flavor, and variety for everyone."],
  ["Fast Pickup", "Order, swing by, and keep your day moving."],
  ["Good Value", "Comforting portions without making it complicated."],
];

const gallery = [
  ["/popular-2.webp", "Golden chicken meal"],
  ["/hero-burger.png", "Uncle Biggs burger"],
  ["/expensive1.jpg", "Rice plate"],
  ["/drink5.jpg", "Chilled Chapman drink"],
];

export default function About() {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark
    ? "bg-neutral-950 text-stone-100"
    : "bg-[#f8f6f2] text-[#383632]";

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-500 ${theme}`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark((value) => !value)} />

      <section className="relative flex h-[100vh] items-center overflow-hidden px-5 pb-16 pt-32">
        <img src="/hero-bg2.jpg" alt="Uncle Biggs food spread" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
        >
          <div className="max-w-3xl">
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-[#fc791a]">
              About Uncle Biggs
            </p>
            <h1 className="mt-5 font-[var(--font-heading)] text-7xl uppercase leading-[0.9] text-stroke-white md:text-7xl lg:text-[7.5rem]">
              Food That Feels <span className="block text-white">Like Home</span>
            </h1>
            <p className="mt-7 max-w-2xl font-[var(--font-alt)] text-base leading-8 text-stone-200 md:text-lg">
              Uncle Biggs is built for people who want tasty food without the fuss:
              generous plates, familiar favorites, fast service, and a space where friends
              and families can settle in comfortably.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:max-w-xl lg:justify-self-end">
            {[
              [UsersRound, "Family Friendly"],
              [Truck, "Quick Delivery"],
              [ShoppingBag, "Easy Takeout"],
              [Star, "Customer Favorites"],
            ].map(([Icon, label]) => (
              <div key={label} className="rounded-lg bg-white/10 p-5 text-white shadow-xl shadow-black/20 backdrop-blur">
                <Icon className="text-[#fc791a]" size={28} />
                <p className="mt-4 font-[var(--font-heading)] text-3xl uppercase leading-none">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 md:py-28">
        {/* <h2 className="pointer-events-none text-center font-[var(--font-heading)] text-7xl uppercase leading-none text-stone-500/20 md:text-[8rem] lg:text-[12rem]">
          Our Story
        </h2> */}

        <div className="mx-auto -mt-2 grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:items-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-red-600">
              From quick bites to family tables
            </p>
            <h2 className="font-[var(--font-heading)] text-5xl uppercase leading-none md:text-6xl lg:text-7xl">
              A Restaurant Made For Everyday Hunger.
            </h2>
            <p className={`font-[var(--font-alt)] text-base leading-8 ${isDark ? "text-stone-300" : "text-stone-500"}`}>
              We are shaping Uncle Biggs as a warm neighborhood restaurant where the menu is
              easy to love and the mood is always welcoming. Think crispy chicken, filling rice
              plates, burgers, sides, cold drinks, and meals that work for one person or the whole table.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map(([title, text]) => (
                <div key={title} className={`rounded-lg border p-4 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white/70"}`}>
                  <p className="font-[var(--font-heading)] text-3xl uppercase leading-none">{title}</p>
                  <p className={`mt-2 font-[var(--font-alt)] text-sm leading-6 ${isDark ? "text-stone-400" : "text-stone-500"}`}>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <img src="/about-image.webp" alt="Uncle Biggs kitchen preparation" className="h-[520px] w-full rounded-lg object-cover shadow-2xl shadow-black/15" />
            <div className="absolute -bottom-8 left-5 right-5 rounded-lg bg-[#fc791a] px-6 py-5 text-white shadow-xl shadow-black/20 sm:left-auto sm:w-72">
              <Sparkles size={26} />
              <p className="mt-3 font-[var(--font-heading)] text-4xl uppercase leading-none">Fresh, Filling, Familiar.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? "bg-neutral-900" : "bg-white/60"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-red-600">What we stand for</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-5xl uppercase leading-none md:text-7xl">The Biggs Way</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(([Icon, title, text]) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                className={`rounded-lg p-8 text-center shadow-lg shadow-black/5 ${isDark ? "bg-white/5" : "bg-[#f8f6f2]"}`}
              >
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-white text-[#fc791a] shadow-lg shadow-black/10">
                  <Icon size={28} />
                </span>
                <h3 className="mt-6 font-[var(--font-heading)] text-4xl uppercase leading-none">{title}</h3>
                <p className={`mt-3 font-[var(--font-alt)] leading-7 ${isDark ? "text-stone-400" : "text-stone-500"}`}>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-4">
            {gallery.map(([image, alt]) => (
              <motion.img
                key={image}
                src={image}
                alt={alt}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="h-72 w-full rounded-lg object-cover shadow-lg shadow-black/10"
              />
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-lg bg-[#282725] px-6 py-8 text-center text-white md:flex-row md:px-10 md:text-left">
            <div>
              <p className="font-[var(--font-heading)] text-4xl uppercase leading-none md:text-5xl">Ready For Something Tasty?</p>
              <p className="mt-2 font-[var(--font-alt)] text-stone-300">Come hungry, bring people, or order your favorites to go.</p>
            </div>
            <Link href="/#menu" className="inline-flex items-center gap-2 rounded-md bg-[#fc791a] px-6 py-3 font-[var(--font-alt)] text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black">
              See Menu
              <MapPin size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
