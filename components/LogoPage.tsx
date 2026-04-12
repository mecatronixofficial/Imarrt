import Image from "next/image";
import ImgHelper from "@/helper/img_helper";

const logos = [
  {
    name: "Bos Indicus",
    category: "Mens Wear",
    img: ImgHelper.logo.bosindicus,
    desc: "Modern menswear identity crafted for quality, comfort, and style.",
  },
  {
    name: "INDXO",
    category: "Mens Wear",
    img: ImgHelper.logo.indxo,
    desc: "A bold menswear brand focused on premium apparel collections.",
  },
  {
    name: "Feminista",
    category: "Womens Wear",
    img: ImgHelper.logo.feminista,
    desc: "Elegant women’s fashion branding designed for modern trends.",
  },
  {
    name: "DreamAura",
    category: "Womens Night Wear",
    img: ImgHelper.logo.dreamaura,
    desc: "Soft, stylish, and comfort-focused nightwear identity for women.",
  },
  {
    name: "Vandoos",
    category: "Kids Wear",
    img: ImgHelper.logo.vandoos,
    desc: "Playful and vibrant kidswear branding for growing collections.",
  },
];

export default function LogoPage() {
  return (
    <section className="logo-page" id="ourbrand">
      <div className="logo-bg-glow logo-bg-glow1" />
      <div className="logo-bg-glow logo-bg-glow2" />

      <div className="logo-container">
        <div className="logo-head">
          <span className="sec-lbl">Our Brand Portfolio</span>
          <h1 className="sec-title">Logos That Define Our Product Identity</h1>
          <p className="logo-sub">
            Discover our curated brand lineup across menswear, womenswear,
            nightwear, kidswear, and corporate textile identity.
          </p>
        </div>

        <div className="logo-grid">
          {logos.map((item, index) => (
            <div className="logo-card" key={index}>
              <div className="logo-card-top">
                <span className="logo-cat">{item.category}</span>
                <span className="logo-no">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="logo-image-wrap">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={220}
                  height={120}
                  className="logo-image"
                />
              </div>

              <div className="logo-card-body">
                <h3 className="sec-title">{item.name}</h3>
                <p className="logo-desc">{item.desc}</p>

                <div className="">
                  <a href="#products" className="logo-btn">
                    View Brands
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
