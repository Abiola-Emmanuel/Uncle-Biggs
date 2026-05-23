"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays, Clock3, Mail, MapPin,
  MessageCircle, Phone, Send, ShoppingBag,
  Star, Truck, UsersRound, ChevronDown, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const contactCards = [
  [Phone, "Call Us", "1-800-222-000", "For orders, quick questions, and table requests.", "tel:1800222000"],
  [Mail, "Email Us", "hello@unclebiggs.com", "For partnerships, events, feedback, and support.", "mailto:hello@unclebiggs.com"],
  [MapPin, "Visit Us", "Your favorite neighborhood restaurant", "Come in for dine-in, pickup, and family meals.", "/#about"],
];

const quickActions = [
  [ShoppingBag, "Pickup Orders", "Place an order and swing by when it's hot.", "/menu"],
  [Truck, "Delivery Help", "Ask about delivery areas, timing, and group orders.", "tel:1800222000"],
  [UsersRound, "Private Events", "Plan birthday meals, office trays, and family moments.", "mailto:hello@unclebiggs.com"],
  [MessageCircle, "Feedback", "Tell us what you loved or what we can improve.", "#form"],
];

const hours = [
  ["Monday - Thursday", "9:00 AM - 10:00 PM"],
  ["Friday", "9:00 AM - 11:00 PM"],
  ["Saturday", "10:00 AM - 11:00 PM"],
  ["Sunday", "11:00 AM - 9:00 PM"],
];

export default function ContactPage() {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark
    ? "bg-neutral-950 text-stone-100"
    : "bg-stone-50 text-stone-900";

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-700 ${theme} font-body`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <Image
          src="/demo-restaurant-footer-bg.jpg.webp"
          alt="Uncle Biggs restaurant contact"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />

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
              Talk To Uncle Biggs
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-7xl uppercase leading-[0.85] text-white md:text-8xl lg:text-[9rem]"
            >
              Let&apos;s Get <br />
              <span className="text-stroke-orange">You Fed</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-stone-200"
            >
              Need help with an order, a family tray, an event meal, or directions?
              Send a note, call the team, or stop by for something fresh and filling.
            </motion.p>
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

      {/* Contact Cards — redesigned with new font system */}
      <section className="relative py-20 md:py-28">
        {/* Watermark */}
        <h2 className="pointer-events-none select-none text-center font-display text-7xl uppercase leading-none text-stone-500/10 md:text-[8rem] lg:text-[12rem]">
          Contact
        </h2>

        <div className="mx-auto -mt-8 grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
          {contactCards.map(([Icon, title, value, text, href]) => (
            <motion.a
              key={title}
              href={href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              className={`group rounded-2xl border p-8 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${isDark
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-stone-200 bg-white hover:shadow-stone-300/50"
                }`}
            >
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#fc791a] text-white shadow-lg shadow-orange-500/20 transition-transform group-hover:scale-110">
                <Icon size={32} />
              </span>
              <h2 className="mt-6 font-display text-4xl uppercase leading-none">{title}</h2>
              <p className="mt-3 font-body font-bold text-[#fc791a] group-hover:underline">{value}</p>
              <p className={`mt-2 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                {text}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Quick Action Cards */}
      <section className={`py-16 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">How Can We Help?</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">Quick Actions</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {quickActions.map(([Icon, title, text, href]) => (
              <motion.a
                key={title}
                href={href}
                variants={fadeUp}
                className={`group rounded-2xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${isDark
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-stone-50 hover:bg-white hover:shadow-stone-200/50"
                  }`}
              >
                <Icon className="mx-auto text-[#fc791a] transition-transform group-hover:scale-110" size={32} />
                <h3 className="mt-4 font-display text-2xl uppercase leading-none">{title}</h3>
                <p className={`mt-2 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                  {text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-body text-xs font-bold text-[#fc791a] group-hover:underline">
                  Go <ArrowRight size={14} />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Hours */}
      <section id="form" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          {/* Hours & Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">Opening Hours</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">When We&apos;re Open.</h2>
              <p className={`mt-4 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                Stop by anytime during these hours. We&apos;re ready to serve you.
              </p>
            </div>

            <div className={`overflow-hidden rounded-2xl border ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white"
              }`}>
              {hours.map(([day, time], index) => (
                <div
                  key={day}
                  className={`flex items-center justify-between px-6 py-4 ${index !== hours.length - 1 ? (isDark ? "border-b border-white/5" : "border-b border-stone-100") : ""
                    }`}
                >
                  <span className="font-body text-sm font-bold">{day}</span>
                  <span className={`font-body text-sm ${isDark ? "text-stone-400" : "text-stone-500"}`}>{time}</span>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl p-6 ${isDark ? "bg-white/5" : "bg-stone-100"}`}>
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#fc791a]" fill="#fc791a" />
                  ))}
                </div>
                <span className="font-display text-2xl text-[#fc791a]">4.8</span>
              </div>
              <p className={`mt-2 font-body text-sm ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                Based on 2,500+ reviews from our happy customers.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`rounded-2xl border p-8 shadow-xl ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white shadow-stone-200/50"
              }`}
          >
            <p className="font-display text-3xl uppercase leading-none mb-8">Send Us a Message</p>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 font-body text-sm font-bold uppercase">
                Name
                <input
                  className={`h-12 rounded-xl border px-4 font-body text-sm font-normal normal-case outline-none transition-all focus:ring-2 focus:ring-[#fc791a]/30 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"
                    }`}
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 font-body text-sm font-bold uppercase">
                Phone
                <input
                  className={`h-12 rounded-xl border px-4 font-body text-sm font-normal normal-case outline-none transition-all focus:ring-2 focus:ring-[#fc791a]/30 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"
                    }`}
                  placeholder="Phone number"
                />
              </label>
              <label className="grid gap-2 font-body text-sm font-bold uppercase md:col-span-2">
                Email
                <input
                  className={`h-12 rounded-xl border px-4 font-body text-sm font-normal normal-case outline-none transition-all focus:ring-2 focus:ring-[#fc791a]/30 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"
                    }`}
                  placeholder="Email address"
                  type="email"
                />
              </label>
              <label className="grid gap-2 font-body text-sm font-bold uppercase">
                Request Type
                <select
                  className={`h-12 rounded-xl border px-4 font-body text-sm font-normal normal-case outline-none transition-all focus:ring-2 focus:ring-[#fc791a]/30 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"
                    }`}
                >
                  <option>Order question</option>
                  <option>Table request</option>
                  <option>Event or catering</option>
                  <option>Feedback</option>
                </select>
              </label>
              <label className="grid gap-2 font-body text-sm font-bold uppercase">
                Preferred Date
                <input
                  className={`h-12 rounded-xl border px-4 font-body text-sm font-normal normal-case outline-none transition-all focus:ring-2 focus:ring-[#fc791a]/30 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"
                    }`}
                  type="date"
                />
              </label>
              <label className="grid gap-2 font-body text-sm font-bold uppercase md:col-span-2">
                Message
                <textarea
                  className={`min-h-36 resize-none rounded-xl border px-4 py-3 font-body text-sm font-normal normal-case outline-none transition-all focus:ring-2 focus:ring-[#fc791a]/30 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-stone-50"
                    }`}
                  placeholder="Tell us what you need"
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fc791a] px-8 py-4 font-display text-xl uppercase text-white transition-all hover:bg-black hover:shadow-xl hover:shadow-orange-500/25"
            >
              Send Message
              <Send size={20} />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Map / Location Preview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl bg-[#282725] text-white shadow-2xl shadow-black/20 lg:grid-cols-[1fr_1.1fr]">
            <div className="p-10 md:p-12">
              <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">Find Us Easily</p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none md:text-6xl">Stop By Hungry.</h2>

              <div className="mt-10 grid gap-6">
                {[
                  [MapPin, "Neighborhood Location", "Your favorite Uncle Biggs restaurant"],
                  [Clock3, "Open Daily", "Morning meals, lunch runs, and dinner cravings"],
                  [CalendarDays, "Events Welcome", "Group orders, birthdays, office meals, and family trays"],
                  [Star, "Fresh Favorites", "Big portions, bold flavor, and friendly service"],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#fc791a]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-body text-sm font-bold uppercase">{title}</p>
                      <p className="mt-1 font-body text-sm leading-relaxed text-stone-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[450px]">
              <Image
                src="/about-img-1.webp"
                alt="Uncle Biggs location preview"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/30 p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-white p-8 text-center shadow-2xl shadow-black/30"
                >
                  <MapPin className="mx-auto text-[#fc791a]" size={36} />
                  <p className="mt-4 font-display text-4xl uppercase leading-none text-stone-900">Uncle Biggs</p>
                  <p className="mt-2 font-body text-sm text-stone-500">Fresh food is closer than you think.</p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#fc791a] px-6 py-2 font-display text-sm uppercase text-white transition-all hover:bg-black"
                  >
                    Get Directions
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
