'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav id="top" className={open ? 'nav-open' : ''}>
      <Link href="#top" className="n-logo" onClick={close}>I-Marrt</Link>

      {/* Hamburger */}
      <button
        className="n-burger"
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      {/* Overlay */}
      {open && <div className="n-overlay" onClick={close} />}

      <ul className={`n-ul${open ? ' n-ul--open' : ''}`}>
        <li><Link href="#about"     onClick={close}>About</Link></li>
        <li><Link href="#products"  onClick={close}>Products</Link></li>
        <li><Link href="#strengths" onClick={close}>Why Us</Link></li>
        <li><Link href="#process"   onClick={close}>Process</Link></li>
        <li><Link href="#contact"   onClick={close} className="n-cta">Enquire Now</Link></li>
      </ul>
    </nav>
  );
}