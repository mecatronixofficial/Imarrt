"use client";
import ImgHelper from "@/helper/img_helper";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    img: ImgHelper.category.TShirts,
    name: "T-Shirts",
    sub: "All genders & ages",
    bg: "linear-gradient(160deg,#F5C800,#B08000)",
    link: "/",
    detail: {
      tagline: "The everyday essential, perfected.",
      description:
        "Crafted from 100% ring-spun cotton, our T-shirts deliver unmatched softness and durability. Available in 40+ colors across regular, oversized, and fitted silhouettes — bulk-ready for brands, schools, and exporters.",
      specs: [
        { label: "Fabric", value: "100% Ring-Spun Cotton" },
        { label: "GSM", value: "160 – 220 GSM" },
        { label: "Sizes", value: "XS – 7XL" },
        { label: "MOQ", value: "50 pcs / color" },
        { label: "Lead Time", value: "10 – 15 days" },
        { label: "Print Options", value: "Screen, DTG, Embroidery" },
      ],
      types: [
        "Round Neck",
        "V-Neck",
        "Polo Collar",
        "Oversized",
        "Crop Fit",
        "Longline",
      ],
      reviews: [
        {
          name: "Rahul M.",
          location: "Mumbai",
          stars: 5,
          text: "Ordered 500 pcs for our brand. Quality is export-grade, colors stayed vibrant after 40 washes.",
        },
        {
          name: "Priya S.",
          location: "Bangalore",
          stars: 5,
          text: "Fastest turnaround I've seen. Fabric feel is premium, clients loved it.",
        },
        {
          name: "James K.",
          location: "UAE",
          stars: 4,
          text: "Great GSM options. The 220 GSM heavyweight is exactly what we needed for winter.",
        },
      ],
      images: [
        ImgHelper.category.TShirts,
        ImgHelper.category.TShirts,
        ImgHelper.category.TShirts,
        ImgHelper.category.TShirts,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.Sweatshirts,
    name: "Wintershirts",
    sub: "Hoodies & crewnecks",
    bg: "linear-gradient(160deg,#222,#444)",
    link: "/",
    detail: {
      tagline: "Warmth built for the streets.",
      description:
        "French terry and fleece-lined hoodies & crewnecks with double-stitched seams. Built for premium streetwear labels and corporate gifting.",
      specs: [
        { label: "Fabric", value: "80% Cotton / 20% Polyester" },
        { label: "GSM", value: "280 – 380 GSM" },
        { label: "Sizes", value: "S – 5XL" },
        { label: "MOQ", value: "30 pcs / style" },
        { label: "Lead Time", value: "12 – 18 days" },
        { label: "Print Options", value: "Embroidery, Screen, Puff" },
      ],
      types: [
        "Pullover Hoodie",
        "Zip Hoodie",
        "Crewneck",
        "Quarter Zip",
        "Oversized Hoodie",
      ],
      reviews: [
        {
          name: "Arun T.",
          location: "Chennai",
          stars: 5,
          text: "The fleece quality is outstanding. Our European clients reordered twice.",
        },
        {
          name: "Meena R.",
          location: "Delhi",
          stars: 4,
          text: "Good stitching and weight. Exactly 320 GSM as promised.",
        },
      ],
      images: [
        ImgHelper.category.Sweatshirts,
        ImgHelper.category.Sweatshirts,
        ImgHelper.category.Sweatshirts,
        ImgHelper.category.Sweatshirts,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.KidsWear,
    name: "Kids Wear",
    sub: "0–14 years",
    bg: "linear-gradient(160deg,#FDE24A,#887800)",
    link: "/",
    detail: {
      tagline: "Safe, soft, made for little ones.",
      description:
        "OEKO-TEX certified fabrics, non-toxic dyes, and reinforced stitching — designed for active kids aged 0 to 14. Bright prints, playful cuts, export quality.",
      specs: [
        { label: "Fabric", value: "OEKO-TEX Certified Cotton" },
        { label: "GSM", value: "150 – 180 GSM" },
        { label: "Sizes", value: "0 – 14 Years" },
        { label: "MOQ", value: "100 pcs / style" },
        { label: "Lead Time", value: "10 – 14 days" },
        { label: "Print Options", value: "DTG, Screen, Sublimation" },
      ],
      types: [
        "T-Shirts",
        "Shorts Sets",
        "Dungarees",
        "Frocks",
        "Hoodies",
        "Pyjama Sets",
      ],
      reviews: [
        {
          name: "Sneha P.",
          location: "Pune",
          stars: 5,
          text: "Skin-friendly fabric, my daughter wore it all day without any rash.",
        },
        {
          name: "David L.",
          location: "UK",
          stars: 5,
          text: "Consistent sizing, excellent print quality. Perfect for our kids brand.",
        },
      ],
      images: [
        ImgHelper.category.KidsWear,
        ImgHelper.category.KidsWear,
        ImgHelper.category.KidsWear,
        ImgHelper.category.KidsWear,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.Infants,
    name: "Infants",
    sub: "Newborn to 24m",
    bg: "linear-gradient(160deg,#333,#111)",
    link: "/",
    detail: {
      tagline: "Gentle on the softest skin.",
      description:
        "Hypoallergenic, ultra-soft organic cotton pieces for newborns to 24 months. Snap buttons, tag-free labels, and flat seams for maximum comfort.",
      specs: [
        { label: "Fabric", value: "Organic Cotton" },
        { label: "GSM", value: "140 – 160 GSM" },
        { label: "Sizes", value: "NB, 3M, 6M, 12M, 18M, 24M" },
        { label: "MOQ", value: "100 pcs / style" },
        { label: "Lead Time", value: "12 – 16 days" },
        { label: "Print Options", value: "Water-based Screen" },
      ],
      types: [
        "Onesies",
        "Rompers",
        "Sleepsuits",
        "Bibs",
        "Booties Sets",
        "Gift Sets",
      ],
      reviews: [
        {
          name: "Kavya R.",
          location: "Hyderabad",
          stars: 5,
          text: "Zero allergic reaction on my newborn. Super soft, washes well.",
        },
        {
          name: "Lara M.",
          location: "Germany",
          stars: 5,
          text: "Perfect for our organic baby brand. Certification provided was legit.",
        },
      ],
      images: [
        ImgHelper.category.Infants,
        ImgHelper.category.Infants,
        ImgHelper.category.Infants,
        ImgHelper.category.Infants,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.PoloShirts,
    name: "Polo Shirts",
    sub: "Men's & Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
    link: "/",
    detail: {
      tagline: "Corporate-ready. Street-approved.",
      description:
        "Pique knit polo shirts with ribbed collars and cuffs. A staple for corporate uniforms, golf wear, and lifestyle brands. Available in 30+ solid colors.",
      specs: [
        { label: "Fabric", value: "Pique Cotton / Cotton-Poly" },
        { label: "GSM", value: "180 – 220 GSM" },
        { label: "Sizes", value: "XS – 5XL" },
        { label: "MOQ", value: "50 pcs / color" },
        { label: "Lead Time", value: "10 – 14 days" },
        { label: "Print Options", value: "Embroidery, Screen" },
      ],
      types: [
        "Classic Pique",
        "Dry-Fit Polo",
        "Long Sleeve",
        "Women's Fitted",
        "Contrast Collar",
      ],
      reviews: [
        {
          name: "Vikram N.",
          location: "Coimbatore",
          stars: 5,
          text: "Ordered 1000 pcs for our corporate client. Perfect embroidery placement.",
        },
        {
          name: "Sara J.",
          location: "Dubai",
          stars: 4,
          text: "Great pique texture, holds shape well after multiple washes.",
        },
      ],
      images: [
        ImgHelper.category.PoloShirts,
        ImgHelper.category.PoloShirts,
        ImgHelper.category.PoloShirts,
        ImgHelper.category.PoloShirts,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.nightwear,
    name: "Nightwear",
    sub: "Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
    link: "/",
    detail: {
      tagline: "Sleep in something beautiful.",
      description:
        "Silky-smooth modal and cotton-modal blend nightwear sets. Relaxed silhouettes, delicate prints, elastic waistbands — designed for comfort and export markets.",
      specs: [
        { label: "Fabric", value: "Modal / Cotton-Modal" },
        { label: "GSM", value: "130 – 160 GSM" },
        { label: "Sizes", value: "XS – 3XL" },
        { label: "MOQ", value: "50 pcs / style" },
        { label: "Lead Time", value: "10 – 14 days" },
        { label: "Print Options", value: "All-over print, Screen" },
      ],
      types: [
        "Short Sets",
        "Long Sets",
        "Nightgowns",
        "Robes",
        "Spaghetti Sets",
      ],
      reviews: [
        {
          name: "Anita K.",
          location: "Tiruppur",
          stars: 5,
          text: "Modal fabric is incredibly smooth. Customers love the drape.",
        },
        {
          name: "Fiona B.",
          location: "Australia",
          stars: 5,
          text: "Exactly what our sleepwear brand needed. Consistent sizing.",
        },
      ],
      images: [
        ImgHelper.category.nightwear,
        ImgHelper.category.nightwear,
        ImgHelper.category.nightwear,
        ImgHelper.category.nightwear,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.sizes,
    name: "7XL Sizes",
    sub: "Men's & Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
    link: "/",
    detail: {
      tagline: "Every size. No compromise.",
      description:
        "True-to-size extended range from XS to 7XL. Same fabric quality, same construction — just bigger. Perfect for inclusive brands and plus-size markets.",
      specs: [
        { label: "Fabric", value: "Cotton / Cotton-Poly blend" },
        { label: "GSM", value: "160 – 240 GSM" },
        { label: "Sizes", value: "XS – 7XL" },
        { label: "MOQ", value: "50 pcs / size" },
        { label: "Lead Time", value: "10 – 15 days" },
        { label: "Print Options", value: "Screen, DTG, Embroidery" },
      ],
      types: ["T-Shirts", "Polos", "Hoodies", "Joggers", "Oversized Tees"],
      reviews: [
        {
          name: "Ravi S.",
          location: "Surat",
          stars: 5,
          text: "Finally a manufacturer that gets plus-size right. Measurements spot on.",
        },
        {
          name: "Tom H.",
          location: "Canada",
          stars: 5,
          text: "6XL and 7XL available in same quality — rare to find. Excellent.",
        },
      ],
      images: [
        ImgHelper.category.sizes,
        ImgHelper.category.sizes,
        ImgHelper.category.sizes,
        ImgHelper.category.sizes,
      ],
      whatsapp: "918675450005",
    },
  },
  {
    img: ImgHelper.category.Sleeves,
    name: "Sleeves",
    sub: "Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
    link: "/",
    detail: {
      tagline: "Silhouettes that move with you.",
      description:
        "From balloon to bishop, flutter to bell — our sleeve-detail women's tops are a specialty. Woven and knit options, ideal for fashion-forward export brands.",
      specs: [
        { label: "Fabric", value: "Rayon / Cotton / Chiffon" },
        { label: "GSM", value: "120 – 160 GSM" },
        { label: "Sizes", value: "XS – 3XL" },
        { label: "MOQ", value: "50 pcs / style" },
        { label: "Lead Time", value: "12 – 16 days" },
        { label: "Print Options", value: "All-over, Block, Screen" },
      ],
      types: [
        "Balloon Sleeve",
        "Bishop Sleeve",
        "Flutter Sleeve",
        "Bell Sleeve",
        "Puff Sleeve",
        "Cape Sleeve",
      ],
      reviews: [
        {
          name: "Meera T.",
          location: "Jaipur",
          stars: 5,
          text: "The puff sleeve tops are a bestseller for us. Great stitch quality.",
        },
        {
          name: "Claire D.",
          location: "France",
          stars: 4,
          text: "Beautiful drape on the rayon. Exactly as the sample.",
        },
      ],
      images: [
        ImgHelper.category.Sleeves,
        ImgHelper.category.Sleeves,
        ImgHelper.category.Sleeves,
        ImgHelper.category.Sleeves,
      ],
      whatsapp: "918675450005",
    },
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-3 h-3 ${s <= count ? "text-[#F5C800]" : "text-neutral-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

function CategoryModal({
  category,
  onClose,
}: {
  category: (typeof categories)[0];
  onClose: () => void;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const d = category.detail;

  const waMessage = encodeURIComponent(
    `Hi! I'm interested in ordering *${category.name}*. Can you share more details?`,
  );
  const waLink = `https://wa.me/${d.whatsapp}?text=${waMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white w-full max-w-[900px] max-h-[92vh] rounded-t-[28px] sm:rounded-[24px] overflow-y-auto z-10 scroll-hidden animate-[modalUp_0.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/8 hover:bg-black/14 flex items-center justify-center transition-colors"
        >
          <svg
            className="w-4 h-4 text-neutral-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — images */}
          <div className="p-5 flex flex-col gap-3">
            <div className="relative w-full aspect-[4/4.5] rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src={d.images[activeImg]}
                alt={category.name}
                fill
                style={{ objectFit: "cover" }}
                className="transition-opacity duration-300"
              />
              {/* Category badge */}
              <span className="absolute top-3 left-3 bg-[#F8E22A] text-[#111] text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-sm">
                {category.name}
              </span>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {d.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    activeImg === i
                      ? "border-[#F5C800] scale-[1.03]"
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — details */}
          <div className="p-6 flex flex-col gap-5 overflow-y-auto scroll-hidden">
            {/* Header */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B08000] mb-1">
                {category.sub}
              </p>
              <h2
                className="text-[2.1rem] font-black text-[#111] leading-tight mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {category.name}
              </h2>
              <p className="text-[13px] text-neutral-500 italic">{d.tagline}</p>
            </div>

            <p className="text-[13.5px] text-neutral-600 leading-relaxed">
              {d.description}
            </p>

            {/* Specs */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2.5">
                Specifications
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-0 border border-neutral-100 rounded-2xl overflow-hidden">
                {d.specs.map((s, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 flex flex-col ${
                      i % 2 === 0 ? "border-r border-neutral-100" : ""
                    } ${i < d.specs.length - 2 ? "border-b border-neutral-100" : ""}`}
                  >
                    <span className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider mb-0.5">
                      {s.label}
                    </span>
                    <span className="text-[13px] font-semibold text-[#111]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Types */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2.5">
                Available Styles
              </p>
              <div className="flex flex-wrap gap-2">
                {d.types.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] font-medium text-[#111] bg-[#FDF6D8] border border-[#F0D860]/50 rounded-full px-3.5 py-1.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-2.5">
                Buyer Reviews
              </p>
              <div className="flex flex-col gap-2.5">
                {d.reviews.map((r, i) => (
                  <div
                    key={i}
                    className="bg-neutral-50 rounded-2xl px-4 py-3.5"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div>
                        <span className="text-[13px] font-semibold text-[#111]">
                          {r.name}
                        </span>
                        <span className="text-[11px] text-neutral-400 ml-2">
                          {r.location}
                        </span>
                      </div>
                      <StarRating count={r.stars} />
                    </div>
                    <p className="text-[12.5px] text-neutral-500 leading-relaxed">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] active:scale-[0.98] text-white font-bold text-[15px] rounded-2xl py-4 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Categories() {
  const loopCategories = [...categories, ...categories];
  const [selected, setSelected] = useState<(typeof categories)[0] | null>(null);

  return (
    <div className="bg-[#F5F5F5]" id="collections">
      <div className="max-w-[1380px] mx-auto px-14 py-[100px] max-[900px]:px-10 max-[900px]:py-[60px] max-[600px]:px-6 max-[600px]:py-14">
        <div className="rv">
          <span className="inline-block bg-[#F8E22A] text-[#111111] text-[0.6rem] font-bold tracking-[0.22em] uppercase px-[14px] py-[6px] rounded-sm mb-4">
            Browse Range
          </span>
          <h2 className="font-poppins font-bold text-[#111111] leading-[1.1] mb-4 text-[clamp(2.4rem,3.8vw,3.8rem)]">
            Garment Categories
          </h2>
        </div>

        {/* Slider */}
        <div className="w-full overflow-hidden relative mt-12 group">
          <div className="flex gap-5 w-max animate-autoScroll group-hover:[animation-play-state:paused]">
            {loopCategories.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelected(c)}
                className="text-left focus:outline-none"
              >
                <div className="rv relative overflow-hidden rounded-[20px] min-w-[260px] w-[260px] h-[320px] shrink-0 cursor-pointer group/card">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover/card:scale-[1.06]"
                    style={{ background: c.bg }}
                  >
                    <Image
                      src={c.img}
                      alt={c.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-[linear-gradient(to_top,rgba(0,0,0,0.65)_0%,transparent_55%)]">
                    <div className="font-poppins text-[1.35rem] font-bold text-white">
                      {c.name}
                    </div>
                    <div className="text-[0.62rem] text-white/60 tracking-[0.08em] mt-[2px]">
                      {c.sub}
                    </div>
                  </div>
                  {/* Hover pill */}
                  <div className="absolute top-4 right-4 bg-[#F8E22A] text-[#111] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-200">
                    View Details
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <CategoryModal category={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
