/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./helper/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Y: "#F8E22A",
        Yd: "#D4A800",
        Yp: "#FFF8D6",
        B: "#111111",
        Bs: "#1E1E1E",
        G: "#2B7A2B",
        W: "#FFFFFF",
        Gr: "#666666",
        LG: "#F5F5F5",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        dancing: ["var(--font-dancing)", "cursive"],
      },
      maxWidth: {
        container: "1380px",
      },
      keyframes: {
        fup: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "none" },
        },
        mq: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        autoScroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        imgReveal: {
          from: { opacity: "0", transform: "translateY(18px) scale(0.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        floatIn: {
          from: { opacity: "0", transform: "translateY(12px) scale(0.95)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-14px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        autoScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        modalUp: {
          from: { opacity: "0", transform: "translateY(40px) scale(0.97)" },
          to: { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        mq: "mq 80s linear infinite",
        autoScroll: "autoScroll 28s linear infinite",
        imgReveal: "imgReveal 0.9s 0.1s forwards cubic-bezier(0.22,1,0.36,1)",
        floatIn: "floatIn 0.7s forwards cubic-bezier(0.22,1,0.36,1)",
        slideIn: "slideIn 0.6s forwards cubic-bezier(0.22,1,0.36,1)",
        autoScroll: "autoScroll 30s linear infinite",
        modalUp: "modalUp 0.4s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
