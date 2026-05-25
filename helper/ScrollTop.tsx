"use client";

import { useEffect, useState } from "react";
import IconHelper from "@/helper/icon_helper";
import ImgHelper from "./img_helper";
import Image from "next/image";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  const ArrowUp = IconHelper.arrow?.up || (() => <span>↑</span>);
  const WhatsApp = ImgHelper.Icons.whtasapp || (() => <span>💬</span>);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-5 bottom-5 flex flex-col items-center gap-3 z-[999]">
      {/* WhatsApp (Always visible) */}
      <a
        href="https://wa.me/918675450005"
        target="_blank"
        className="
          w-12 h-12 rounded-full flex items-center justify-center
          border-0 cursor-pointer transition-all duration-[1s]
          hover:scale-110
        "
      >
        <Image src={WhatsApp} alt="Mecatronix" width={40} height={40} />
      </a>

      {/* Scroll Top (only after scroll) */}
      {show && (
        <button
          onClick={scrollToTop}
          className="
            w-12 h-12 rounded-full flex items-center justify-center
            text-white border-0 cursor-pointer
            shadow-[0_4px_12px_rgba(0,0,0,0.2)]
            transition-all duration-300
            bg-[#0b1e3d] hover:bg-[#c9a84c]
          "
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
