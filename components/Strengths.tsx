const strengths = [
  {
    num: "01",
    stroke: "#F5C800",
    iconBg: "rgba(245,200,0,.15)",
    size: "24",
    title: "Tirupur heritage",
    stat: "Since 2009",
    text:
      " Our Mother Company Start in 1976 From Tirupur — India's knitwear capital. Deep supply chains and decades of export expertise.",
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    num: "02",
    stroke: "#111",
    iconBg: "var(--LG)",
    size: "24",
    title: "Custom label ready",
    stat: "Private label",
    text:
      "Custom labels, hang tags, packaging & private branding — your brand, our craft.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h6M9 15h4" />
      </>
    ),
  },
  {
    num: "03",
    stroke: "#F5C800",
    iconBg: "rgba(245,200,0,.15)",
    size: "24",
    title: "Export quality",
    stat: "Multi-stage QC",
    text:
      "Multi-stage QC on every order. Consistent, export-grade standards regardless of order size.",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
  {
    num: "04",
    stroke: "#111",
    iconBg: "var(--LG)",
    size: "24",
    title: "Scalable Production",
    stat: "Bulk Ready",
    text:
      "Efficient production planning and logistics ensure every order is delivered on schedule.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
  },
];

export default function Strengths() {
  return (
    <div className="bg-[#F8E22A]" id="strengths">
      <div
        className="
          max-w-[1380px] mx-auto px-14 py-[100px]
          max-[600px]:px-6 max-[600px]:py-14
        "
      >
        <div className="rv text-center">
          <span
            className="
              inline-block bg-[#111111] text-[#F8E22A]
              text-[0.6rem] font-bold tracking-[0.22em] uppercase
              px-[14px] py-[6px] rounded-sm mb-4
            "
          >
            Why Choose iMarrt
          </span>
          <h2
            className="
              font-poppins font-bold text-[#111111] leading-[1.1] mb-4
              text-[clamp(2.4rem,3.8vw,3.8rem)]
            "
          >
            Our Strengths
          </h2>
        </div>

        <div
          className="
            grid grid-cols-[1fr_2fr_1fr_2fr] gap-3 mt-[54px]
            max-[900px]:grid-cols-2
            max-[600px]:grid-cols-1
          "
        >
          {strengths.map((s, i) => {
            // nth-child(odd) → i % 2 === 0 (1st, 3rd = dark)
            const isOdd = i % 2 === 0;
            return (
              <div
                key={i}
                className={`
                  relative px-8 py-9 rounded-[10px] overflow-hidden rv
                  ${isOdd ? "bg-[#111111]" : "bg-white"}
                `}
              >
                {/* Big background number */}
                <div
                  className={`
                    font-dancing text-[86px] font-bold leading-none
                    absolute top-[14px] right-[22px] opacity-[0.06]
                    ${isOdd ? "text-white" : "text-[#111111]"}
                  `}
                >
                  {s.num}
                </div>

                {/* Icon box */}
                <div
                  className={`
                    w-[46px] h-[46px] rounded-[10px]
                    flex items-center justify-center mb-[18px]
                    ${isOdd ? "bg-[rgba(245,200,0,0.15)]" : "bg-[#F5F5F5]"}
                  `}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={s.stroke}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </div>

                <div
                  className={`
                    text-base font-bold mb-[9px] leading-[1.25]
                    ${isOdd ? "text-white" : "text-[#111111]"}
                  `}
                >
                  {s.title}
                </div>
                <div
                  className={`
                    text-[0.79rem] leading-[1.75]
                    ${isOdd ? "text-white/50" : "text-[#666666]"}
                  `}
                >
                  {s.text}
                </div>
                <span
                  className={`
                    inline-block mt-5 px-4 py-[6px] rounded-[20px]
                    text-[0.62rem] font-bold tracking-[0.07em] text-[#F8E22A]
                    ${isOdd ? "bg-[rgba(245,200,0,0.18)]" : "bg-[#111111]"}
                  `}
                >
                  {s.stat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
