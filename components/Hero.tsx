import Link from "next/link";

export default function Hero() {
  return (
    <section className="headhero">
      <div className="hero">
        <div className="h-left">
          <div className="h-tag">
            ✦ Tirupur, Tamil Nadu — Knitwear Capital of India
          </div>
          <h1 className="h-title">I-Marrt</h1>
          <p className="h-sub">Premium Readymade Garments</p>
          <p className="h-desc">
            Retailer, exporter &amp; supplier of high-quality knit and woven
            garments — infants, children &amp; adults. Based in Rayapuram,
            Tirupur.
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
              <div className="st-num">35+</div>
              <div className="st-lbl">Countries Exported</div>
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
          <div style={{ position: "relative" }}>
            <div className="h-card">
              <span className="clogo">I-Marrt</span>
              <p>
                Your trusted garment export partner from the heart of Tirupur,
                India&apos;s knitwear capital.
              </p>
              <span className="h-card-tag">✦ Tirupur · Tamil Nadu</span>
            </div>
            <div className="fc fc1">
              <span className="fn">54%</span>
              India&apos;s Textile Exports
            </div>
            <div className="fc fc2">
              <span className="fn">35+</span>
              Export Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
