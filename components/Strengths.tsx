const strengths = [
  {
    num: '01',
    icon: '🏙️',
    title: 'Tirupur Heritage',
    text: "From Rayapuram, Tirupur — India's knitwear capital. Deep supply chains and decades of export expertise.",
  },
  {
    num: '02',
    icon: '🏷️',
    title: 'Custom Label Ready',
    text: 'Manufacture as per your exact specs. Custom labels, hang tags, packaging & private branding — your brand, our craft.',
  },
  {
    num: '03',
    icon: '✅',
    title: 'Export Quality',
    text: 'Multi-stage QC on every order. Consistent, export-grade standards regardless of order size.',
  },
  {
    num: '04',
    icon: '🌍',
    title: 'Global Reach',
    text: 'Supplying 35+ countries across Europe, Americas, Middle East & Asia Pacific with reliable, on-time delivery.',
  },
];

export default function Strengths() {
  return (
    <div className="st-wrap" id="strengths">
      <div className="st-inner">
        <div className="rv" style={{ textAlign: 'center' }}>
          <span className="sec-lbl" style={{ background: 'var(--B)', color: 'var(--Y)' }}>
            Why Choose iMarrt
          </span>
          <h2 className="sec-title">Our Strengths</h2>
        </div>

        <div className="st-grid">
          {strengths.map((s, i) => (
            <div className="s-card rv" key={i}>
              <div className="s-num">{s.num}</div>
              <div className="s-icon">{s.icon}</div>
              <div className="s-ttl">{s.title}</div>
              <div className="s-txt">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
