"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Aperture,
  Award,
  BookOpen,
  ChefHat,
  CircleDot,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  Star,
  Table2,
  Truck,
  Utensils,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PopularDishes from "@/components/PopularDishes";
import Footer from "@/components/Footer";

const categoryData = {
  "Main Course": {
    icon: "/starters.svg",
    items: [
      ["Truffle Risotto", "Creamy Arborio rice infused with black truffle essence.", "$12.00", "/expensive1.jpg"],
      ["Reserve Red Wine", "Finished with parmesan shavings and a hint of red wine.", "$22.00", "/expensive2.jpg"],
      ["Seared Atlantic Salmon", "Crisped salmon served over lemon-herb greens.", "$15.00", "/expensive3.jpg"],
      ["Filet Mignon au Poivre", "Tender beef filet glazed with a peppercorn sauce.", "$22.00", "/expensive4.jpg"],
      ["Pan-Roasted Duck Breast", "Duck breast with pomegranate and caramelized carrots.", "$42.00", "/expensive5.jpg"],
      ["Herb-Crusted Lamb Rack", "Oven-roasted lamb crusted with rosemary and thyme.", "$32.00", "/expensive6.jpg"],
    ],
  },
  Appetizers: {
    icon: "/nonvage.svg",
    items: [
      ["Crispy Calamari", "Lemon aioli, herbs, and a light pepper crust.", "$9.00", "/foods-1.webp"],
      ["Charred Prawn Toast", "Sourdough, smoked tomato butter, and basil.", "$11.00", "/foods-2.webp"],
      ["Beef Carpaccio", "Capers, parmesan, rocket, and olive oil.", "$16.00", "/foods-3.webp"],
      ["Burrata Plate", "Warm tomatoes, pesto, and grilled focaccia.", "$14.00", "/foods-4.webp"],
      ["Spiced Chicken Bites", "Crispy bites with citrus yogurt dip.", "$10.00", "/foods-5.webp"],
      ["Mini Crab Cakes", "Golden crab cakes with herb remoulade.", "$18.00", "/foods-6.webp"],
    ],
  },
  Vegetarian: {
    icon: "/vegetarian.svg",
    items: [
      ["Garden Herb Salad", "Leafy greens, avocado, almonds, and vinaigrette.", "$10.00", "/salad2.jpg"],
      ["Roasted Pepper Bowl", "Sweet peppers, grains, feta, and basil oil.", "$13.00", "/salad3.jpg"],
      ["Tuscan Mushroom Pasta", "Creamy wild mushroom sauce and fresh parsley.", "$18.00", "/salad5.jpg"],
      ["Grilled Vegetable Stack", "Seasonal vegetables with smoked tomato jus.", "$16.00", "/salad6.jpg"],
      ["Citrus Couscous", "Herbs, raisins, chickpeas, and lemon dressing.", "$12.00", "/salad7.jpg"],
      ["Margherita Flatbread", "Tomato, mozzarella, basil, and chili honey.", "$15.00", "/hero-pizza.png"],
    ],
  },
  Dessert: {
    icon: "/dessert.svg",
    items: [
      ["Velvet Chocolate Slice", "Dark chocolate ganache and berry compote.", "$8.00", "/desert1.jpg"],
      ["Caramel Cream Tart", "Vanilla cream, caramel, and almond crumb.", "$9.00", "/desert2.jpg"],
      ["Berry Pavlova", "Crisp meringue, cream, and fresh berries.", "$10.00", "/desert3.jpg"],
      ["Lemon Cheesecake", "Citrus curd with a biscuit base.", "$8.00", "/desert4.jpg"],
      ["Tiramisu Cup", "Espresso-soaked layers and mascarpone.", "$11.00", "/desert5.jpg"],
      ["Honey Panna Cotta", "Silky panna cotta with roasted fruit.", "$9.00", "/desert6.jpg"],
    ],
  },
  Drinks: {
    icon: "/drinks.svg",
    items: [
      ["Signature Spritz", "Orange bitters, sparkling wine, and citrus.", "$7.00", "/drink1.jpg"],
      ["Berry Cooler", "Mixed berries, mint, and soda.", "$6.00", "/drink2.jpg"],
      ["Classic Mojito", "Lime, mint, cane sugar, and crushed ice.", "$8.00", "/drink3.jpg"],
      ["Iced Citrus Tea", "Black tea, lemon, and honey syrup.", "$5.00", "/drink4.jpg"],
      ["House Red", "Smooth red with dark fruit and spice.", "$12.00", "/drink5.jpg"],
      ["Golden Mocktail", "Pineapple, ginger, lime, and tonic.", "$6.00", "/drink6.jpg"],
    ],
  },
};

const testimonials = [
  ["Food has a culture, history, story, and relationships. Luxe Dining brings all of that to the table beautifully.", "Herman Miller"],
  ["A lovely place with generous ambience and warm service. Every plate felt carefully made and memorable.", "Matthew Taylor"],
  ["The desserts and presentation won my heart. We came for family dinner and left with a new favorite spot.", "Leonel Money"],
];

const blogCards = [
  ["Never Eat More Than You Can Life.", "/blog-1.webp"],
  ["Life Is Uncertain Important To Me.", "/blog-2.webp"],
  ["Food Simply Is Not Important To Me.", "/blog-3.webp"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Main Course");

  const theme = isDark
    ? "bg-neutral-950 text-stone-100"
    : "bg-[#f8f6f2] text-[#383632]";

  return (
    <main className={`min-h-screen overflow-hidden transition-colors duration-500 ${theme}`}>
      <Navbar isDark={isDark} onToggleDark={() => setIsDark((value) => !value)} />

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src="/hero-banner.webp" alt="Elegant restaurant table" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        {/* <motion.img
          src="/hero-banner.webp"
          alt=""
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 0.92, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="absolute bottom-10 right-3 hidden w-64 opacity-90 drop-shadow-2xl md:block lg:right-16 lg:w-96"
          style={{ animation: "float-soft 5s ease-in-out infinite" }}
        /> */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pt-20 text-center"
        >
          <p className="font-[var(--font-heading)] text-2xl uppercase leading-8 text-white md:text-xl">
            UNCLE BIGGS
          </p>
          <h1 className="mt-7 font-[var(--font-heading)] text-7xl uppercase leading-[0.9] text-stroke-white md:text-5xl lg:text-[4.5rem]">
            Great Dining <span className="block text-white">Experience</span>
          </h1>
          <a
            href="#blog"
            className="mt-9 inline-flex items-center gap-2 rounded-md bg-[#282725] px-6 py-3 font-[var(--font-alt)] text-sm font-bold uppercase text-white transition hover:bg-white hover:text-black"
          >
            Authentic Experience
            <BookOpen size={16} />
          </a>
        </motion.div>
      </section>

      <section id="about" className="relative py-20 md:py-28">
        <h2 className="pointer-events-none text-center font-[var(--font-heading)] text-7xl uppercase mb-2 leading-none text-stone-500/20 md:text-[8rem] lg:text-[12rem]">
          Experience
        </h2>
        <img src="/about-2.png" alt="" className="absolute bottom-14 left-0 hidden w-24 md:block" style={{ animation: "float-soft 4s ease-in-out infinite" }} />
        <img src="/about-1.png" alt="" className="absolute right-0 top-20 hidden w-24 md:block" style={{ animation: "float-soft 4.5s ease-in-out infinite" }} />

        <div className="mx-auto -mt-4 grid max-w-7xl gap-20 px-5 mt-4 md:grid-cols-2 md:items-center lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img src="/about-image.webp" alt="Chef plating a dish" className="w-full max-w-lg rounded-lg object-cover " />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-center md:text-left"
          >
            <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-red-600">Since 1988</p>
            <h2 className="font-[var(--font-heading)] text-5xl uppercase leading-none md:text-6xl lg:text-7xl">
              Wonderful Dining Experience & Food.
            </h2>
            <p className={`mx-auto max-w-2xl font-[var(--font-alt)] text-base leading-8 md:mx-0 ${isDark ? "text-stone-300" : "text-stone-500"}`}>
              Discover the essence of <strong>Luxe Dining</strong>, where passion for cuisine meets timeless hospitality.
              Since 1988, fresh ingredients, confident flavor, and warm service have shaped every plate.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <a href="#story" className="rounded-lg bg-stone-600 px-6 py-3 font-[var(--font-heading)] text-lg uppercase text-white transition hover:bg-stone-800">
                About Restaurant
              </a>
              <a href="tel:1800222000" className="inline-flex items-center gap-2 font-[var(--font-alt)] font-semibold text-green-600">
                <Phone size={18} />
                1-800-222-000
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-20 grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          {[
            [Truck, "Fast Delivery", "Within 30 minutes"],
            [Award, "Absolute Dining", "Best buffet restaurant"],
            [ShoppingBag, "Pickup Delivery", "Grab your food order"],
          ].map(([Icon, title, text]) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left md:justify-center"
            >
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-white text-[#fc791a] shadow-lg shadow-black/15 transition hover:scale-105">
                <Icon size={28} />
              </span>
              <span>
                <p className="font-[var(--font-heading)] text-3xl uppercase leading-none">{title}</p>
                <p className={`font-[var(--font-alt)] ${isDark ? "text-stone-400" : "text-stone-500"}`}>{text}</p>
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="menu" className="relative overflow-hidden py-20">
        <img src="/menu-hero.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="- Choose Delicious -" title="Popular Menu" />

          <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-12">
            {Object.entries(categoryData).map(([category, data]) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`group flex min-w-28 flex-col items-center gap-2 border-b px-2 pb-3 font-[var(--font-alt)] text-sm font-semibold transition ${activeCategory === category ? "border-[#a5710a] text-[#a5710a]" : "border-transparent hover:border-[#a5710a] hover:text-[#a5710a]"
                  }`}
              >
                <img src={data.icon} alt="" className="size-12 object-contain transition group-hover:-translate-y-1" />
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="mx-auto mt-12 grid max-w-6xl gap-x-12 gap-y-5 md:grid-cols-2"
            >
              {categoryData[activeCategory].items.map(([title, desc, price, image]) => (
                <article key={title} className="group flex flex-col items-center gap-4 rounded-lg p-3 text-center transition hover:bg-white/60 hover:shadow-lg hover:shadow-black/5 sm:flex-row sm:text-left">
                  <img src={image} alt={title} className="size-28 rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-[var(--font-alt)] text-lg font-bold">{title}</h3>
                    <p className={`mt-1 font-[var(--font-alt)] leading-7 ${isDark ? "text-stone-400" : "text-stone-500"}`}>{desc}</p>
                  </div>
                  <p className="font-[var(--font-alt)] text-lg font-bold">{price}</p>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className={`mt-12 text-center font-[var(--font-alt)] text-lg font-medium leading-8 ${isDark ? "text-stone-300" : "text-stone-500"}`}>
            <span className="mr-2 rounded-lg bg-red-600 px-3 py-1 text-white">Masterchef</span>
            Unique and delicious from the world&apos;s <span className="font-bold underline">best masterchefs.</span>
          </p>
        </div>
      </section>

      <PopularDishes isDark={isDark} />

      <section className="overflow-hidden py-8">
        <div className="flex w-max gap-14 whitespace-nowrap" style={{ animation: "marquee 24s linear infinite" }}>
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-14">
              {["Experience", "Cuisine", "Delicious", "Awesome", "Experience", "Delicious"].map((word, wordIndex) => (
                <span
                  key={`${word}-${wordIndex}`}
                  className={`font-[var(--font-heading)] text-7xl uppercase leading-none md:text-[9rem] ${wordIndex % 2 === 0 ? "text-stroke-gold" : isDark ? "text-stone-100" : "text-stone-800"
                    }`}
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* <section id="story" className={`relative my-12 flex min-h-[520px] flex-col items-center justify-center overflow-hidden px-5 py-20 text-center ${isDark ? "bg-neutral-900" : "bg-[#faf6f3]"}`}>
        <img src="/plate1.webp" alt="" className="absolute bottom-8 left-0 hidden w-44 md:block" />
        <img src="/plate2.webp" alt="" className="absolute right-2 top-14 hidden w-44 md:block" />
        <div className="mx-auto max-w-4xl">
          <ChefHat className="mx-auto mb-8 text-[#fc791a]" size={42} />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(([quote, name]) => (
              <motion.figure
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="flex flex-col items-center justify-between gap-5"
              >
                <blockquote className="font-[var(--font-heading)] text-3xl uppercase leading-9">{quote}</blockquote>
                <figcaption className="font-[var(--font-alt)] text-lg font-semibold capitalize text-[#d39121]">{name}</figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-6">
            {["/food-lover-1.webp", "/food-lover-2.webp", "/food-lover-3.webp"].map((image, index) => (
              <img key={image} src={image} alt={`Happy food lover ${index + 1}`} className="size-16 rounded-full grayscale transition hover:scale-110 hover:grayscale-0" />
            ))}
          </div>
        </div>
        <div className="absolute -bottom-8 mx-auto flex w-[90%] max-w-2xl flex-col items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-stone-700 shadow-xl shadow-black/10 sm:flex-row">
          <span className="flex rounded-full bg-orange-500 px-3 py-1 text-white">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={16} fill="currentColor" />
            ))}
          </span>
          <span className="font-[var(--font-alt)] text-sm">
            <strong className="underline">25,000+ happy food lovers</strong> visited our authentic restaurant
          </span>
        </div>
      </section> */}

      {/* <section id="blog" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle eyebrow="- From Our Blog -" title="Recent Articles" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogCards.map(([title, image]) => (
              <motion.article
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="group relative min-h-96 cursor-pointer overflow-hidden rounded-lg"
              >
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col justify-between bg-black/45 p-8 transition group-hover:bg-black/20">
                  <span className="w-fit bg-white px-3 py-1 font-[var(--font-alt)] text-xs font-bold uppercase text-stone-800 transition group-hover:bg-transparent group-hover:text-white">
                    Restaurant
                  </span>
                  <h3 className="font-[var(--font-heading)] text-4xl uppercase leading-9 text-white">{title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />



      <div className="flex flex-col items-center justify-center gap-4 bg-[#fbf5f5] px-5 py-5 text-center text-stone-700 md:flex-row md:justify-evenly">
        <p className="font-[var(--font-alt)]">&copy; Copyright {new Date().getFullYear()}</p>
        <a href="#home" className="font-[var(--font-heading)] text-3xl text-[#fc791a]">UNCLE BIGGS</a>
        <div className="flex gap-4">
          <CircleDot size={18} />
          <Award size={18} />
          <Wifi size={18} />
          <Aperture size={18} />
        </div>
      </div>
    </main>
  );
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="text-center">
      <p className="font-[var(--font-alt)] text-sm font-bold uppercase tracking-wide text-red-600">{eyebrow}</p>
      <h2 className="mt-3 font-[var(--font-heading)] text-5xl uppercase leading-none md:text-7xl">{title}</h2>
    </div>
  );
}
