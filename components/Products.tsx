import ImgHelper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    cardClass: "c1",
    imgClass: "t1",
    img: ImgHelper.products.uniform,
    category: "Uniform · School Students",
    name: "School Uniforms",
    desc: "Durable, comfortable, and easy-care fabrics for daily student wear.",
  },
  {
    cardClass: "c2",
    imgClass: "t2",
    img: ImgHelper.products.custom,
    category: "Customized Orders",
    name: "Custom Garments",
    desc: "Tailor-made apparel based on your size, fabric, and branding needs.",
  },
  {
    cardClass: "c3",
    imgClass: "t3",
    img: ImgHelper.products.exports,
    category: "Export Brand",
    name: "Branded Exports",
    desc: "Garments crafted for international markets with premium finishing.",
  },
  {
    cardClass: "c4",
    imgClass: "t4",
    img: ImgHelper.products.unbranded,
    category: "Unbranded",
    name: "Ready Stock",
    desc: "Quality garments without branding for wholesale and resale.",
  },
  {
    cardClass: "c5",
    imgClass: "t5",
    img: ImgHelper.products.stocklots,
    category: "Stocklots",
    name: "Bulk Stocklots",
    desc: "Large-volume stocklots with attractive pricing for buyers.",
  },
  {
    cardClass: "c6",
    imgClass: "t6",
    img: ImgHelper.products.kids,
    category: "Kids Wear",
    name: "Kids Collection",
    desc: "Soft, durable, and stylish garments for growing children.",
  },
  {
    cardClass: "c7",
    imgClass: "t7",
    img: ImgHelper.products.baby,
    category: "Infants",
    name: "Infants' Wear",
    desc: "Soft-touch fabrics for babies, designed for comfort and safety.",
  },
  {
    cardClass: "c8",
    imgClass: "t8",
    img: ImgHelper.products.asults,
    category: "Polo Shirts",
    name: "Premium Polos",
    desc: "Smart casual polos for brands, uniforms, and export programs.",
  },
];

export default function Products() {
  return (
    <div className="pr-wrap" id="products">
      <div className="pr-inner">
        <div className="pr-head rv">
          <div>
            <span className="sec-lbl">Our Range</span>
            <h2 className="sec-title">What We Offer</h2>
          </div>
          <Link href="#contact" className="btn-b">
            Request Catalogue →
          </Link>
        </div>

        <div className="pr-grid">
  {products.map((item, i) => (
    <div className={`pc ${item.cardClass}`} key={i}>
      <div className={`pc-img ${item.imgClass}`}>
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="pc-body">
        <div className="pc-cat">{item.category}</div>
        <div className="pc-name">{item.name}</div>
        <div className="pc-desc">{item.desc}</div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}