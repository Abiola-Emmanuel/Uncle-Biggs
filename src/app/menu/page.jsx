"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChefHat,
  Flame,
  GlassWater,
  Leaf,
  Sandwich,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";

const categories = {
  "Big Meals": {
    icon: Utensils,
    image: "/expensive1.jpg",
    items: [
      ["Biggs Jollof Rice", "Smoky party-style rice, chicken, slaw, and pepper sauce.", "$12.00", "Best Seller"],
      ["Grilled Chicken Plate", "Flame-grilled chicken with fries and fresh salad.", "$22.00", "Hot"],
      ["Crispy Fish Meal", "Golden fish fillet, greens, lemon, and creamy dip.", "$15.00", "Fresh"],
      ["Family Rice Combo", "Rice, chicken, plantain, salad, and chilled drinks.", "$32.00", "Shareable"],
    ],
  },
  Burgers: {
    icon: Sandwich,
    image: "/hero-burger.png",
    items: [
      ["Big Beef Burger", "Juicy beef patty, cheese, lettuce, tomato, and Biggs sauce.", "$22.00", "Signature"],
      ["Crispy Chicken Burger", "Crunchy chicken fillet, pickles, lettuce, and creamy sauce.", "$13.00", "Popular"],
      ["Double Stack Burger", "Two patties, melted cheese, onions, and house relish.", "$18.00", "Filling"],
      ["Veggie Crunch Burger", "Crispy vegetable patty, slaw, and pepper mayo.", "$11.00", "Veggie"],
    ],
  },
  "Snacks & Sides": {
    icon: Flame,
    image: "/foods-5.webp",
    items: [
      ["Crispy Chicken Bites", "Crunchy chicken pieces with a creamy pepper dip.", "$9.00", "Snack"],
      ["Loaded Spicy Chips", "Hot chips, cheese, peppers, and Biggs seasoning.", "$5.45", "Spicy"],
      ["Mini Meat Pies", "Warm pastry pockets packed with seasoned filling.", "$11.00", "Classic"],
      ["Plantain Cups", "Sweet fried plantain served with tomato salsa.", "$14.00", "Sweet"],
    ],
  },
  "Fresh Picks": {
    icon: Leaf,
    image: "/salad2.jpg",
    items: [
      ["Fresh Garden Salad", "Leafy greens, avocado, sweet corn, and house dressing.", "$10.00", "Light"],
      ["Vegetable Rice Plate", "Seasoned rice with grilled vegetables and sauce.", "$16.00", "Veggie"],
      ["Creamy Mushroom Pasta", "Mushroom sauce, herbs, and a little pepper kick.", "$18.00", "Comfort"],
      ["Cheesy Tomato Flatbread", "Tomato, mozzarella, basil, and chili honey.", "$15.00", "Cheesy"],
    ],
  },
  Drinks: {
    icon: GlassWater,
    image: "/drink5.jpg",
    items: [
      ["Chapman Classic", "Fruity, fizzy, chilled, and full of color.", "$12.00", "House"],
      ["Biggs Orange Fizz", "Orange, bubbles, and a bright citrus finish.", "$7.00", "Bright"],
      ["Mint Lime Refresher", "Lime, mint, cane sugar, and crushed ice.", "$8.00", "Cool"],
      ["Berry Cooler", "Mixed berries, mint, and soda.", "$6.00", "Sweet"],
    ],
  },
};

const featuredCombos = [
  ["Lunch Power Box", "Jollof rice, crispy chicken bites, plantain, slaw, and a chilled drink.", "$19.00", "/popular-2.webp"],
  ["Biggs Burger Duo", "Two burgers, loaded chips, pepper dip, and two refreshers.", "$29.00", "/popular-1.webp"],
  ["Family Feast Tray", "Rice combo, grilled chicken, wings, plantain, salad, and drinks.", "$46.00", "/expensive6.jpg"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function MenuPage() {
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Big Meals");
  const [query, setQuery] = useState("");

  const theme = isDark
    ? "bg-neutral-950 text-stone-100"
    : "bg-[#f8f6f2] text-[#383632]";

  const filteredItems = useMemo(() => {
    const items = categories[activeCategory].items;
    if (!query.trim()) return items;
    const cleanQuery = query.trim().toLowerCase();
    return items.filter(([title, description, price, tag]) =>
      [title, description, price, tag].some((value) => value.toLowerCase().includes(cleanQuery))
    );
  }, [activeCategory, query]);

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-500 ${theme}`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark((value) => !value)} />

      <section className="relative flex min-h-[86vh] items-center overflow-hidden px-5 pb-16 pt-32">
        <img src="/menu-hero.webp" alt="Uncle Biggs menu spread" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.85fr] lg:px-8"
        >
          <div>
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-[#fc791a]">
              The Uncle Biggs Menu
            </p>
            <h1 className="mt-5 font-[var(--font-heading)] text-7xl uppercase leading-[0.9] text-stroke-white md:text-8xl lg:text-[8.5rem]">
              Pick Your <span className="block text-white">Favorite</span>
            </h1>
            <p className="mt-7 max-w-2xl font-[var(--font-alt)] text-base leading-8 text-stone-200 md:text-lg">
              From quick snacks to proper family trays, every plate is built around bold flavor,
              generous portions, and the kind of food people come back for.
            </p>
          </div>

          <div className="rounded-lg bg-white/10 p-5 text-white shadow-2xl shadow-black/20 backdrop-blur">
            <div className="relative h-72 overflow-hidden rounded-lg">
              <img src="/hero-chicken.png" alt="Uncle Biggs crispy chicken" className="h-full w-full object-contain p-4" />
            </div>
            <div className="mt-5 flex items-center justify-between gap-5">
              <div>
                <p className="font-[var(--font-heading)] text-4xl uppercase leading-none">Today&apos;s Craving</p>
                <p className="font-[var(--font-alt)] text-sm text-stone-300">Golden chicken, hot sides, cold drinks.</p>
              </div>
              <span className="grid size-14 place-items-center rounded-full bg-[#fc791a]">
                <ChefHat size={24} />
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative py-20">
        <h2 className="pointer-events-none text-center font-[var(--font-heading)] text-7xl uppercase leading-none text-stone-500/20 md:text-[8rem] lg:text-[12rem]">
          Menu
        </h2>

        <div className="relative mx-auto -mt-2 max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 rounded-lg bg-[#282725] p-5 text-white shadow-xl shadow-black/10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-[var(--font-heading)] text-4xl uppercase leading-none">Browse By Craving</p>
              <p className="mt-1 font-[var(--font-alt)] text-sm text-stone-300">Switch categories or search for a meal, drink, or tag.</p>
            </div>
            <label className="relative w-full md:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search menu"
                className="h-12 w-full rounded-md border border-white/10 bg-white pl-11 pr-4 font-[var(--font-alt)] text-sm text-stone-900 outline-none transition focus:border-[#fc791a] focus:ring-2 focus:ring-[#fc791a]/30"
              />
            </label>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="grid h-fit gap-3">
              {Object.entries(categories).map(([category, data]) => {
                const Icon = data.icon;
                const isActive = category === activeCategory;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center justify-between rounded-lg border p-4 text-left transition ${isActive
                      ? "border-[#fc791a] bg-[#fc791a] text-white shadow-lg shadow-orange-500/20"
                      : isDark
                        ? "border-white/10 bg-white/5 hover:border-[#fc791a]"
                        : "border-stone-200 bg-white/80 hover:border-[#fc791a]"
                      }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={22} />
                      <span className="font-[var(--font-alt)] text-sm font-bold uppercase">{category}</span>
                    </span>
                    <span className="font-[var(--font-alt)] text-xs">{data.items.length}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid gap-8 xl:grid-cols-[1fr_360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-4"
                >
                  {filteredItems.map(([title, description, price, tag]) => (
                    <article
                      key={title}
                      className={`group grid gap-4 rounded-lg border p-4 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 sm:grid-cols-[1fr_auto] ${isDark
                        ? "border-white/10 bg-white/5"
                        : "border-stone-200 bg-white/80"
                        }`}
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="font-[var(--font-alt)] text-lg font-extrabold">{title}</h3>
                          <span className="rounded-full bg-red-600 px-3 py-1 font-[var(--font-alt)] text-xs font-bold uppercase text-white">
                            {tag}
                          </span>
                        </div>
                        <p className={`mt-2 font-[var(--font-alt)] leading-7 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                          {description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 sm:justify-end">
                        <p className="font-[var(--font-heading)] text-4xl uppercase leading-none text-[#fc791a]">{price}</p>
                        <button
                          type="button"
                          aria-label={`Add ${title} to order`}
                          className="grid size-11 place-items-center rounded-full bg-[#282725] text-white transition group-hover:bg-[#fc791a]"
                        >
                          <ShoppingBag size={18} />
                        </button>
                      </div>
                    </article>
                  ))}

                  {filteredItems.length === 0 && (
                    <div className={`rounded-lg border p-8 text-center ${isDark ? "border-white/10 bg-white/5" : "border-stone-200 bg-white/80"}`}>
                      <p className="font-[var(--font-heading)] text-4xl uppercase leading-none">No Match Yet</p>
                      <p className={`mt-2 font-[var(--font-alt)] ${isDark ? "text-stone-400" : "text-stone-500"}`}>Try another meal name, tag, or category.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <aside className="h-fit overflow-hidden rounded-lg bg-[#282725] text-white shadow-xl shadow-black/10">
                <img src={categories[activeCategory].image} alt={`${activeCategory} preview`} className="h-72 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#fc791a]">
                    <Sparkles size={18} />
                    <p className="font-[var(--font-alt)] text-sm font-bold uppercase">Chef&apos;s Note</p>
                  </div>
                  <p className="mt-4 font-[var(--font-heading)] text-4xl uppercase leading-none">
                    {activeCategory} Built The Biggs Way.
                  </p>
                  <p className="mt-3 font-[var(--font-alt)] leading-7 text-stone-300">
                    Served hot, packed with flavor, and ready for dine-in, pickup, or sharing with your people.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-20 ${isDark ? "bg-neutral-900" : "bg-white/60"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-red-600">Combo favorites</p>
            <h2 className="mt-3 font-[var(--font-heading)] text-5xl uppercase leading-none md:text-7xl">Made To Share</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredCombos.map(([title, description, price, image]) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className={`overflow-hidden rounded-lg shadow-xl shadow-black/10 ${isDark ? "bg-white/5" : "bg-[#f8f6f2]"}`}
              >
                <img src={image} alt={title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-[var(--font-heading)] text-4xl uppercase leading-none">{title}</h3>
                    <span className="font-[var(--font-heading)] text-4xl leading-none text-[#fc791a]">{price}</span>
                  </div>
                  <p className={`mt-3 font-[var(--font-alt)] leading-7 ${isDark ? "text-stone-400" : "text-stone-500"}`}>{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
