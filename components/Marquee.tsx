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
    <div className="bg-[#111111] py-[15px] overflow-hidden">
      <div className="inline-block whitespace-nowrap animate-mq">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="inline-block text-[0.68rem] font-bold tracking-[0.22em] uppercase text-[#F8E22A] mx-7">
              {item}
            </span>
            <span className="text-[rgba(245,200,0,0.35)] mx-[6px] inline-block">
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
