const features = [
  'Retailer, Exporter & Supplier of Readymade Garments',
  'Knit & Woven garments across all age groups',
  'Custom buyer labels & private branding accepted',
  'Located at Rayapuram, Tirupur — 641 001',
  '+91 86754 50005 · info@imarrt.com',
];

export default function About() {
  return (
    <div className="ab-wrap" id="about">
      <div className="ab-inner">
        {/* Visual */}
        <div className="ab-vis rv">
          <div className="ab-box">
            <span className="ab-blogo">I-Marrt</span>
            <span className="ab-btag">Tirupur · Tamil Nadu</span>
          </div>
          <div className="ab-badge">
            <span className="ab-bnum">35+</span>
            <span className="ab-btxt">Export<br />Countries</span>
          </div>
          <div className="ab-icard">
            <strong>Vijayaraj.P</strong>
            <span>Founder &amp; Director</span>
          </div>
        </div>

        {/* Text */}
        <div className="rv">
          <span className="sec-lbl">Who We Are</span>
          <h2 className="sec-title">
            Born in India&apos;s<br />Knitwear Capital
          </h2>
          <p className="sec-body">
            iMarrt is located at Rayapuram, Tirupur — the city that drives 54% of India&apos;s
            entire textile exports. We are a dedicated retailer, exporter, and supplier of premium
            readymade garments serving brands and buyers worldwide.
          </p>
          <p className="sec-body" style={{ marginTop: '14px' }}>
            Every garment is crafted to exact buyer specifications, with custom labels, packaging,
            and private branding available. From newborn rompers to adult fashion — quality is our
            non-negotiable standard.
          </p>
          <ul className="feat-list">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
