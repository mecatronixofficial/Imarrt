import Link from 'next/link';

const products = [
  {
    imgClass: 't1',
    emoji: '👕',
    category: 'Flagship · All Genders',
    name: "Adults Garments",
    desc: 'T-shirts, polos, sweatshirts, hoodies & activewear in premium cotton blends. Bulk export and private label orders welcome.',
  },
  {
    imgClass: 't2',
    emoji: '🧒',
    category: 'Kids · 2–14 Years',
    name: "Children's Wear",
    desc: 'Bright, durable, and comfortable garments for toddlers to teens in export-grade fabric.',
  },
  {
    imgClass: 't3',
    emoji: '🍼',
    category: 'Newborn · 0–24 Months',
    name: "Infants' Wear",
    desc: 'Hypoallergenic, soft-touch fabrics. Rompers, bodysuits & sets for the tiniest wearers.',
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
          <Link href="#contact" className="btn-b">Request Catalogue →</Link>
        </div>

        <div className="pr-grid">
          {products.map((p, i) => (
            <div className="pc rv" key={i}>
              <div className={`pc-img ${p.imgClass}`}>{p.emoji}</div>
              <div className="pc-body">
                <div className="pc-cat">{p.category}</div>
                <div className="pc-name">{p.name}</div>
                <div className="pc-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
