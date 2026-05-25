import IconHelper from "@/helper/icon_helper";
import ImgHelper from "@/helper/img_helper";
import { Socialmedia } from "@/helper/Socialmedia";
import Image from "next/image";
import Link from "next/link";

const products = [
  "Adults Garments",
  "Children's Wear",
  "Infants Wear",
  "Custom Orders",
  "Private Label",
];
const company = [
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Why iMarrt", href: "#strengths" },
  { label: "Our Brand", href: "#ourbrand" },
  { label: "Our collections", href: "#collections" },
  { label: "Contact", href: "#contact" },
];
const contact = [
  {
    ico: IconHelper.contact.call,
    label: "+91 86754 50005",
    label2: "+91 9965510005",
    href: "tel:+918675450005",
    href2: "tel:+919965510005",
  },
  {
    ico: IconHelper.contact.mail,
    label: "info@imarrt.com",
    label2: "sales@imarrt.com",
    href: "mailto:info@imarrt.com",
    href2: "mailto:sales@imarrt.com",
  },
  {
    ico: IconHelper.contact.openbox,
    label: "www.imarrt.com",
    href: "http://www.imarrt.com",
  },
  {
    ico: IconHelper.contact.location,
    label: "Tirupur – 641 001",
    href: "https://maps.app.goo.gl/MxhjV3xTvFSHckwU6",
  },
];

export default function Footer() {
  return (
    <>
      <footer
        className="
          bg-[#111111] text-white/[0.42]
          pt-16 px-14 pb-0
          max-[900px]:px-10 max-[900px]:pt-[52px]
          max-[600px]:px-6 max-[600px]:pt-12
        "
      >
        <div
          className="
            grid grid-cols-[2fr_1fr_1fr_1fr] gap-[52px]
            max-w-[1380px] mx-auto pb-12
            border-b border-white/[0.07]
            max-[900px]:grid-cols-2 max-[900px]:gap-8
            max-[600px]:grid-cols-1 max-[600px]:gap-8
          "
        >
          {/* Brand */}
          <div>
            <Link href="#top">
              <div className="bg-[#F8E22A] px-[10px] py-[6px] rounded-md inline-block hover:scale-105 transition-transform duration-300">
                <Image
                  src={ImgHelper.logo.main}
                  alt="logo"
                  className="block w-[100px] h-auto"
                  width={120}
                  height={40}
                  priority
                />
              </div>
            </Link>

            <p className="text-[0.78rem] leading-[1.85] mb-5 text-white mt-2">
              Premium readymade garments from the heart of Tirupur. Trusted by
              brands across 35+ countries for quality, reliability, and
              craftsmanship.
            </p>
            <span
              className="
                inline-flex items-center gap-[7px]
                text-[0.65rem] text-[whitesmoke]
                px-3 py-[5px]
                border border-white/[0.08] rounded-[20px]
              "
            >
              <span className="w-[6px] h-[6px] rounded-full bg-[#F8E22A] shrink-0" />
              Tirupur, Tamil Nadu — India&apos;s Knitwear Capital
            </span>
            <div className="mt-auto py-5">
              <Socialmedia />
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-[0.7rem] font-black tracking-[0.18em] uppercase text-white/[0.38] mb-[18px]">
              Products
            </div>
            <ul className="list-none p-0 m-0">
              {products.map((p, i) => (
                <li
                  key={i}
                  className="mb-[10px] flex items-center gap-[9px]"
                >
                  <Link
                    href="#"
                    className="no-underline text-[0.78rem] text-[whitesmoke] transition-colors duration-[220ms] hover:text-[#F8E22A]"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[0.7rem] font-black tracking-[0.18em] uppercase text-white/[0.38] mb-[18px]">
              Company
            </div>
            <ul className="list-none p-0 m-0">
              {company.map((c, i) => (
                <li
                  key={i}
                  className="mb-[10px] flex items-center gap-[9px]"
                >
                  <Link
                    href={c.href}
                    className="no-underline text-[0.78rem] text-[whitesmoke] transition-colors duration-[220ms] hover:text-[#F8E22A]"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[0.7rem] font-black tracking-[0.18em] uppercase text-white/[0.38] mb-[18px]">
              Contact
            </div>
            <ul className="list-none p-0 m-0">
              {contact.map((c, i) => {
                const Icon = c.ico;
                return (
                  <li
                    key={i}
                    className="mb-[10px] flex items-center gap-[9px]"
                  >
                    <span
                      className="
                        w-7 h-7 rounded-md
                        bg-[rgba(245,200,0,0.1)]
                        flex items-center justify-center shrink-0
                      "
                    >
                      <Icon size={13} color="#F8E22A" />
                    </span>
                    <div className="flex flex-col items-center justify-start gap-[2px]">
                      <a
                        href={c.href}
                        className="no-underline text-[0.78rem] text-[whitesmoke] transition-colors duration-[220ms] hover:text-[#F8E22A]"
                      >
                        {c.label}
                      </a>
                      <a
                        href={c.href2}
                        className="no-underline text-[0.78rem] text-[whitesmoke] transition-colors duration-[220ms] hover:text-[#F8E22A]"
                      >
                        {c.label2}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="
            flex justify-between items-center
            max-w-[1380px] mx-auto pt-[22px] pb-7
            text-[0.68rem] flex-wrap gap-2
            max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[6px]
          "
        >
          <span>© 2026 iMarrt. All rights reserved.</span>

          <span className="flex items-center gap-[6px]">
            Built by{" "}
            <Link
              href="https://www.mecatronix.one"
              target="_blank"
              className="group"
            >
              <span className="font-dancing inline-flex items-center gap-[6px]">
                <Image
                  src={ImgHelper.mecatronix.mecalogo}
                  alt="Mecatronix"
                  width={20}
                  height={20}
                />
                <span>
                  <span className="text-[#F8E22A] font-bold transition-colors duration-300 group-hover:text-white">
                    Meca
                  </span>
                  <span className="text-[#F8E22A] font-bold transition-colors duration-300 group-hover:text-red-600">
                    tronix
                  </span>
                </span>
              </span>
            </Link>
          </span>
        </div>
      </footer>

      {/* ── CTA strip ── */}
      <div
        className="
          bg-[#F8E22A] px-14 py-[18px]
          max-[900px]:px-10 max-[900px]:py-4
          max-[600px]:px-6 max-[600px]:py-4
        "
      >
        <div
          className="
            max-w-[1380px] mx-auto
            flex justify-between items-center flex-wrap gap-3
          "
        >
          <span className="text-[0.85rem] font-bold text-[#111111]">
            Ready to place a bulk order? Let&apos;s talk.
          </span>
          <Link
            href="#contact"
            className="
              bg-[#111111] text-[#F8E22A]
              text-[0.65rem] font-bold tracking-[0.13em] uppercase
              px-[22px] py-[10px] rounded-[4px]
              no-underline whitespace-nowrap
              transition-colors duration-[250ms] hover:bg-[#333]
            "
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </>
  );
}
