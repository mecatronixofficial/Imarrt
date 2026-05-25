"use client";

import ImgHelper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <section className="bg-[#F8E22A]">
      <div
        className="
          min-h-screen max-w-[1380px] mx-auto pt-[68px] px-5 pb-0
          grid grid-cols-2 max-[900px]:grid-cols-1 max-[900px]:min-h-[auto]
          relative overflow-hidden
        "
      >
        {/* Decorative circles (replacing ::before / ::after) */}
        <div
          aria-hidden
          className="absolute rounded-full bg-black/5 w-[560px] h-[560px] -top-[180px] -right-[160px] pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute rounded-full bg-black/5 w-[260px] h-[260px] -bottom-[80px] left-[22%] pointer-events-none"
        />

        {/* Left side */}
        <div
          className="
            flex flex-col justify-center px-[60px] py-20 relative z-[2]
            max-[900px]:px-10 max-[900px]:pt-[60px] max-[900px]:pb-10
            max-[600px]:px-6 max-[600px]:pt-12 max-[600px]:pb-8
          "
        >
          <Link href="#top" onClick={close}>
            <Image
              src={ImgHelper.logo.hero1}
              alt="logo"
              className="block w-[85%] mb-20 h-auto relative z-[2]"
              priority
            />
          </Link>

          <p
            className="
              font-bold tracking-[0.15em] uppercase
              text-[clamp(0.9rem,1.4vw,1.1rem)] text-black/50 mb-[26px]
              opacity-0 [animation:fup_0.7s_0.42s_forwards]
            "
          >
            Premium Readymade Garments
          </p>

          <p
            className="
              text-[0.87rem] leading-[1.85] text-black/60 max-w-[410px] mb-10
              opacity-0 [animation:fup_0.7s_0.55s_forwards]
            "
          >
            Manufacturer, Wholesaler &amp; supplier of high-quality knit and
            woven garments — infants, children &amp; adults.
          </p>

          <div
            className="
              flex gap-3 flex-wrap opacity-0 [animation:fup_0.7s_0.68s_forwards]
              max-[600px]:flex-col
            "
          >
            <Link
              href="#products"
              className="
                inline-block bg-[#111111] text-[#F8E22A] px-9 py-[14px] rounded-[3px]
                no-underline text-[0.71rem] font-bold tracking-[0.17em] uppercase
                transition-[background,transform] duration-300 hover:bg-[#1E1E1E] hover:-translate-y-[2px]
                max-[600px]:text-center max-[600px]:w-full max-[600px]:box-border
              "
            >
              Explore Products
            </Link>

            <Link
              href="#contact"
              className="
                inline-block border-2 border-[#111111] text-[#111111] px-9 py-3 rounded-[3px]
                no-underline text-[0.71rem] font-bold tracking-[0.17em] uppercase
                transition-[background,color,transform] duration-300
                hover:bg-[#111111] hover:text-[#F8E22A] hover:-translate-y-[2px]
                max-[600px]:text-center max-[600px]:w-full max-[600px]:box-border
              "
            >
              Get a Quote
            </Link>
          </div>

          <div
            className="
              flex gap-9 mt-[50px] pt-[26px] border-t-2 border-black/[0.15]
              opacity-0 [animation:fup_0.7s_0.82s_forwards]
              max-[600px]:gap-6 max-[600px]:flex-wrap
            "
          >
            <div>
              <div className="font-poppins text-[2.8rem] font-bold leading-none text-[#111111]">
                B2C
              </div>
              <div className="text-[0.62rem] font-semibold tracking-[0.13em] uppercase text-black/45 mt-[3px]">
                Corporate Orders
              </div>
            </div>

            <div>
              <div className="font-poppins text-[2.8rem] font-bold leading-none text-[#111111]">
                100%
              </div>
              <div className="text-[0.62rem] font-semibold tracking-[0.13em] uppercase text-black/45 mt-[3px]">
                Quality Assured
              </div>
            </div>

            <div>
              <div className="font-poppins text-[2.8rem] font-bold leading-none text-[#111111]">
                B2B
              </div>
              <div className="text-[0.62rem] font-semibold tracking-[0.13em] uppercase text-black/45 mt-[3px]">
                Custom Orders
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="relative flex items-center justify-end py-12 pr-10 pl-0 min-h-[520px] overflow-hidden font-sans max-[900px]:justify-start max-[900px]:px-6 max-[600px]:justify-center max-[600px]:px-4">
          <div className="relative w-full max-w-[520px] flex-shrink-0">
            {/* Side tags */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-10 max-[600px]:hidden">
              {[
                { color: "bg-[#F8E22A]", label: "5+ Own Brands" },
                { color: "bg-[#4A90D9]", label: "35+ countries" },
                { color: "bg-[#2B7A2B]", label: "50+ collections" },
              ].map(({ color, label }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 bg-white border border-black/10 rounded-full px-3.5 py-2 text-[11px] font-medium text-neutral-500 whitespace-nowrap shadow-sm opacity-0 animate-[slideIn_0.6s_forwards] [animation-timing-function:cubic-bezier(0.22,1,0.36,1)]"
                  style={{ animationDelay: `${0.5 + i * 0.15}s` }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color}`}
                  />
                  {label}
                </div>
              ))}
            </div>

            {/* Main image card */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden flex items-end opacity-0 animate-[imgReveal_0.9s_0.1s_forwards] [animation-timing-function:cubic-bezier(0.22,1,0.36,1)]">
              <Image
                src={ImgHelper.about.garmemt}
                alt="Garment industry"
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Fabric texture overlay */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  backgroundImage: `
                repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 8px),
                repeating-linear-gradient(-45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 8px)
              `,
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Text content */}
              <div className="relative z-[3] p-8 w-full">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#F8E22A] opacity-90 mb-2">
                  India's Textile Sector
                </p>
                <p
                  className="text-[72px] font-black text-[#F8E22A] leading-none mb-2 -tracking-[2px]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  54%
                </p>
                <p className="text-[14px] text-white/70 leading-relaxed font-light max-w-[260px]">
                  Share of India's total textile &amp; apparel exports — a
                  cornerstone of manufacturing heritage.
                </p>
              </div>
            </div>

            {/* Floating export badge */}
            <div className="absolute -top-[18px] -right-7 bg-white border border-black/10 rounded-[14px] px-5 py-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.10)] z-10 min-w-[160px] opacity-0 animate-[floatIn_0.7s_0.4s_forwards] [animation-timing-function:cubic-bezier(0.22,1,0.36,1)] max-[900px]:right-2 max-[600px]:right-1">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-[7px] h-[7px] rounded-full bg-[#2B7A2B] inline-block animate-[pulse_2s_infinite]" />
                <span className="text-[10px] font-medium text-neutral-400 tracking-[0.05em]">
                  EXPORT
                </span>
              </div>
              <p
                className="text-[26px] font-bold text-[#D4A800] leading-none mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                54%
              </p>
              <p className="text-[11px] font-medium text-neutral-500 tracking-[0.05em]">
                India&apos;s Textile Exports
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute bottom-6 -right-5 bg-[#F8E22A] rounded-[10px] px-[18px] py-3 z-10 opacity-0 animate-[floatIn_0.7s_0.9s_forwards] [animation-timing-function:cubic-bezier(0.22,1,0.36,1)] max-[900px]:right-2 max-[600px]:right-1">
              <strong
                className="block text-[20px] font-black text-[#1a1a1a] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                #2
              </strong>
              <span className="text-[12px] font-medium text-[#1a1a1a]">
                Global exporter
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
