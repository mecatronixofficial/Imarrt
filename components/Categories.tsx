import ImgHelper from "@/helper/img_helper";
import Image from "next/image";

const categories = [
  {
    img: ImgHelper.category.TShirts,
    name: "T-Shirts",
    sub: "All genders & ages",
    bg: "linear-gradient(160deg,#F5C800,#B08000)",
  },
  {
    img: ImgHelper.category.Sweatshirts,
    name: "Wintershirts",
    sub: "Hoodies & crewnecks",
    bg: "linear-gradient(160deg,#222,#444)",
  },
  {
    img: ImgHelper.category.KidsWear,
    name: "Kids Wear",
    sub: "0–14 years",
    bg: "linear-gradient(160deg,#FDE24A,#887800)",
  },
  {
    img: ImgHelper.category.Infants,
    name: "Infants",
    sub: "Newborn to 24m",
    bg: "linear-gradient(160deg,#333,#111)",
  },
  {
    img: ImgHelper.category.PoloShirts,
    name: "Polo Shirts",
    sub: "Men's & Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
  },
  {
    img: ImgHelper.category.nightwear,
    name: "Nightwear",
    sub: "Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
  },
  {
    img: ImgHelper.category.sizes,
    name: "7xl Sizes",
    sub: "Men's & Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
  },
  {
    img: ImgHelper.category.Sleeves,
    name: "Sleeves",
    sub: "Women's",
    bg: "linear-gradient(160deg,#F5C800,#A07800)",
  },
];

export default function Categories() {
  const loopCategories = [...categories, ...categories];

  return (
    <div className="ct-wrap" id="collections">
      <div className="ct-inner">
        <div className="rv">
          <span className="sec-lbl">Browse Range</span>
          <h2 className="sec-title">Garment Categories</h2>
        </div>

        <div className="ct-slider">
          <div className="ct-track">
            {loopCategories.map((c, i) => (
              <div className="ct-card rv" key={i}>
                <div
                  className="ct-bg"
                  style={{
                    background: c.bg,
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="ct-ov">
                  <div className="ct-name">{c.name}</div>
                  <div className="ct-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}