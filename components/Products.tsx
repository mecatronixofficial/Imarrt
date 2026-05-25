import ImgHelper from "@/helper/img_helper";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    cardSpan: "col-span-6 max-[991px]:col-span-1",
    aspect: "aspect-[16/9] max-[991px]:aspect-[4/3]",
    img: ImgHelper.products.uniform,
    category: "Uniform · School Students",
    name: "School Uniforms",
    desc: "Durable, comfortable, and easy-care fabrics for daily student wear.",
  },
  {
    cardSpan: "col-span-3 max-[991px]:col-span-1",
    aspect: "aspect-[4/5] max-[991px]:aspect-[4/3]",
    img: ImgHelper.products.custom,
    category: "Customized Orders",
    name: "Custom Garments",
    desc: "Tailor-made apparel based on your size, fabric, and branding needs.",
  },
  {
    cardSpan: "col-span-3 max-[991px]:col-span-1",
    aspect: "aspect-square max-[991px]:aspect-[4/3]",
    img: ImgHelper.products.exports,
    category: "Export Brand",
    name: "Trusted Exports",
    desc: "Garments crafted for international markets with premium finishing.",
  },
  {
    cardSpan: "col-span-4 max-[991px]:col-span-1",
    aspect: "aspect-[4/3]",
    img: ImgHelper.products.unbranded,
    category: "Unbranded",
    name: "Ready Stock",
    desc: "Quality garments without branding for wholesale and resale.",
  },
  {
    cardSpan: "col-span-4 max-[991px]:col-span-1",
    aspect: "aspect-[3/4] max-[991px]:aspect-[4/3]",
    img: ImgHelper.products.stocklots,
    category: "Stocklots",
    name: "Bulk Stocklots",
    desc: "Large-volume stocklots with attractive pricing for buyers.",
  },
  {
    cardSpan: "col-span-4 max-[991px]:col-span-1",
    aspect: "aspect-[4/3]",
    img: ImgHelper.products.kids,
    category: "Kids Wear",
    name: "Kids Collection",
    desc: "Soft, durable, and stylish garments for growing children.",
  },
  {
    cardSpan: "col-span-5 max-[991px]:col-span-1",
    aspect: "aspect-[16/10] max-[991px]:aspect-[4/3]",
    img: ImgHelper.products.baby,
    category: "Infants",
    name: "Infants' Wear",
    desc: "Soft-touch fabrics for babies, designed for comfort and safety.",
  },
  {
    cardSpan: "col-span-7 max-[991px]:col-span-1",
    aspect: "aspect-[21/9] max-[991px]:aspect-[4/3]",
    img: ImgHelper.products.asults,
    category: "Polo Shirts",
    name: "Premium Polos",
    desc: "Smart casual polos for brands, uniforms, and export programs.",
  },
];

export default function Products() {
  return (
    <div className="bg-[rgba(191,215,234,0.2)]" id="products">
      <div
        className="
          max-w-[1380px] mx-auto px-14 py-[100px]
          max-[991px]:px-6 max-[991px]:py-20
          max-[576px]:px-6 max-[576px]:py-14
        "
      >
        {/* Head */}
        <div
          className="
            flex justify-between items-end mb-[52px] flex-wrap gap-[18px]
            rv
          "
        >
          <div>
            <span
              className="
                inline-block bg-[#F8E22A] text-[#111111]
                text-[0.6rem] font-bold tracking-[0.22em] uppercase
                px-[14px] py-[6px] rounded-sm mb-4
              "
            >
              Our Range
            </span>
            <h2
              className="
                font-poppins font-bold text-[#111111] leading-[1.1] mb-4
                text-[clamp(2.4rem,3.8vw,3.8rem)]
              "
            >
              What We Offer
            </h2>
          </div>
          <Link
            href="#contact"
            className="
              inline-block bg-[#111111] text-[#F8E22A] px-9 py-[14px] rounded-[3px]
              no-underline text-[0.71rem] font-bold tracking-[0.17em] uppercase
              transition-[background,transform] duration-300
              hover:bg-[#1E1E1E] hover:-translate-y-[2px]
            "
          >
            Request Catalogue →
          </Link>
        </div>

        {/* Grid */}
        <div
          className="
            grid grid-cols-12 gap-[22px]
            max-[991px]:grid-cols-2
            max-[576px]:grid-cols-1
          "
        >
          {products.map((item, i) => (
            <div
              key={i}
              className={`
                ${item.cardSpan}
                rounded-md overflow-hidden border-2 border-transparent
                transition-[border-color,transform,box-shadow] duration-[350ms]
                cursor-pointer bg-[#F5F5F5] relative group
                hover:border-[#F8E22A] hover:-translate-y-[5px] hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)]
              `}
            >
              {/* gradient sheen overlay (was ::before) */}
              <div
                aria-hidden
                className="
                  absolute inset-0 pointer-events-none
                  opacity-0 transition-opacity duration-[400ms]
                  group-hover:opacity-100
                  bg-[linear-gradient(120deg,transparent,rgba(245,200,0,0.08),transparent)]
                  z-[1]
                "
              />

              {/* Image */}
              <div className={`relative overflow-hidden ${item.aspect}`}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 ease group-hover:scale-[1.06]"
                />
                {/* dark bottom gradient (was .pc-img::after) */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent)] pointer-events-none"
                />
              </div>

              {/* Body */}
              <div
                className="
                  p-6 bg-[#F5F5F5]
                  max-[576px]:p-[18px]
                "
              >
                <div className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#2B7A2B] mb-[6px]">
                  {item.category}
                </div>
                <div
                  className="
                    font-poppins text-[1.7rem] font-bold text-[#111111] mb-2
                    max-[576px]:text-[1.35rem]
                  "
                >
                  {item.name}
                </div>
                <div className="text-[0.79rem] text-[#666666] leading-[1.7]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
