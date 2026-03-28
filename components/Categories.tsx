const categories = [
  { name: 'T-Shirts',    sub: 'All genders & ages',    bg: 'linear-gradient(160deg,#F5C800,#B08000)' },
  { name: 'Sweatshirts', sub: 'Hoodies & crewnecks',   bg: 'linear-gradient(160deg,#222,#444)' },
  { name: 'Kids Wear',   sub: '0–14 years',            bg: 'linear-gradient(160deg,#FDE24A,#887800)' },
  { name: 'Infants',     sub: 'Newborn to 24m',        bg: 'linear-gradient(160deg,#333,#111)' },
  { name: 'Polo Shirts', sub: "Men's & Women's",       bg: 'linear-gradient(160deg,#F5C800,#A07800)' },
];

export default function Categories() {
  return (
    <div className="ct-wrap">
      <div className="ct-inner">
        <div className="rv">
          <span className="sec-lbl">Browse Range</span>
          <h2 className="sec-title">Garment Categories</h2>
        </div>

        <div className="ct-grid">
          {categories.map((c, i) => (
            <div className="ct-card rv" key={i}>
              <div className="ct-bg" style={{ background: c.bg, position: 'absolute', inset: 0 }} />
              <div className="ct-ov">
                <div className="ct-name">{c.name}</div>
                <div className="ct-sub">{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
