"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShoppingBag,
  Star,
  Truck,
  UsersRound,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const contactCards = [
  [Phone, "Call Us", "1-800-222-000", "For orders, quick questions, and table requests."],
  [Mail, "Email Us", "hello@unclebiggs.com", "For partnerships, events, feedback, and support."],
  [MapPin, "Visit Us", "Your favorite neighborhood restaurant", "Come in for dine-in, pickup, and family meals."],
];

const quickActions = [
  [ShoppingBag, "Pickup Orders", "Place an order and swing by when it is hot."],
  [Truck, "Delivery Help", "Ask about delivery areas, timing, and group orders."],
  [UsersRound, "Private Events", "Plan birthday meals, office trays, and family moments."],
  [MessageCircle, "Feedback", "Tell us what you loved or what we can improve."],
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
    : "bg-[#f8f6f2] text-[#383632]";

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-500 ${theme}`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark((value) => !value)} />

      <section className="relative flex min-h-[82vh] items-center overflow-hidden px-5 pb-16 pt-32">
        <img src="/demo-restaurant-footer-bg.jpg.webp" alt="Uncle Biggs restaurant contact" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8"
        >
          <div>
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-[#fc791a]">
              Talk To Uncle Biggs
            </p>
            <h1 className="mt-5 font-[var(--font-heading)] text-7xl uppercase leading-[0.9] text-stroke-white md:text-8xl lg:text-[8.5rem]">
              Let&apos;s Get <span className="block text-white">You Fed</span>
            </h1>
            <p className="mt-7 max-w-2xl font-[var(--font-alt)] text-base leading-8 text-stone-200 md:text-lg">
              Need help with an order, a family tray, an event meal, or directions?
              Send a note, call the team, or stop by for something fresh and filling.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickActions.map(([Icon, title, text]) => (
              <div key={title} className="rounded-lg bg-white/10 p-5 text-white shadow-xl shadow-black/20 backdrop-blur">
                <Icon className="text-[#fc791a]" size={28} />
                <p className="mt-4 font-[var(--font-heading)] text-3xl uppercase leading-none">{title}</p>
                <p className="mt-2 font-[var(--font-alt)] text-sm leading-6 text-stone-300">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative py-20">
        <h2 className="pointer-events-none text-center font-[var(--font-heading)] text-7xl uppercase leading-none text-stone-500/20 md:text-[8rem] lg:text-[12rem]">
          Contact
        </h2>

        <div className="relative mx-auto -mt-2 grid max-w-7xl gap-8 px-5 lg:grid-cols-3 lg:px-8">
          {contactCards.map(([Icon, title, value, text]) => (
            <motion.article
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={fadeUp}
              className={`rounded-lg border p-7 text-center shadow-lg shadow-black/5 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white/80"}`}
            >
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-white text-[#fc791a] shadow-lg shadow-black/10">
                <Icon size={28} />
              </span>
              <h2 className="mt-6 font-[var(--font-heading)] text-4xl uppercase leading-none">{title}</h2>
              <p className="mt-3 font-[var(--font-alt)] font-bold text-[#fc791a]">{value}</p>
              <p className={`mt-2 font-[var(--font-alt)] leading-7 ${isDark ? "text-stone-400" : "text-stone-500"}`}>{text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={`py-20 ${isDark ? "bg-neutral-900" : "bg-white/60"}`}>
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-red-600">Send us a message</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-5xl uppercase leading-none md:text-7xl">Orders, Events, Questions.</h2>
              <p className={`mt-5 max-w-xl font-[var(--font-alt)] leading-8 ${isDark ? "text-stone-300" : "text-stone-500"}`}>
                Use the form for reservations, event trays, group orders, comments, or anything you want the Uncle Biggs team to know.
              </p>
            </div>

            <div className={`overflow-hidden rounded-lg border ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-[#f8f6f2]"}`}>
              <div className="grid gap-px bg-stone-200/40">
                {hours.map(([day, time]) => (
                  <div key={day} className={`flex items-center justify-between gap-4 px-5 py-4 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
                    <span className="font-[var(--font-alt)] text-sm font-bold">{day}</span>
                    <span className={`font-[var(--font-alt)] text-sm ${isDark ? "text-stone-400" : "text-stone-500"}`}>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`rounded-lg border p-5 shadow-xl shadow-black/10 md:p-8 ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white"}`}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 font-[var(--font-alt)] text-sm font-bold uppercase">
                Name
                <input className="h-12 rounded-md border border-stone-200 bg-transparent px-4 font-[var(--font-alt)] text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/25" placeholder="Your name" />
              </label>
              <label className="grid gap-2 font-[var(--font-alt)] text-sm font-bold uppercase">
                Phone
                <input className="h-12 rounded-md border border-stone-200 bg-transparent px-4 font-[var(--font-alt)] text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/25" placeholder="Phone number" />
              </label>
              <label className="grid gap-2 font-[var(--font-alt)] text-sm font-bold uppercase md:col-span-2">
                Email
                <input className="h-12 rounded-md border border-stone-200 bg-transparent px-4 font-[var(--font-alt)] text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/25" placeholder="Email address" type="email" />
              </label>
              <label className="grid gap-2 font-[var(--font-alt)] text-sm font-bold uppercase">
                Request Type
                <select className="h-12 rounded-md border border-stone-200 bg-transparent px-4 font-[var(--font-alt)] text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/25">
                  <option>Order question</option>
                  <option>Table request</option>
                  <option>Event or catering</option>
                  <option>Feedback</option>
                </select>
              </label>
              <label className="grid gap-2 font-[var(--font-alt)] text-sm font-bold uppercase">
                Preferred Date
                <input className="h-12 rounded-md border border-stone-200 bg-transparent px-4 font-[var(--font-alt)] text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/25" type="date" />
              </label>
              <label className="grid gap-2 font-[var(--font-alt)] text-sm font-bold uppercase md:col-span-2">
                Message
                <textarea className="min-h-36 resize-none rounded-md border border-stone-200 bg-transparent px-4 py-3 font-[var(--font-alt)] text-sm font-normal normal-case outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/25" placeholder="Tell us what you need" />
              </label>
            </div>

            <button
              type="button"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#fc791a] px-6 py-4 font-[var(--font-alt)] text-sm font-bold uppercase text-white transition hover:bg-[#282725]"
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid overflow-hidden rounded-lg bg-[#282725] text-white shadow-2xl shadow-black/10 lg:grid-cols-[1fr_1.1fr]">
            <div className="p-8 md:p-10">
              <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-[#fc791a]">Find us easily</p>
              <h2 className="mt-3 font-[var(--font-heading)] text-5xl uppercase leading-none md:text-7xl">Stop By Hungry.</h2>
              <div className="mt-8 grid gap-5">
                {[
                  [MapPin, "Neighborhood Location", "Your favorite Uncle Biggs restaurant"],
                  [Clock3, "Open Daily", "Morning meals, lunch runs, and dinner cravings"],
                  [CalendarDays, "Events Welcome", "Group orders, birthdays, office meals, and family trays"],
                  [Star, "Fresh Favorites", "Big portions, bold flavor, and friendly service"],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[#fc791a]">
                      <Icon size={20} />
                    </span>
                    <span>
                      <p className="font-[var(--font-alt)] text-sm font-bold uppercase">{title}</p>
                      <p className="mt-1 font-[var(--font-alt)] text-sm leading-6 text-stone-300">{text}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[420px]">
              <img src="/about-img-1.webp" alt="Uncle Biggs location preview" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 grid place-items-center bg-black/25 p-6 text-center">
                <div className="rounded-lg bg-white/95 px-6 py-5 text-stone-900 shadow-xl shadow-black/20">
                  <MapPin className="mx-auto text-[#fc791a]" size={32} />
                  <p className="mt-3 font-[var(--font-heading)] text-4xl uppercase leading-none">Uncle Biggs</p>
                  <p className="mt-1 font-[var(--font-alt)] text-sm text-stone-500">Fresh food is closer than you think.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
