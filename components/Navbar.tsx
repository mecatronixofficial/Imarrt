"use client";

import ImgHelper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav id="top" className={open ? "nav-open" : ""}>
      <div className="nav-id">
        <Link href="#top" onClick={close}>
          <Image
            src={ImgHelper.logo.main}
            alt="logo"
            className="n-logo"
            width={120} 
            height={40} 
            priority
          />
        </Link>

        {/* Hamburger */}
        <button
          className="n-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Overlay */}
        {open && <div className="n-overlay" onClick={close} />}

        <ul className={`n-ul${open ? " n-ul--open" : ""}`}>
          <li>
            <Link href="#about" onClick={close}>
              About
            </Link>
          </li>
          <li>
            <Link href="#products" onClick={close}>
              Products
            </Link>
          </li>
          <li>
            <Link href="#strengths" onClick={close}>
              Why Us
            </Link>
          </li>
          <li>
            <Link href="#process" onClick={close}>
              Process
            </Link>
          </li>
          <li>
            <Link href="#ourbrand" onClick={close}>
              Our Brand
            </Link>
          </li>
          <li>
            <Link href="#collections" onClick={close}>
              Our Collections
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={close} className="n-cta">
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
