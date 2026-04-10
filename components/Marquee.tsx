const items = [
  'Readymade Garments',
  'Knit & Woven',
  'Infants · Children · Adults',
  'Custom Labels & Private Branding',
  'Export Quality Standards',
  'Bulk & Wholesale Supply',
  'Uniform Manufacturing',
  'Customized Orders Accepted',
  'Branded & Unbranded Stocklots',
  'Surplus Stock Deals',
  'Competitive Pricing',
  'Global Export Support',
  'Tirupur · Tamil Nadu',
  'www.imarrt.com',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="mq-wrap">
      <div className="mq-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="mq-item">{item}</span>
            <span className="mq-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
