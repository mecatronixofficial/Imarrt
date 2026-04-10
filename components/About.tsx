import ImgHelper from "@/helper/img_helper";
import Link from "next/dist/client/link";
import Image from "next/image";

const features = [
  "Manufacturer & Supplier of Uniforms and Readymade Garments",
  "Customized Orders Available (School, Corporate & Industrial Uniforms)",
  "Export Quality Garments with International Standards",
  "Branded & Unbranded Stocklots Available",
  "Knit & Woven Garments for All Age Groups",
  "Private Labeling & Custom Branding Accepted",
  "Bulk Orders with Competitive Pricing",
  "Located at Rayapuram, Tirupur — 641 001",
  "+91 86754 50005 · info@imarrt.com",
];

export default function About() {
  return (
    <div className="ab-wrap" id="about">
      <div className="ab-inner">
        {/* Visual */}
        <div className="ab-vis rv">
          <div className="ab-box">
            <Image
              src={ImgHelper.about.garmemt}
              alt="About banner"
              fill
              style={{ objectFit: "cover", opacity: 1 }}
            />
          </div>
          <div className="ab-badge">
            <span className="ab-bnum">35+</span>
            <span className="ab-btxt">
              Dispatch
              <br />
              Countries
            </span>
          </div>
          <div className="ab-icard">
            <Link href="#top">
        <Image
          src={ImgHelper.logo.main}
          alt="logo"
          className="n-logo"
          width={120} // ✅ required in Next.js
          height={40} // adjust based on your logo
          priority
        />
      </Link>

          </div>
        </div>

        {/* Text */}
        <div className="rv">
          <span className="sec-lbl">Who We Are</span>
          <h2 className="sec-title">
            Born in India&apos;s
            <br />
            Knitwear Capital
          </h2>
          <p className="sec-body">
            iMarrt is located at Rayapuram, Tirupur — the city that drives 54%
            of India&apos;s entire textile exports. We are a dedicated retailer,
            exporter, and supplier of premium readymade garments serving brands
            and buyers worldwide.
          </p>
          <p className="sec-body" style={{ marginTop: "14px" }}>
            Every garment is crafted to exact buyer specifications, with custom
            labels, packaging, and private branding available. From newborn
            rompers to adult fashion — quality is our non-negotiable standard.
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
