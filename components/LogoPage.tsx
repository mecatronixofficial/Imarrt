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
    desc: "Elegant women's fashion branding designed for modern trends.",
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
    <section
      id="ourbrand"
      className="
        relative overflow-hidden px-5 py-[100px]
        max-[640px]:px-4 max-[640px]:py-20
      "
      style={{
        background:
          "radial-gradient(circle at top left, rgba(245,200,0,0.08), transparent 30%), linear-gradient(135deg,#07111f 0%,#0b1e3d 50%,#08162a 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        aria-hidden
        className="
          absolute rounded-full pointer-events-none
          w-[260px] h-[260px] top-10 -left-[60px]
          opacity-[0.18] blur-[70px] bg-[#f5c800]
        "
      />
      <div
        aria-hidden
        className="
          absolute rounded-full pointer-events-none
          w-[320px] h-[320px] -bottom-[100px] -right-[80px]
          opacity-[0.18] blur-[70px] bg-[#f5c800]
        "
      />

      <div className="max-w-[1320px] mx-auto relative z-[2]">
        <div className="text-center max-w-[860px] mx-auto mb-[60px]">
          <span
            className="
              inline-block bg-[#F8E22A] text-[#111111]
              text-[0.6rem] font-bold tracking-[0.22em] uppercase
              px-[14px] py-[6px] rounded-sm mb-4
            "
          >
            Our Brand Portfolio
          </span>
          <h1
            className="
              font-poppins font-bold text-[#F8E22A] leading-[1.1] mb-4
              text-[clamp(2.4rem,3.8vw,3.8rem)]
            "
          >
            Logos That Define Our Product Identity
          </h1>
          <p
            className="
              text-base leading-[1.8] text-white/75
              max-w-[720px] mx-auto
              max-[640px]:text-[0.88rem]
            "
          >
            Discover our curated brand lineup across menswear, womenswear,
            nightwear, kidswear, and corporate textile identity.
          </p>
        </div>

        <div
          className="
            grid grid-cols-3 gap-[26px]
            max-[1100px]:grid-cols-2
            max-[640px]:grid-cols-1 max-[640px]:gap-[18px]
          "
        >
          {logos.map((item, index) => (
            <div
              key={index}
              className="
                relative rounded-[20px] overflow-hidden backdrop-blur-[10px]
                border border-white/[0.08]
                min-h-[360px] max-[640px]:min-h-[auto]
                transition-[transform,border-color,box-shadow] duration-[350ms] ease
                hover:-translate-y-[10px]
                hover:border-[rgba(245,200,0,0.45)]
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.28)]
                group
              "
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.25), rgba(255,255,255,0.18))",
              }}
            >
              {/* ::before gradient overlay */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(245,200,0,0.08), transparent 35%, transparent 65%, rgba(245,200,0,0.04))",
                }}
              />

              <div className="flex justify-between items-center pt-[22px] px-[22px] pb-0 relative">
                <span className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-white/60">
                  {item.category}
                </span>
                <span
                  className="
                    text-[0.9rem] font-bold text-[#f5c800]
                    bg-[rgba(245,200,0,0.08)]
                    border border-[rgba(245,200,0,0.2)]
                    px-[10px] py-[6px] rounded-full
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div
                className="
                  relative min-h-[180px] max-[640px]:min-h-[160px]
                  flex items-center justify-center p-6
                "
              >
                {/* radial yellow glow behind logo */}
                <div
                  aria-hidden
                  className="absolute w-[180px] h-[180px] rounded-full blur-[8px] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(245,200,0,0.14), transparent 70%)",
                  }}
                />
                <Image
                  src={item.img}
                  alt={item.name}
                  width={220}
                  height={120}
                  className="
                    relative z-[2] max-w-full h-auto object-contain
                    transition-transform duration-[400ms] ease
                    rounded-xl
                    group-hover:scale-[1.06]
                  "
                />
              </div>

              <div className="px-[22px] pb-6 pt-0 text-center relative">
                <h3
                  className="
                    font-poppins font-bold text-[#F8E22A] leading-[1.1] mb-[10px]
                    text-[1.7rem]
                  "
                >
                  {item.name}
                </h3>
                <p
                  className="
                    text-[0.92rem] leading-[1.75] text-white/[0.78] mb-[18px]
                    max-[640px]:text-[0.88rem]
                  "
                >
                  {item.desc}
                </p>

                <div>
                  <a
                    href="#products"
                    className="
                      inline-block border-0 outline-none cursor-pointer
                      text-[#111] text-[0.88rem] font-bold
                      px-5 py-[11px] rounded-full
                      no-underline
                      transition-[transform,box-shadow] duration-300 ease
                      hover:-translate-y-[2px]
                      hover:shadow-[0_14px_28px_rgba(245,200,0,0.22)]
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,#f5c800,#b08000)",
                    }}
                  >
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
