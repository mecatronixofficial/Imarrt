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
    <div className="ps-wrap" id="process">
      <div className="ps-inner">
        <div className="rv" style={{ textAlign: "center" }}>
          <span className="sec-lbl">How It Works</span>
          <h2 className="sec-title">Enquiry to Doorstep</h2>
        </div>

        <div className="ps-steps">
          {steps.map((s, i) => (
            <div className="ps-step rv" key={i}>
              
              {/* SAME CIRCLE BG */}
              <div className="ps-num">
  <Image
    src={s.img}
    alt={s.title}
    fill
    className="ps-img-in"
  />
</div>

              <div className="ps-ttl">{s.title}</div>
              <div className="ps-txt">{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}