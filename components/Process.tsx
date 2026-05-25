import ImgHelper from "@/helper/img_helper";
import Image from "next/image";

const steps = [
  {
    num: "1",
    title: "Enquiry & Brief",
    text: "Share your style, fabric, quantity & timeline. We consult and advise.",
    img: ImgHelper.Process.enquiey,
  },
  {
    num: "2",
    title: "Sampling",
    text: "We create samples to your spec. Your approval before bulk production.",
    img: ImgHelper.Process.Sampling,
  },
  {
    num: "3",
    title: "Production",
    text: "Full-scale manufacturing with strict quality control at every stage.",
    img: ImgHelper.Process.production,
  },
  {
    num: "4",
    title: "On Time Delivery",
    text: "Packed, documented, dispatched. We handle all export formalities.",
    img: ImgHelper.Process.delivery,
  },
];

export default function Process() {
  return (
    <div className="bg-[#111111] font-bold" id="process">
      <div
        className="
          max-w-[1380px] mx-auto px-14 py-[100px]
          max-[900px]:px-10 max-[900px]:py-[60px]
          max-[600px]:px-6 max-[600px]:py-14
        "
      >
        <div className="rv text-center">
          <span
            className="
              inline-block bg-[#F8E22A] text-[#111111]
              text-[0.6rem] font-bold tracking-[0.22em] uppercase
              px-[14px] py-[6px] rounded-sm mb-4
            "
          >
            How It Works
          </span>
          <h2
            className="
              font-poppins font-bold leading-[1.1] mb-4 text-[#F8E22A]
              text-[clamp(2.4rem,3.8vw,3.8rem)]
            "
          >
            Enquiry to Doorstep
          </h2>
        </div>

        <div
          className="
            grid grid-cols-4 gap-0 mt-[58px] relative
            max-[900px]:grid-cols-2
            max-[600px]:grid-cols-1
          "
        >
          {/* Dashed connector line — hidden on tablet down */}
          <div
            aria-hidden
            className="
              absolute top-[100px] left-[12.5%] right-[12.5%] h-[2px]
              max-[900px]:hidden
            "
            style={{
              background:
                "repeating-linear-gradient(90deg,#F8E22A 0,#F8E22A 6px,transparent 6px,transparent 14px)",
            }}
          />

          {steps.map((s, i) => (
            <div
              key={i}
              className="px-5 max-w-[280px] rv relative z-[1]"
            >
              {/* Round image circle */}
              <div
                className="
                  w-[210px] h-[210px] rounded-full
                  border-2 border-[#F8E22A] bg-[#111111]
                  mx-auto mb-5
                  relative overflow-hidden
                  flex items-center justify-center
                "
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-[0.88rem] font-bold text-white mb-[9px]">
                {s.title}
              </div>
              <div className="text-[0.74rem] text-white/[0.42] leading-[1.7]">
                {s.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
