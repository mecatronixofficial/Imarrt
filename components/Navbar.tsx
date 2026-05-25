"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Shirt,
  PersonStanding,
  Baby,
  Sparkles,
  Crown,
  Briefcase,
} from "lucide-react";

const clothingTypes = [
  {
    name: "Men Clothing",
    icon: PersonStanding,
    gradient: "from-blue-500 to-indigo-600",
    accent: "#3B5BDB",
  },
  {
    name: "Women Clothing",
    icon: Shirt,
    gradient: "from-pink-500 to-rose-600",
    accent: "#E11D74",
  },
  {
    name: "Kids Clothing",
    icon: Baby,
    gradient: "from-amber-400 to-orange-500",
    accent: "#F59E0B",
  },
  {
    name: "Traditional Wear",
    icon: Crown,
    gradient: "from-purple-500 to-fuchsia-600",
    accent: "#9333EA",
  },
  {
    name: "Casual Wear",
    icon: Sparkles,
    gradient: "from-emerald-500 to-teal-600",
    accent: "#10B981",
  },
  {
    name: "Formal Wear",
    icon: Briefcase,
    gradient: "from-slate-700 to-slate-900",
    accent: "#1E293B",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % clothingTypes.length);
        setIsAnimating(false);
      }, 300);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const close = () => setOpen(false);
  const current = clothingTypes[currentIndex];
  const Icon = current.icon;

  return (
    <nav
      id="top"
      className="fixed top-0 left-0 w-full z-20 bg-[#F8E22A] shadow-[0_3px_20px_rgba(0,0,0,0.13)]"
    >
      <div className="max-w-[1380px] mx-auto h-[68px] px-6 flex items-center justify-between">
        {/* Animated Clothing Type Showcase */}
        <div className="flex items-center">
          <div
            className="relative group flex items-center gap-2.5 px-4 py-2 overflow-hidden transition-all duration-500"
          >
            {/* Animated background shimmer */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${current.gradient} opacity-0 transition-opacity duration-500`}
            />

            {/* Icon with rotation animation */}
            <div
              className={`relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${current.gradient} text-white transition-all duration-500 ${
                isAnimating
                  ? "scale-0 rotate-180 opacity-0"
                  : "scale-100 rotate-0 opacity-100"
              }`}
              style={{
                boxShadow: `0 2px 8px ${current.accent}50`,
              }}
            >
              <Icon size={14} strokeWidth={2.5} />
            </div>

            {/* Text with slide animation */}
            <div className="relative overflow-hidden min-w-[120px] ">
              <span
                className={`block text-black text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-500 ${
                  isAnimating
                    ? "translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {current.name}
              </span>
            </div>

          </div>
        </div>

        {/* Hamburger — visible only on mobile (max-w 768px) */}
        <button
          className={`hidden max-[768px]:flex flex-col justify-center gap-[5px] w-9 h-9 bg-transparent border-0 cursor-pointer p-1 relative z-[1001]`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-[2px] w-full bg-[#111111] rounded-sm origin-center transition-[transform,opacity,width] duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#111111] rounded-sm origin-center transition-[transform,opacity,width] duration-300 ${
              open ? "opacity-0 !w-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-[#111111] rounded-sm origin-center transition-[transform,opacity,width] duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Overlay */}
        {open && (
          <div className="fixed inset-0 bg-black/35 z-[998]" onClick={close} />
        )}

        {/* Menu */}
        <ul
          className={`
            flex gap-[30px] list-none m-0 p-0
            max-[768px]:fixed max-[768px]:top-[68px] max-[768px]:left-0 max-[768px]:right-0
            max-[768px]:bg-[#F8E22A] max-[768px]:flex-col max-[768px]:items-stretch max-[768px]:gap-0
            max-[768px]:pt-3 max-[768px]:pb-6 max-[768px]:shadow-[0_8px_32px_rgba(0,0,0,0.12)]
            max-[768px]:z-[999] max-[768px]:transition-[opacity,transform] max-[768px]:duration-[250ms]
            ${
              open
                ? "max-[768px]:opacity-100 max-[768px]:pointer-events-auto max-[768px]:translate-y-0"
                : "max-[768px]:opacity-0 max-[768px]:pointer-events-none max-[768px]:-translate-y-2"
            }
          `}
        >
          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#about"
              onClick={close}
              className="no-underline text-black/60 text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:text-[#2B7A2B] max-[768px]:block max-[768px]:px-6 max-[768px]:py-4 max-[768px]:text-[0.75rem] max-[768px]:text-black"
            >
              About
            </Link>
          </li>

          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#products"
              onClick={close}
              className="no-underline text-black/60 text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:text-[#2B7A2B] max-[768px]:block max-[768px]:px-6 max-[768px]:py-4 max-[768px]:text-[0.75rem] max-[768px]:text-black"
            >
              Products
            </Link>
          </li>

          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#strengths"
              onClick={close}
              className="no-underline text-black/60 text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:text-[#2B7A2B] max-[768px]:block max-[768px]:px-6 max-[768px]:py-4 max-[768px]:text-[0.75rem] max-[768px]:text-black"
            >
              Why Us
            </Link>
          </li>

          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#process"
              onClick={close}
              className="no-underline text-black/60 text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:text-[#2B7A2B] max-[768px]:block max-[768px]:px-6 max-[768px]:py-4 max-[768px]:text-[0.75rem] max-[768px]:text-black"
            >
              Process
            </Link>
          </li>

          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#ourbrand"
              onClick={close}
              className="no-underline text-black/60 text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:text-[#2B7A2B] max-[768px]:block max-[768px]:px-6 max-[768px]:py-4 max-[768px]:text-[0.75rem] max-[768px]:text-black"
            >
              Our Brand
            </Link>
          </li>

          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#collections"
              onClick={close}
              className="no-underline text-black/60 text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:text-[#2B7A2B] max-[768px]:block max-[768px]:px-6 max-[768px]:py-4 max-[768px]:text-[0.75rem] max-[768px]:text-black"
            >
              Our Collections
            </Link>
          </li>

          <li className="max-[768px]:border-b max-[768px]:border-black/[0.07] last:max-[768px]:border-b-0 last:max-[768px]:pt-3 last:max-[768px]:px-6 last:max-[768px]:pb-0">
            <Link
              href="#contact"
              onClick={close}
              className="!bg-[#111111] !text-[#F8E22A] px-[22px] py-[9px] rounded-[3px] no-underline text-[0.71rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-[250ms] hover:!bg-[#2B7A2B] hover:!text-white max-[768px]:block max-[768px]:text-center max-[768px]:!px-6 max-[768px]:!py-[13px]"
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}