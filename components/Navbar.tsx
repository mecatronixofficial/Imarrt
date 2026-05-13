"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav id="top" className={open ? "nav-open" : ""}>
      <div className="nav-id">

        {/* Contact */}
        <div className="nav-contact">
          <div className="nav-phones">
            <a href="tel:+918675450005" className="nav-phone">
              +91 86754 50005
            </a>

            
          </div>

          <a href="mailto:info@imarrt.com" className="nav-email">
            info@imarrt.com
          </a>
        </div>

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

        {/* Menu */}
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