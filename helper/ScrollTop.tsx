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
    <div className="floating-wrap">
      
      {/* WhatsApp (Always visible) */}
      <a
        href="https://wa.me/918675450005" // 👉 change number
        target="_blank"
        className="float-btnwp whatsapp"
      >
         <Image
          src={WhatsApp}
          alt="Mecatronix"
          width={40}
          height={40}
        />
      </a>

      {/* Scroll Top (only after scroll) */}
      {show && (
        <button className="float-btn up" onClick={scrollToTop}>
          <ArrowUp size={22} />
        </button>
      )}

    </div>
  );
}