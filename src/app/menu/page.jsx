"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChefHat, Flame, GlassWater, Leaf, Sandwich, Search,
  ShoppingBag, Sparkles, Star, Utensils, ArrowRight, Phone, Filter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = {
  "Big Meals": {
    icon: Utensils,
    image: "/expensive1.jpg",
    color: "from-orange-500 to-red-600",
    items: [
      ["Biggs Jollof Rice", "Smoky party-style rice, chicken, slaw, and pepper sauce.", "$12.00", "Best Seller", "🔥"],
      ["Grilled Chicken Plate", "Flame-grilled chicken with fries and fresh salad.", "$22.00", "Hot", "🌶️"],
      ["Crispy Fish Meal", "Golden fish fillet, greens, lemon, and creamy dip.", "$15.00", "Fresh", "🐟"],
      ["Family Rice Combo", "Rice, chicken, plantain, salad, and chilled drinks.", "$32.00", "Shareable", "👨‍👩‍👧‍👦"],
      ["Spicy Chicken Pasta", "Creamy pasta tossed with grilled chicken and peppers.", "$18.00", "Spicy", "🍝"],
      ["Big Beef Platter", "Beef strips, rice, plantain, and pepper sauce.", "$24.00", "Hearty", "🥩"],
    ],
  },
  Burgers: {
    icon: Sandwich,
    image: "/hero-burger.png",
    color: "from-amber-500 to-orange-700",
    items: [
      ["Big Beef Burger", "Juicy beef patty, cheese, lettuce, tomato, and Biggs sauce.", "$22.00", "Signature", "🍔"],
      ["Crispy Chicken Burger", "Crunchy chicken fillet, pickles, lettuce, and creamy sauce.", "$13.00", "Popular", "🍗"],
      ["Double Stack Burger", "Two patties, melted cheese, onions, and house relish.", "$18.00", "Filling", "🥓"],
      ["Veggie Crunch Burger", "Crispy vegetable patty, slaw, and pepper mayo.", "$11.00", "Veggie", "🥬"],
    ],
  },
  "Snacks & Sides": {
    icon: Flame,
    image: "/foods-5.webp",
    color: "from-red-500 to-orange-600",
    items: [
      ["Crispy Chicken Bites", "Crunchy chicken pieces with a creamy pepper dip.", "$9.00", "Snack", "🍿"],
      ["Loaded Spicy Chips", "Hot chips, cheese, peppers, and Biggs seasoning.", "$5.45", "Spicy", "🍟"],
      ["Mini Meat Pies", "Warm pastry pockets packed with seasoned filling.", "$11.00", "Classic", "🥟"],
      ["Plantain Cups", "Sweet fried plantain served with tomato salsa.", "$14.00", "Sweet", "🍌"],
      ["Spiced Chicken Wings", "Sticky wings tossed in Uncle Biggs hot sauce.", "$12.00", "Sticky", "🍖"],
      ["Onion Rings", "Crispy battered onion rings with dipping sauce.", "$8.00", "Crunchy", "🧅"],
    ],
  },
  "Fresh Picks": {
    icon: Leaf,
    image: "/salad2.jpg",
    color: "from-green-500 to-emerald-700",
    items: [
      ["Fresh Garden Salad", "Leafy greens, avocado, sweet corn, and house dressing.", "$10.00", "Light", "🥗"],
      ["Vegetable Rice Plate", "Seasoned rice with grilled vegetables and sauce.", "$16.00", "Veggie", "🥦"],
      ["Creamy Mushroom Pasta", "Mushroom sauce, herbs, and a little pepper kick.", "$18.00", "Comfort", "🍄"],
      ["Cheesy Tomato Flatbread", "Tomato, mozzarella, basil, and chili honey.", "$15.00", "Cheesy", "🍕"],
    ],
  },
  Drinks: {
    icon: GlassWater,
    image: "/drink5.jpg",
    color: "from-blue-500 to-cyan-600",
    items: [
      ["Chapman Classic", "Fruity, fizzy, chilled, and full of color.", "$12.00", "House", "🍹"],
      ["Biggs Orange Fizz", "Orange, bubbles, and a bright citrus finish.", "$7.00", "Bright", "🍊"],
      ["Mint Lime Refresher", "Lime, mint, cane sugar, and crushed ice.", "$8.00", "Cool", "🌿"],
      ["Berry Cooler", "Mixed berries, mint, and soda.", "$6.00", "Sweet", "🫐"],
      ["Iced Citrus Tea", "Black tea, lemon, and honey syrup.", "$5.00", "Iced", "🧊"],
      ["Golden Mocktail", "Pineapple, ginger, lime, and tonic.", "$9.00", "Tropical", "🍍"],
    ],
  },
};

const featuredCombos = [
  ["Lunch Power Box", "Jollof rice, crispy chicken bites, plantain, slaw, and a chilled drink.", "$19.00", "/popular-2.webp", "Most Popular"],
  ["Biggs Burger Duo", "Two burgers, loaded chips, pepper dip, and two refreshers.", "$29.00", "/popular-1.webp", "Best Value"],
  ["Family Feast Tray", "Rice combo, grilled chicken, wings, plantain, salad, and drinks.", "$46.00", "/expensive6.jpg", "Family Deal"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function MenuPage() {
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Big Meals");
  const [query, setQuery] = useState("");

  const theme = isDark
    ? "bg-neutral-950 text-stone-100"
    : "bg-stone-50 text-stone-900";

  const filteredItems = useMemo(() => {
    const items = categories[activeCategory].items;
    if (!query.trim()) return items;
    const cleanQuery = query.trim().toLowerCase();
    return items.filter(([title, description, price, tag]) =>
      [title, description, price, tag].some((value) =>
        value.toLowerCase().includes(cleanQuery)
      )
    );
  }, [activeCategory, query]);

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-700 ${theme} font-body`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />

      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden py-32 md:py-40">
        <Image
          src="/menu-hero.webp"
          alt="Uncle Biggs menu spread"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 mx-auto max-w-7xl px-5 text-center lg:px-8"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-sm font-bold uppercase tracking-[0.3em] text-[#fc791a]"
          >
            Our Full Menu
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-7xl uppercase leading-[0.85] text-white md:text-8xl lg:text-[9rem]"
          >
            Big Flavor, <br />
            <span className="text-stroke-orange">Every Bite</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl font-body text-lg text-stone-200"
          >
            From hearty meals to refreshing drinks — everything made fresh daily
            for your biggest cravings.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Combos */}
      <section className={`py-20 ${isDark ? "bg-neutral-900" : "bg-white"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">
              Value Packs
            </p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-none md:text-7xl">
              Uncle Biggs Combos
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-3"
          >
            {featuredCombos.map(([title, desc, price, image, badge]) => (
              <motion.article
                key={title}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl bg-stone-50 shadow-xl shadow-stone-200/50 transition-all hover:-translate-y-1 hover:shadow-2xl"
            >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-[#fc791a] px-4 py-1 font-display text-sm uppercase text-white shadow">
                    {badge}
                  </div>
                  <div className="absolute top-4 right-4 rounded-full bg-black/70 px-4 py-1 font-display text-xl text-white backdrop-blur-sm">
                    {price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl uppercase leading-none">{title}</h3>
                  <p className={`mt-3 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                    {desc}
                  </p>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#fc791a] px-6 py-3 font-display text-sm uppercase text-white transition-all hover:bg-black hover:shadow-lg">
                    Order Now
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full Menu with Search & Filters */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-[#fc791a]">
              Browse By Category
            </p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-none md:text-7xl">
              Complete Menu
            </h2>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-10 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input
                type="text"
                placeholder="Search menu items..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={`w-full rounded-full border py-4 pl-12 pr-6 font-body text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#fc791a]/50 ${isDark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-stone-500"
                    : "border-stone-200 bg-white text-stone-900 placeholder:text-stone-400"
                  }`}
              />
            </div>
          </motion.div>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            {Object.entries(categories).map(([category, data]) => (
              <motion.button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setQuery("");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold uppercase transition-all ${activeCategory === category
                    ? "bg-[#fc791a] text-white shadow-lg shadow-orange-500/30"
                    : isDark
                      ? "bg-white/5 text-stone-300 hover:bg-white/10"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
              >
                <data.icon size={18} />
                {category}
              </motion.button>
            ))}
          </div>

          {/* Category Header */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${categories[activeCategory].color} p-8 text-white shadow-xl md:p-12`}>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    {(() => {
                      const IconComponent = categories[activeCategory].icon;
                      return <IconComponent size={32} />;
                    })()}
                  </div>
                  <div>
                    <p className="font-display text-4xl uppercase md:text-5xl">{activeCategory}</p>
                    <p className="mt-1 font-body text-sm text-white/80">
                      {filteredItems.length} items
                    </p>
                  </div>
                </div>
                <div className="absolute right-4 top-4 text-[12rem] text-white/10">
                  {(() => {
                    const IconComponent = categories[activeCategory].icon;
                    return <IconComponent size={200} />;
                  })()}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Menu Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + query}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={stagger}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredItems.length > 0 ? (
                filteredItems.map(([title, desc, price, tag, emoji]) => (
                  <motion.article
                    key={title}
                    variants={fadeUp}
                    className={`group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${isDark
                        ? "bg-white/5 hover:bg-white/10"
                        : "bg-white shadow-lg shadow-stone-200/50 hover:shadow-stone-300/50"
                      }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{emoji}</span>
                          <h3 className="font-display text-2xl uppercase leading-tight">{title}</h3>
                        </div>
                        <p className={`mt-2 font-body text-sm leading-relaxed ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                          {desc}
                        </p>
                        <div className="mt-3 flex items-center gap-3">
                          <span className="rounded-full bg-[#fc791a]/10 px-3 py-1 font-body text-xs font-bold text-[#fc791a]">
                            {tag}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4 dark:border-white/10">
                      <p className="font-display text-3xl text-[#fc791a]">{price}</p>
                      <button className="rounded-full bg-[#fc791a] p-2 text-white transition-all hover:bg-black hover:shadow-lg">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </motion.article>
                ))
              ) : (
                <motion.div
                  variants={fadeUp}
                  className="col-span-full py-20 text-center"
                >
                  <Search className="mx-auto text-stone-400" size={48} />
                  <p className="mt-4 font-display text-3xl uppercase">No items found</p>
                  <p className={`mt-2 font-body ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                    Try adjusting your search or filter.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-20 text-center"
          >
            <p className={`font-body text-lg ${isDark ? "text-stone-300" : "text-stone-600"}`}>
              Can&apos;t decide? Let us help you choose.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="tel:1800222000"
                className="group inline-flex items-center gap-2 rounded-full bg-[#fc791a] px-8 py-4 font-display text-xl uppercase text-white transition-all hover:bg-black hover:shadow-xl hover:shadow-orange-500/25"
              >
                <Phone size={20} />
                Call to Order
              </a>
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 rounded-full border-2 border-stone-300 px-8 py-4 font-display text-xl uppercase transition-all hover:border-black hover:text-white hover:bg-black dark:border-white/20 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
              >
                Visit Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
