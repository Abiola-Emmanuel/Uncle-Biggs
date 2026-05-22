"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const popularDishes = [
  ["Biggs Chicken Burger", "Crispy chicken, fresh tomato, house sauce", "$3.20", "/popular-1.webp"],
  ["Golden Chicken Meal", "Juicy chicken, fries, and a bright side salad", "$6.64", "/popular-2.webp"],
  ["Loaded Spicy Chips", "Hot chips, cheese, peppers, and Biggs seasoning", "$5.45", "/popular-3.webp"],
  ["Family Appeteaser Platter", "Bites, dips, vegetables, and shareable crunch", "$9.50", "/popular-4.webp"],
  ["Classic House Burger", "Grilled patty, lettuce, tomato, and creamy sauce", "$12.85", "/popular-5.webp"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function PopularDishes({ isDark }) {
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="- Customer Favorites -" title="Popular Dishes" />

        <div className="relative mt-10">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={false}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: ".popular-dishes-pagination" }}
            navigation={{
              prevEl: ".popular-dishes-prev",
              nextEl: ".popular-dishes-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!pb-14"
          >
            {popularDishes.map(([title, sub, price, image]) => (
              <SwiperSlide key={title}>
                <motion.article
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-lg"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-95"
                    />
                    <div className="absolute inset-0 grid place-items-center  shadow-xl opacity-0 transition duration-500 group-hover:opacity-100">
                      <span className="grid size-24 place-items-center rounded-full bg-white font-[var(--font-heading)] text-3xl text-red-600">
                        {price}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-[var(--font-alt)] text-lg font-semibold">{title}</h3>
                  <p className={`font-[var(--font-alt)] text-sm leading-7 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                    {sub}
                  </p>
                </motion.article>
              </SwiperSlide>
            ))}

          </Swiper>

          <button
            type="button"
            aria-label="Previous popular dish"
            className={`popular-dishes-prev absolute left-0 top-[42%] z-10 hidden size-11 -translate-x-1/2 place-items-center rounded-full shadow-lg shadow-black/10 transition hover:bg-[#fc791a] hover:text-white md:grid ${isDark ? "bg-neutral-800 text-white" : "bg-white text-stone-900"
              }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next popular dish"
            className={`popular-dishes-next absolute right-0 top-[42%] z-10 hidden size-11 translate-x-1/2 place-items-center rounded-full shadow-lg shadow-black/10 transition hover:bg-[#fc791a] hover:text-white md:grid ${isDark ? "bg-neutral-800 text-white" : "bg-white text-stone-900"
              }`}
          >
            <ChevronRight size={20} />
          </button>

          <div className="popular-dishes-pagination flex justify-center gap-2" />
        </div>
      </div>
    </section>
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
