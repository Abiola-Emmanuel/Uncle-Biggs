"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen, Phone, Truck, Award, ShoppingBag, ChevronDown, ArrowRight, Star,
  Utensils, Flame, GlassWater, Leaf, Sandwich,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- Data ---
const categoryData = {
  "Big Meals": {
    icon: Utensils,
    items: [
      ["Biggs Jollof Rice", "Smoky party-style rice, chicken & slaw.", "$12.00", "/expensive1.jpg", "Bestseller"],
      ["Grilled Chicken Plate", "Flame-grilled chicken with fries & pepper sauce.", "$22.00", "/expensive2.jpg", "Hot"],
      ["Crispy Fish Meal", "Golden fish fillet with greens & lemon dressing.", "$15.00", "/expensive3.jpg", "Fresh"],
      ["Family Rice Combo", "Rice, chicken, plantain, salad & drinks.", "$32.00", "/expensive6.jpg", "Shareable"],
    ],
  },
  Burgers: {
    icon: Sandwich,
    items: [
      ["Big Beef Burger", "Juicy beef patty, cheese, lettuce & Biggs sauce.", "$22.00", "/expensive4.jpg", "Signature"],
      ["Crispy Chicken Burger", "Crunchy fillet, pickles & creamy sauce.", "$13.00", "/hero-burger.png", "Popular"],
      ["Double Stack Burger", "Two patties, cheese, onions & house relish.", "$18.00", "/popular-1.webp", "Filling"],
      ["Veggie Crunch Burger", "Crispy veggie patty, slaw & pepper mayo.", "$11.00", "/popular-2.webp", "Veggie"],
    ],
  },
  "Snacks & Sides": {
    icon: Flame,
    items: [
      ["Crispy Chicken Bites", "Crunchy chicken with pepper dip.", "$9.00", "/foods-1.webp", "Snack"],
      ["Loaded Spicy Chips", "Hot chips, cheese, peppers & seasoning.", "$5.45", "/foods-2.webp", "Spicy"],
      ["Mini Meat Pies", "Warm pastry pockets with seasoned filling.", "$11.00", "/foods-3.webp", "Classic"],
      ["Plantain Cups", "Sweet plantain with tomato salsa.", "$14.00", "/foods-4.webp", "Sweet"],
    ],
  },
  "Fresh Picks": {
    icon: Leaf,
    items: [
      ["Fresh Garden Salad", "Greens, avocado, corn & house dressing.", "$10.00", "/salad2.jpg", "Light"],
      ["Vegetable Rice Plate", "Rice with grilled vegetables & sauce.", "$16.00", "/salad6.jpg", "Veggie"],
      ["Creamy Mushroom Pasta", "Mushroom sauce, herbs & pepper.", "$18.00", "/salad5.jpg", "Comfort"],
      ["Cheesy Tomato Flatbread", "Tomato, mozzarella, basil & honey.", "$15.00", "/hero-pizza.png", "Cheesy"],
    ],
  },
  Drinks: {
    icon: GlassWater,
    items: [
      ["Chapman Classic", "Fruity, fizzy & full of color.", "$12.00", "/drink5.jpg", "House"],
      ["Biggs Orange Fizz", "Orange & bright citrus finish.", "$7.00", "/drink1.jpg", "Bright"],
      ["Mint Lime Refresher", "Lime, mint & crushed ice.", "$8.00", "/drink3.jpg", "Cool"],
      ["Berry Cooler", "Mixed berries, mint & soda.", "$6.00", "/drink2.jpg", "Sweet"],
    ],
  },
};

const combos = [
  ["Lunch Power Box", "Jollof rice, chicken bites, plantain & drink.", "$19.00", "/popular-2.webp"],
  ["Biggs Burger Duo", "Two burgers, loaded chips & two drinks.", "$29.00", "/popular-1.webp"],
  ["Family Feast Tray", "Rice combo, chicken, wings & drinks.", "$46.00", "/expensive6.jpg"],
];

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Big Meals");

  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-stone-900 font-body">
      {/* --- Navbar --- */}
      <Navbar />

      {/* --- Hero Section --- */}
      <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.webp"
            alt="Uncle Biggs food"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-7xl px-5 pt-20 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-display text-2xl uppercase tracking-[0.3em] text-[#fc791a] md:text-3xl"
          >
            Uncle Biggs
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-7xl uppercase leading-[0.85] text-white md:text-8xl lg:text-[10rem]"
          >
            Big Flavor <br />
            <span className="text-stroke-orange">Every Day</span>
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-[#fc791a] px-8 py-4 font-display text-xl uppercase text-white transition-all hover:bg-white hover:text-black hover:shadow-xl hover:shadow-orange-500/25"
            >
              Explore Our Menu
              <BookOpen size={20} className="transition-transform group-hover:rotate-12" />
            </Link>
            <a
              href="tel:1800222000"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-display text-xl uppercase text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
            >
              <Phone size={20} />
              Order Now
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/60"
        >
          <ChevronDown size={36} />
        </motion.div>
      </section>

      {/* --- Welcome Section (Bento Grid) --- */}
      <section id="about" className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 text-center">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">Made for everyday cravings</p>
            <h2 className="mt-4 font-display text-6xl uppercase leading-none md:text-8xl">Good Food, Big Portions.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl bg-stone-200 md:col-span-2 md:row-span-2"
            >
              <Image
                src="/hero-pizza.png"
                alt="Uncle Biggs meal"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end">
                <p className="font-display text-3xl uppercase text-white md:text-5xl">Our Story</p>
                <p className="mt-2 text-sm text-stone-200 md:text-base">Where everyday hunger meets big flavor, warm service, and portions that feel like home.</p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#fc791a] p-8 text-center text-white shadow-xl shadow-orange-500/20"
            >
              <Truck size={40} className="mb-4" />
              <p className="font-display text-3xl uppercase">Fast Delivery</p>
              <p className="mt-2 text-sm text-white/80">Within 30 minutes</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center justify-center rounded-2xl bg-stone-800 p-8 text-center text-white shadow-xl shadow-stone-800/20"
            >
              <Award size={40} className="mb-4" />
              <p className="font-display text-3xl uppercase">Fresh Favorites</p>
              <p className="mt-2 text-sm text-stone-300">Comfort food done right</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Menu Section --- */}
      <section id="menu" className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="- Choose Delicious -" title="Uncle Biggs Menu" />

          {/* Category Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8">
            {Object.entries(categoryData).map(([category, data]) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`group flex flex-col items-center gap-2 font-body text-sm font-semibold uppercase transition-all ${activeCategory === category
                    ? "text-[#fc791a] scale-110"
                    : "text-stone-400 hover:text-stone-700"
                  }`}
              >
                <data.icon size={28} />
                {category}
                {activeCategory === category && (
                  <motion.div layoutId="activeTab" className="h-1 w-full bg-[#fc791a] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-16 grid gap-8 md:grid-cols-2"
            >
              {categoryData[activeCategory].items.map(([title, desc, price, image, tag]) => (
                <motion.article
                  key={title}
                  variants={stagger}
                  className="group flex flex-col items-center gap-6 rounded-2xl p-4 text-center transition-all hover:bg-stone-50 hover:shadow-xl hover:shadow-stone-200/50 sm:flex-row sm:text-left"
                >
                  <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full shadow-lg">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {tag && (
                      <span className="absolute -top-2 -right-2 rounded-full bg-[#fc791a] px-2 py-0.5 font-body text-xs font-bold uppercase text-white shadow">
                        {tag}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-2xl uppercase leading-tight">{title}</h3>
                    <p className="mt-1 font-body text-sm leading-relaxed text-stone-500">{desc}</p>
                  </div>
                  <p className="font-display text-2xl text-[#fc791a]">{price}</p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 text-center">
            <p className="inline-block rounded-full bg-stone-100 px-6 py-2 font-body text-sm font-medium text-stone-600">
              <span className="mr-2 text-[#fc791a]">★</span> Fresh Daily — Built for quick lunches & family dinners
            </p>
          </div>
        </div>
      </section>

      {/* --- Combos Section --- */}
      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="- Value Packs -" title="Uncle Biggs Combos" />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {combos.map(([title, desc, price, image], i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-stone-200/50 transition-all hover:shadow-xl hover:shadow-stone-300/50"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-[#fc791a] px-3 py-1 font-display text-lg uppercase text-white shadow">
                    {price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl uppercase leading-none">{title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-stone-500">{desc}</p>
                  <Link href="#" className="mt-5 inline-flex items-center gap-2 font-body text-sm font-bold text-[#fc791a] hover:underline">
                    Order Combo <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Marquee --- */}
      <section className="overflow-hidden border-y border-stone-200 py-8">
        <div className="flex w-max gap-14 whitespace-nowrap" style={{ animation: "marquee 24s linear infinite" }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-14">
              {["Chicken", "Burgers", "Rice", "Drinks", "Family", "Flavor"].map((word, idx) => (
                <span
                  key={`${word}-${idx}`}
                  className={`font-display text-7xl uppercase leading-none md:text-[9rem] ${idx % 2 === 0 ? "text-stroke-orange" : "text-stone-800"
                    }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Reusable Section Title
function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center">
      <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">{eyebrow}</p>
      <h2 className="mt-3 font-display text-6xl uppercase leading-none md:text-8xl">{title}</h2>
    </div>
  );
}
