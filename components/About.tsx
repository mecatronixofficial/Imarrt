import ImgHelper from "@/helper/img_helper";
import Link from "next/dist/client/link";
import Image from "next/image";

const features = [
  "Manufacturer & Supplier of Uniforms and Readymade Garments",
  "Customized Orders(School, Corporate & Industrial Uniforms)",
  "Quality Garments with International Standards",
  "Branded & Unbranded Stocklots",
  "Knit & Woven Garments for All Age Groups",
  "Private Labeling & Custom Branding Accepted",
  "Bulk Orders with Competitive Pricing",
  "Located at Rayapuram, Tirupur — 641 601",
  "+91 86754 50005 · info@imarrt.com",
];

export default function About() {
  return (
    <div className="bg-[#F5F5F5]" id="about">
      <div
        className="
          max-w-[1380px] mx-auto grid grid-cols-2 gap-20 items-center
          px-14 py-[100px]
          max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:px-10 max-[900px]:py-[60px]
          max-[600px]:px-6 max-[600px]:py-14 max-[600px]:gap-8
        "
      >
        {/* Visual */}
        <div className="relative rv">
          <div
            className="
              bg-[#F8E22A] rounded-[10px] aspect-[4/5]
              flex items-center justify-center flex-col gap-4
              relative overflow-hidden
            "
          >
            {/* Striped overlay (was ::before) */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(-45deg, transparent, transparent 22px, rgba(0,0,0,.04) 22px, rgba(0,0,0,.04) 23px)",
              }}
            />
            <Image
              src={ImgHelper.Hero.Hero}
              alt="About banner"
              fill
              style={{ objectFit: "cover", opacity: 1 }}
            />
          </div>

          {/* Badge */}
          <div
            className="
              absolute -bottom-4 -right-4 w-[116px] h-[116px]
              bg-[#111111] rounded-full
              flex flex-col items-center justify-center text-[#F8E22A]
              shadow-[0_8px_28px_rgba(0,0,0,0.18)]
            "
          >
            <span className="font-poppins text-[2.2rem] font-bold leading-none">
              35+
            </span>
            <span className="text-[0.48rem] font-bold tracking-[0.12em] uppercase leading-[1.4] text-center">
              Dispatch
              <br />
              Countries
            </span>
          </div>

          {/* Info card (hidden ≤900px) */}
          <div
            className="
              absolute top-5 -right-7 bg-[#F8E22A] rounded-lg
              px-[10px] py-[5px] shadow-[0_6px_28px_rgba(0,0,0,0.1)]
              text-[0.74rem]
              max-[900px]:hidden
            "
          >
            <Link href="#top">
              <Image
                src={ImgHelper.logo.main}
                alt="logo"
                width={120}
                height={90}
                priority
              />
            </Link>
          </div>
        </div>

        {/* Text */}
        <div className="rv">
          <span
            className="
              inline-block bg-[#F8E22A] text-[#111111]
              text-[0.6rem] font-bold tracking-[0.22em] uppercase
              px-[14px] py-[6px] rounded-sm mb-4
            "
          >
            Who We Are
          </span>
          <h2
            className="
              font-poppins font-bold text-[#111111] leading-[1.1] mb-4
              text-[clamp(2.4rem,3.8vw,3.8rem)]
            "
          >
            Born in India&apos;s
            <br />
            Knitwear Capital
          </h2>
          <p className="text-[0.87rem] leading-[1.9] text-[#666666]">
            iMarrt is located at Rayapuram, Tirupur — the city that drives 54%
            of India&apos;s entire textile exports. We are a dedicated retailer,
            exporter, and supplier of premium readymade garments serving brands
            and buyers worldwide.
          </p>
          <p className="text-[0.87rem] leading-[1.9] text-[#666666] mt-[14px]">
            Every garment is crafted to exact buyer specifications, with custom
            labels, packaging, and private branding available. From newborn
            rompers to adult fashion — quality is our non-negotiable standard.
          </p>

          <ul className="list-none mt-[26px]">
            {features.map((f, i) => (
              <li
                key={i}
                className="
                  flex items-start gap-3 py-3
                  border-b border-[#E5E5E5]
                  text-[0.83rem] text-[#666666] leading-[1.6]
                "
              >
                <span
                  aria-hidden
                  className="text-[#D4A800] text-[0.55rem] mt-1 shrink-0"
                >
                  ▶
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
