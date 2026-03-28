import Link from 'next/link';

const products = ['Adults Garments', "Children's Wear", 'Infants Wear', 'Custom Orders', 'Private Label'];
const company  = [
  { label: 'About Us',    href: '#about' },
  { label: 'Our Process', href: '#process' },
  { label: 'Why iMarrt',  href: '#strengths' },
  { label: 'Contact',     href: '#contact' },
];
const contact = [
  { label: '+91 86754 50005', href: 'tel:+918675450005' },
  { label: 'info@imarrt.com', href: 'mailto:info@imarrt.com' },
  { label: 'www.imarrt.com',  href: 'http://www.imarrt.com' },
  { label: 'Tirupur – 641 001', href: '#' },
];

export default function Footer() {
  return (
    <footer>
      <div className="ft-top">
        <div>
          <span className="ft-logo">I-Marrt</span>
          <p className="ft-desc">
            Premium readymade garments from the heart of Tirupur. Trusted by brands across
            35+ countries for quality, reliability, and craftsmanship.
          </p>
          <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.25)' }}>
            Tirupur, Tamil Nadu — India&apos;s Knitwear Capital
          </p>
        </div>

        <div>
          <div className="ft-cht">Products</div>
          <ul className="ft-ul">
            {products.map((p, i) => <li key={i}><Link href="#">{p}</Link></li>)}
          </ul>
        </div>

        <div>
          <div className="ft-cht">Company</div>
          <ul className="ft-ul">
            {company.map((c, i) => <li key={i}><Link href={c.href}>{c.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <div className="ft-cht">Contact</div>
          <ul className="ft-ul">
            {contact.map((c, i) => <li key={i}><Link href={c.href}>{c.label}</Link></li>)}
          </ul>
        </div>
      </div>

      <div className="ft-btm">
        <span>© 2026 iMarrt. All rights reserved.</span>
        <span>Made with ✦ in <Link href="#">Tirupur, Tamil Nadu</Link></span>
      </div>
    </footer>
  );
}
