'use client';

import { useState } from 'react';

const contactInfo = [
  {
    ico: '📍',
    label: 'Address',
    value: '#11/4, Rayapuram West St, Opp. ICICI/SBI ATM,\nBehind Santha Bakery, Tirupur – 641 001',
  },
  { ico: '📞', label: 'Phone',   value: '+91 86754 50005' },
  { ico: '✉️', label: 'Email',   value: 'info@imarrt.com' },
  { ico: '🌐', label: 'Website', value: 'www.imarrt.com' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="co-wrap" id="contact">
      <div className="co-inner">
        {/* Info */}
        <div className="rv">
          <span className="sec-lbl" style={{ background: 'var(--B)', color: 'var(--Y)' }}>
            Get In Touch
          </span>
          <h2 className="sec-title">Start Your Order Today</h2>
          <p className="sec-body" style={{ marginBottom: '34px' }}>
            Ready to source premium garments from Tirupur? Our team responds within 24 hours
            with pricing and details.
          </p>

          <div className="co-info">
            {contactInfo.map((item, i) => (
              <div className="i-row" key={i}>
                <div className="i-ico">{item.ico}</div>
                <div>
                  <div className="i-lbl">{item.label}</div>
                  <div className="i-val" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rv">
          <div className="co-form">
            <div className="cf-title">Send an Enquiry</div>
            <form onSubmit={handleSubmit}>
              <div className="cf-grid">
                <div className="cf-f">
                  <label>Your Name</label>
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="cf-f">
                  <label>Company</label>
                  <input type="text" placeholder="Brand / Company" />
                </div>
                <div className="cf-f cf-full">
                  <label>Email Address</label>
                  <input type="email" placeholder="your@email.com" required />
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
                <div className="cf-f">
                  <label>Quantity (pcs)</label>
                  <input type="text" placeholder="e.g. 500" />
                </div>
                <div className="cf-f cf-full">
                  <label>Requirements</label>
                  <textarea placeholder="Style, fabric, timeline, labeling needs..." />
                </div>
              </div>
              <button type="submit" className="btn-sub">
                {submitted ? '✓ Sent! We will respond within 24 hours.' : 'Send Enquiry ✦'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
