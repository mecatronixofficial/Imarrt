const strengths = [
  { num:'01', stroke:'#F5C800', iconBg:'rgba(245,200,0,.15)',
    title:'Tirupur heritage', stat:'Since 1995',
    text:"From Rayapuram, Tirupur — India's knitwear capital. Deep supply chains and decades of export expertise.",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
  { num:'02', stroke:'#111', iconBg:'var(--LG)',
    title:'Custom label ready', stat:'Private label',
    text:'Custom labels, hang tags, packaging & private branding — your brand, our craft.',
    icon: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></> },
  { num:'03', stroke:'#F5C800', iconBg:'rgba(245,200,0,.15)',
    title:'Export quality', stat:'Multi-stage QC',
    text:'Multi-stage QC on every order. Consistent, export-grade standards regardless of order size.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
  { num:'04', stroke:'#111', iconBg:'var(--LG)',
    title:'Global reach', stat:'35+ countries',
    text:'Supplying 35+ countries across Europe, Americas, Middle East & Asia Pacific.',
    icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></> },
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
              <div className="s-icon" style={{ background: s.iconBg }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke={s.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </div>
              <div className="s-ttl">{s.title}</div>
              <div className="s-txt">{s.text}</div>
              <span className="s-stat">{s.stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}