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
      <footer>
        <div className="ft-top">
          {/* Brand */}
          <div>
            <Link href="#top">
              <div className="f-logobg">
                <Image
                  src={ImgHelper.logo.main}
                  alt="logo"
                  className="f-logo"
                  width={120}
                  height={40}
                  priority
                />
              </div>
            </Link>

            <p className="ft-desc">
              Premium readymade garments from the heart of Tirupur. Trusted by
              brands across 35+ countries for quality, reliability, and
              craftsmanship.
            </p>
            <span className="ft-loc">
              <span className="ft-dot" />
              Tirupur, Tamil Nadu — India&apos;s Knitwear Capital
            </span>
            <div className="footer">
              <Socialmedia />
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="ft-cht">Products</div>
            <ul className="ft-ul">
              {products.map((p, i) => (
                <li key={i}>
                  <Link href="#">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="ft-cht">Company</div>
            <ul className="ft-ul">
              {company.map((c, i) => (
                <li key={i}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="ft-cht">Contact</div>
            <ul className="ft-ul">
              {contact.map((c, i) => {
                const Icon = c.ico;
                return (
                  <li key={i}>
                    <span className="ft-ico">
                      <Icon size={13} color="var(--Y)" />
                    </span>
                    <div className="li-dic">
                      <a href={c.href}>{c.label}</a>
                      <a href={c.href2}>{c.label2}</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="ft-btm">
          <span>© 2026 iMarrt. All rights reserved.</span>

          <span className="ft-made">
            Built by{" "}
            <Link
              href="https://www.mecatronix.one"
              target="_blank"
              className="ft-link"
            >
              <span className="ft-brand">
                {/* Logo */}
                <Image
                  src={ImgHelper.mecatronix.mecalogo}
                  alt="Mecatronix"
                  width={20}
                  height={20}
                  className="ft-logo"
                />

                {/* Text */}
                <span>
                  <span className="meca">Meca</span>
                  <span className="tronix">tronix</span>
                </span>
              </span>
            </Link>
          </span>
        </div>
      </footer>
      {/* ── CTA strip ── */}
      {/* <div className="ft-strip">
        <div className="ft-strip-inner">
          <span className="ft-strip-txt">
            Ready to place a bulk order? Let&apos;s talk.
          </span>
          <Link href="#contact" className="ft-strip-btn">
            Get a Quote →
          </Link>
        </div>
      </div> */}
    </>
  );
}
