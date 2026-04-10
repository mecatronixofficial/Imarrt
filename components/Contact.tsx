"use client";

import IconHelper from "@/helper/icon_helper";
import { useState } from "react";

const contactInfo = [
  {
    ico: IconHelper.contact.location,
    label: "Address",
    value:
      "#11/4, Rayapuram West St, Opp. ICICI/SBI ATM, Tirupur – 641 001",
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form[0] as HTMLInputElement).value,
      Address: (form[1] as HTMLInputElement).value,
      company: (form[2] as HTMLInputElement).value,
      category: (form[3] as HTMLSelectElement).value,
      email: (form[4] as HTMLInputElement).value,
      phone: (form[5] as HTMLInputElement).value,
      quantity: (form[6] as HTMLInputElement).value,
      message: (form[7] as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="co-wrap" id="contact">
      <div className="co-inner">
        {/* Info */}
        <div className="rv">
          <span
            className="sec-lbl"
            style={{ background: "var(--B)", color: "var(--Y)" }}
          >
            Get In Touch
          </span>
          <h2 className="sec-title">Place Your Order Today</h2>
          <p className="sec-body" style={{ marginBottom: "34px" }}>
            Ready to source premium garments from Tirupur? Our team responds
            within 24 hours with pricing and details.
          </p>

          <div className="co-info">
            {contactInfo.map((item, i) => {
              const Icon = item.ico;
              return (
                <div className="i-row" key={i}>
                  <div className="i-ico">
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="i-lbl">{item.label}</div>
                    <div className="i-val" style={{ whiteSpace: "pre-line" }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="co-response">
            <span className="co-dot" />
            Typically responds within 24 hours
          </div>
        </div>

        {/* Form */}
        <div className="rv">
          <div className="co-form">
            <div className="cf-title">Send an Enquiry</div>
            <p className="cf-desc">
              Fill in the details and we'll get back to you with a quote.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="cf-grid">
                <div className="cf-f">
                  <label>Your Name</label>
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="cf-f">
                  <label> Your Address</label>
                  <input type="text" placeholder="Your Address & Pincode" />
                </div>
                <div className="cf-f">
                  <label>Company</label>
                  <input type="text" placeholder="Brand / Company" />
                </div>
                 <div className="cf-f">
                  <label>Category</label>
                  <select>
                    <option>Adults Garments</option>
                    <option>Children&apos;s Wear</option>
                    <option>Infants Wear</option>
                    <option>Mixed / Custom</option>
                  </select>
                </div>
                <div className="cf-f cf-full">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="cf-f">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 00000 00000" />
                </div>
               
                <div className="cf-f">
                  <label>Required Quantity (pcs)</label>
                  <input type="text" placeholder="e.g. 500" />
                </div>
                <div className="cf-f cf-full">
                  <label>Requirements</label>
                  <textarea placeholder="Style, fabric, timeline, labeling needs..." />
                </div>
              </div>
              <button type="submit" className="btn-sub" disabled={loading}>
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
