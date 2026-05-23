"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock3, HeartHandshake, MapPin, Sandwich, ShoppingBag,
  Sparkles, Star, Truck, UsersRound, ArrowRight, Phone, ChevronDown,
  Quote, Heart, Flame, ChefHat,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const teamMembers = [
  ["/food-lover-1.webp", "Biggs", "Founder & Head Chef", "Started it all with a grill and a secret pepper sauce recipe."],
  ["/food-lover-2.webp", "Auntie B", "Kitchen Lead", "The hands behind every perfectly seasoned plate."],
  ["/food-lover-3.webp", "Chef Kofi", "Flavor Specialist", "Never stops experimenting with new marinades and combos."],
];

const milestones = [
  ["2018", "Opened as a tiny 3-table spot with just jollof rice, chicken, and big dreams."],
  ["2019", "Added burgers and our famous Chapman — the neighborhood started talking."],
  ["2020", "Launched delivery during tough times and kept everyone fed, safely."],
  ["2022", "Expanded to a full family restaurant with the Combo Tray everyone loves."],
  ["2024", "25,000+ happy eaters served. New menu items dropping every season."],
];

export default function About() {
  const [isDark, setIsDark] = useState(false);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const theme = isDark
    ? "bg-neutral-950 text-stone-100"
    : "bg-stone-50 text-stone-900";

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-700 ${theme} font-body`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />

      {/* Hero Section — kept strong, slightly refined */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <Image
          src="/hero-bg2.jpg"
          alt="Uncle Biggs food spread"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-7xl px-5 pt-20 lg:px-8"
        >
          <div className="max-w-4xl">
            <motion.p
              variants={fadeUp}
              className="font-body text-sm font-bold uppercase tracking-[0.3em] text-[#fc791a]"
            >
              Our Story
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-7xl uppercase leading-[0.85] text-white md:text-8xl lg:text-[9rem]"
            >
              Built on <br />
              <span className="text-stroke-orange">Big Flavor</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-stone-200"
            >
              What started as a tiny counter with three tables is now the go-to spot
              for generous plates, warm smiles, and meals that bring people together.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#menu"
                className="group inline-flex items-center gap-2 rounded-full bg-[#fc791a] px-8 py-4 font-display text-xl uppercase text-white transition-all hover:bg-white hover:text-black hover:shadow-xl hover:shadow-orange-500/25"
              >
                See Our Menu
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/60"
        >
          <ChevronDown size={36} />
        </motion.div>
      </section>

      {/* The Origin Story — asymmetric, image-led */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="relative order-2 md:order-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src="/about-image.webp"
                  alt="Uncle Biggs early days"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="rounded-2xl object-cover shadow-2xl shadow-black/20"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-6 -right-6 rounded-2xl bg-[#fc791a] p-6 text-white shadow-xl shadow-orange-500/30"
                >
                  <Quote size={24} className="mb-2" />
                  <p className="font-body text-sm italic leading-relaxed max-w-48">
                    &quot;We just wanted to feed people like family.&quot;
                  </p>
                  <p className="mt-2 font-display text-lg uppercase">— Biggs</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="space-y-6 order-1 md:order-2"
            >
              <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">
                The Beginning
              </p>
              <h2 className="font-display text-6xl uppercase leading-none md:text-7xl">
                From a Tiny Counter to Your Table.
              </h2>
              <p className={`font-body text-base leading-relaxed ${isDark ? "text-stone-300" : "text-stone-600"}`}>
                In 2018, Biggs turned his love for jollof rice, grilled chicken, and bold
                pepper sauce into a small takeout counter. No fancy décor, just a grill,
                a few pots, and a belief that good food should be generous, affordable, and
                served with a smile.
              </p>
              <p className={`font-body text-base leading-relaxed ${isDark ? "text-stone-300" : "text-stone-600"}`}>
                Word spread fast. By 2020, we were delivering across the neighborhood. By 2022,
                we had a full restaurant with booths, combo trays, and the same warm welcome
                that started it all.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 font-body text-sm font-semibold dark:bg-white/10">
                  <Heart size={16} className="text-[#fc791a]" /> Made with love since 2018
                </div>
                <div className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 font-body text-sm font-semibold dark:bg-white/10">
                  <Flame size={16} className="text-[#fc791a]" /> 25,000+ meals served
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones — horizontal scroll on mobile, cards on desktop */}
      <section className={`py-20 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">The Journey</p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-none md:text-7xl">Milestones</h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible">
            {milestones.map(([year, desc], index) => (
              <motion.div
                key={year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="min-w-[250px] snap-center rounded-2xl p-6 shadow-lg flex-shrink-0 md:min-w-0"
                style={{
                  backgroundColor: index === 0 ? '#fc791a' : isDark ? 'rgba(255,255,255,0.05)' : '#f5f5f4',
                  color: index === 0 ? 'white' : 'inherit',
                }}
              >
                <p className={`font-display text-5xl ${index === 0 ? 'text-white' : 'text-[#fc791a]'}`}>{year}</p>
                <p className={`mt-3 font-body text-sm leading-relaxed ${index === 0 ? 'text-white/90' : (isDark ? 'text-stone-400' : 'text-stone-500')}`}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">The People</p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-none md:text-7xl">Meet the Crew</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {teamMembers.map(([image, name, role, bio]) => (
              <motion.div
                key={name}
                variants={fadeUp}
                className="group text-center"
              >
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-xl shadow-black/10">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="192px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-[#fc791a] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase">{name}</h3>
                <p className="font-body text-sm font-bold text-[#fc791a]">{role}</p>
                <p className={`mt-3 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                  {bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fun Stats Banner */}
      <div
        ref={statsRef}
        className={`py-16 ${isDark ? "bg-neutral-800" : "bg-[#fc791a]"}`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              ["25,000+", "Happy Customers"],
              ["2018", "Established"],
              ["50+", "Menu Items"],
              ["4.8", "Star Rating"],
            ].map(([number, label]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <p className="font-display text-5xl md:text-6xl">{number}</p>
                <p className="mt-2 font-body text-sm font-semibold uppercase tracking-wider text-white/80">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values — simplified, icon-forward */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">What We Stand For</p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-none md:text-7xl">The Biggs Way</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              [HeartHandshake, "Warm Welcome", "Every guest is family. From the first hello to the last bite, you're home."],
              [Sandwich, "Big Flavor", "No shortcuts. Every plate is seasoned, grilled, and served with boldness."],
              [Clock3, "Everyday Easy", "Quick lunches, family dinners, or a solo treat — we fit your rhythm."],
            ].map(([Icon, title, text]) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className={`group rounded-2xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl ${isDark ? "bg-white/5" : "bg-white shadow-lg shadow-stone-200/50"
                  }`}
              >
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#fc791a] text-white shadow-lg shadow-orange-500/20 transition-transform group-hover:scale-110">
                  <Icon size={32} />
                </span>
                <h3 className="mt-6 font-display text-4xl uppercase leading-none">{title}</h3>
                <p className={`mt-4 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA — warm, inviting */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative overflow-hidden rounded-2xl bg-[#282725] p-10 text-center text-white shadow-2xl shadow-black/20 md:p-16"
          >
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/hero-banner.webp"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative z-10">
              <p className="font-display text-5xl uppercase leading-none md:text-7xl">
                Ready to Eat With Us?
              </p>
              <p className="mt-4 font-body text-lg text-stone-300">
                Come hungry. Leave happy. That&apos;s the Uncle Biggs promise.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/menu"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#fc791a] px-8 py-4 font-display text-xl uppercase text-white transition-all hover:bg-white hover:text-black"
                >
                  See Full Menu
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-display text-xl uppercase text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                >
                  <MapPin size={20} />
                  Find Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
