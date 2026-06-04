"use client";

import IconHelper from "@/helper/icon_helper";
import { useState } from "react";

const contactInfo = [
  {
    ico: IconHelper.contact.location,
    label: "Address",
    value: "#11/4, Rayapuram West St, Opp. ICICI/SBI ATM, Tirupur – 641 001",
  },
  {
    ico: IconHelper.contact.call,
    label: "Phone",
    value: "+91 86754 50005\n+91 9965510005",
  },
  {
    ico: IconHelper.contact.mail,
    label: "Email",
    value: "info@imarrt.com\nsales@imarrt.com",
  },
  {
    ico: IconHelper.contact.openbox,
    label: "Website",
    value: "www.imarrt.com",
  },
];

const fieldBase =
  "border-[1.5px] border-[#E0E0E0] rounded-[4px] px-[15px] py-3 font-poppins text-[0.84rem] text-[#111111] bg-white outline-none transition-colors duration-[250ms] focus:border-[#D4A800]";

const labelBase =
  "text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[#666666]";

const initialFormData = {
  name: "",
  address: "",
  company: "",
  category: "Adults Garments",
  email: "",
  phone: "",
  quantity: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to send enquiry.");
        return;
      }

      setSubmitted(true);
      setFormData(initialFormData);

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8E22A]" id="contact">
      <div
        className="
          max-w-[1380px] mx-auto px-14 py-[100px]
          grid grid-cols-2 gap-[88px] items-start
          max-[900px]:grid-cols-1 max-[900px]:gap-[52px] max-[900px]:px-10 max-[900px]:py-[72px]
          max-[600px]:px-6 max-[600px]:py-14 max-[600px]:gap-10
        "
      >
        {/* Left — Info */}
        <div className="rv">
          <span
            className="
              inline-block bg-[#111111] text-[#F8E22A]
              text-[0.6rem] font-bold tracking-[0.22em] uppercase
              px-[14px] py-[6px] rounded-sm mb-4
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              font-poppins font-bold text-[#111111] leading-[1.1] mb-4
              text-[clamp(2.4rem,3.8vw,3.8rem)]
            "
          >
            Place Your Order Today
          </h2>

          <p className="text-[0.87rem] leading-[1.9] text-[#666666] mb-[34px]">
            Ready to source premium garments from Tirupur? Our team responds
            within 24 hours with pricing and details.
          </p>

          <div className="pt-2">
            {contactInfo.map((item, i) => {
              const Icon = item.ico;
              return (
                <div
                  key={i}
                  className="
                    flex gap-[14px] items-start py-[18px]
                    border-b-[1.5px] border-black/10 last:border-b-0
                  "
                >
                  <div
                    className="
                      w-10 h-10 bg-white rounded-md
                      flex items-center justify-center text-base shrink-0
                    "
                  >
                    <Icon size={24} />
                  </div>

                  <div>
                    <div className="text-[0.6rem] font-bold tracking-[0.17em] uppercase text-black/[0.42] mb-[3px]">
                      {item.label}
                    </div>
                    <div
                      className="text-[0.88rem] font-semibold text-[#111111] leading-[1.5]"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="
              flex items-center gap-2 mt-auto pt-8
              border-t border-white/[0.07]
              text-[0.72rem] text-[#111111]
            "
          >
            <span className="w-2 h-2 rounded-full bg-[#3dba6f] shrink-0" />
            Typically responds within 24 hours
          </div>
        </div>

        {/* Right — Form */}
        <div className="rv">
          <div
            className="
              bg-white rounded-[10px] p-[42px]
              shadow-[12px_12px_0_rgba(0,0,0,0.1)]
              max-[600px]:px-5 max-[600px]:py-7 max-[600px]:shadow-[6px_6px_0_rgba(0,0,0,0.1)]
            "
          >
            <div
              className="
                font-poppins text-[2rem] font-bold text-[#111111] mb-[26px]
                max-[600px]:text-[1.7rem]
              "
            >
              Send an Enquiry
            </div>

            <p className="text-[0.8rem] text-[#666666] mb-7">
              Fill in the details and we&apos;ll get back to you with a quote.
            </p>

            <form onSubmit={handleSubmit}>
              <div
                className="
                  grid grid-cols-2 gap-[14px]
                  max-[600px]:grid-cols-1
                "
              >
                <div className="flex flex-col gap-[6px]">
                  <label className={labelBase}>Your Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className={labelBase}>Your Address</label>
                  <input
                    name="address"
                    type="text"
                    placeholder="Your Address & Pincode"
                    value={formData.address}
                    onChange={handleChange}
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className={labelBase}>Company</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Brand / Company"
                    value={formData.company}
                    onChange={handleChange}
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className={labelBase}>Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={fieldBase}
                  >
                    <option value="Adults Garments">Adults Garments</option>
                    <option value="Children's Wear">Children&apos;s Wear</option>
                    <option value="Infants Wear">Infants Wear</option>
                    <option value="Mixed / Custom">Mixed / Custom</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[6px] col-span-2 max-[600px]:col-span-1">
                  <label className={labelBase}>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className={labelBase}>Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className={labelBase}>Required Quantity (pcs)</label>
                  <input
                    name="quantity"
                    type="text"
                    placeholder="e.g. 500"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={fieldBase}
                  />
                </div>

                <div className="flex flex-col gap-[6px] col-span-2 max-[600px]:col-span-1">
                  <label className={labelBase}>Requirements</label>
                  <textarea
                    name="message"
                    placeholder="Style, fabric, timeline, labeling needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${fieldBase} h-[108px] resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full bg-[#F8E22A] text-[#111111] border-0 rounded-[4px]
                  py-[15px] font-poppins text-[0.76rem] font-bold
                  tracking-[0.17em] uppercase cursor-pointer mt-5
                  transition-[background,transform] duration-300
                  hover:bg-[#f5f82a] hover:-translate-y-[2px]
                  disabled:opacity-70 disabled:cursor-not-allowed
                "
              >
                {loading
                  ? "Sending…"
                  : submitted
                  ? "✓ Sent! We'll respond within 24 hours."
                  : "Send Enquiry ✦"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}