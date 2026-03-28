const items = [
  'Readymade Garments',
  'Knit & Woven',
  'Infants · Children · Adults',
  'Custom Labels',
  'Export Quality',
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
