"use client"
import {
  Mail,
  MapPin,
  Phone,
  Utensils,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {[
          [Utensils, "About Restaurant", "Enjoy a wonderful cafe dining experience"],
          [Phone, "Let's Talk", "Phone: 1-800-222-002"],
          [Mail, "Book A Table", "luxedining@gmail.com"],
          [MapPin, "Contact Us", "White House, United States Of America"],
        ].map(([Icon, title, text]) => (
          <div key={title} className="flex flex-col items-center gap-3 text-stone-700">
            <Icon size={36} />
            <h3 className="font-[var(--font-alt)] text-sm font-extrabold uppercase">{title}</h3>
            <p className="font-[var(--font-alt)] leading-7 text-stone-500">{text}</p>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer