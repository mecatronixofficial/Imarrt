"use client";

import ImgHelper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {

  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (

    <section className="headhero">
      <div className="hero">
        <div className="h-left">
          <Link href="#top" onClick={close}>
            <Image
              src={ImgHelper.logo.main}
              alt="logo"
              className="n-logo"
              width={120}
              height={60}
              priority
            />
          </Link>

          <p className="h-sub">Premium Readymade Garments</p>

          <p className="h-desc">
            Manufacturer, Wholesaler &amp; supplier of high-quality knit and woven
            garments — infants, children &amp; adults.
          </p>

          <div className="h-btns">
            <Link href="#products" className="btn-b">
              Explore Products
            </Link>

            <Link href="#contact" className="btn-ob">
              Get a Quote
            </Link>
          </div>

          <div className="h-stats">
            <div>
              <div className="st-num">B2C</div>
              <div className="st-lbl">Corporate Orders</div>
            </div>

            <div>
              <div className="st-num">100%</div>
              <div className="st-lbl">Quality Assured</div>
            </div>

            <div>
              <div className="st-num">B2B</div>
              <div className="st-lbl">Custom Orders</div>
            </div>
          </div>
        </div>

        <div className="h-right">
          <div style={{ position: "relative", width: "90%", height: "90%" }}>
            <Image
              src={ImgHelper.Hero.Hero}
              alt="hero"
              fill
              style={{ objectFit: "fill", borderRadius: 10 }}
            />

            <div className="h-card">
              <span className="clogo"></span>

              <p className="">
              </p>

              <span className=""></span>
            </div>

            <div className="fc fc1">
              <span className="fn">54%</span>
              India&apos;s Textile Exports
            </div>

            {/* <div className="fc fc2">
              <span className="fn">35+</span>
              Garment Distribution
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}