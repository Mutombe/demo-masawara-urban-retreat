import React, { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Phone, EnvelopeSimple, Clock, WhatsappLogo, InstagramLogo, FacebookLogo, ArrowRight, CaretDown } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { business, faqs } from '../data/siteData';

export default function Contact() {
  const [channel, setChannel] = useState('whatsapp');
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General enquiry', message: '' });
  const [openFaq, setOpenFaq] = useState(0);

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Masawara,

${form.message}

— ${form.name}
${form.email} · ${form.phone}`;

    if (channel === 'whatsapp') {
      window.open(`${waHref}?text=${encodeURIComponent(text)}`, '_blank');
      toast.success('Opening WhatsApp…');
    } else {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(text)}`;
      toast.success('Opening email…');
    }
  };

  return (
    <PageTransition>
      <SEO
        title={`Contact — ${business.name}`}
        description="Call, WhatsApp, email, or simply visit us at 3 St Michaels Lane, Borrowdale, Harare."
      />

      {/* Hero */}
      <section className="relative pt-[84px] pb-12 sm:pb-20 bg-ivory-100">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 pt-16 sm:pt-20">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">In Touch</p>
            <h1 className="font-display italic text-[44px] sm:text-[68px] lg:text-[84px] leading-[1.02] text-charcoal-700 max-w-4xl">
              A short walk, a long letter,<br />
              <span className="text-sage-600">or a quick WhatsApp.</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          {/* Info */}
          <SectionReveal>
            <div className="space-y-10">
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-copper-500 mb-3">Visit</p>
                <h3 className="font-display italic text-2xl text-charcoal-700 mb-4">3 St Michaels Lane</h3>
                <p className="text-[14px] text-charcoal-500 font-light leading-relaxed">
                  Borrowdale, Harare. The end of the lane, beyond the old jacarandas, where the road turns quiet.
                </p>
                <a
                  href="https://maps.google.com/?q=3+St+Michaels+Lane+Borrowdale+Harare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-sage-700 hover:text-copper-500 transition-colors"
                >
                  <MapPin size={14} /> Get directions
                  <ArrowRight size={12} />
                </a>
              </div>

              <div className="pt-10 border-t border-sage-100">
                <p className="text-[10px] tracking-[0.22em] uppercase text-copper-500 mb-3">Call or message</p>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="block font-display italic text-2xl text-charcoal-700 hover:text-sage-700 transition-colors"
                >
                  {business.phone}
                </a>
                <a
                  href={`mailto:${business.email}`}
                  className="mt-3 block text-[14px] text-charcoal-500 hover:text-sage-700 transition-colors"
                >
                  {business.email}
                </a>
              </div>

              <div className="pt-10 border-t border-sage-100">
                <p className="text-[10px] tracking-[0.22em] uppercase text-copper-500 mb-3">Open</p>
                <ul className="space-y-2 text-[14px] text-charcoal-500 font-light">
                  <li><span className="text-charcoal-700">Reception</span> &nbsp;· {business.hours.reception}</li>
                  <li><span className="text-charcoal-700">Restaurant</span> &nbsp;· {business.hours.restaurant}</li>
                  <li><span className="text-charcoal-700">Spa</span> &nbsp;· {business.hours.spa}</li>
                  <li><span className="text-charcoal-700">Pool</span> &nbsp;· {business.hours.pool}</li>
                </ul>
              </div>

              <div className="pt-10 border-t border-sage-100 flex items-center gap-3">
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-copper-500 hover:text-ivory-50 hover:border-copper-500 transition-colors">
                  <InstagramLogo size={18} />
                </a>
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-copper-500 hover:text-ivory-50 hover:border-copper-500 transition-colors">
                  <FacebookLogo size={18} />
                </a>
                <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-11 w-11 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:bg-sage-600 hover:text-ivory-50 hover:border-sage-600 transition-colors">
                  <WhatsappLogo size={18} />
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={150}>
            <form onSubmit={handleSubmit} className="bg-ivory-100 border border-sage-100 p-6 sm:p-10">
              <h2 className="font-display italic text-[28px] sm:text-[36px] text-charcoal-700 mb-1">
                Write to us.
              </h2>
              <p className="text-[13px] text-charcoal-400 font-light mb-8">
                We reply personally, usually within the hour.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Name</span>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700" />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Email</span>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700" />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Phone</span>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700" />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Subject</span>
                  <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700">
                    <option>General enquiry</option>
                    <option>Reservation enquiry</option>
                    <option>Restaurant booking</option>
                    <option>Spa booking</option>
                    <option>Private event / Xhale</option>
                    <option>Press &amp; partnerships</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Your message</span>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700 resize-none" />
                </label>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setChannel('whatsapp')}
                  className={`flex items-center justify-center gap-2 py-3.5 border text-[11px] tracking-[0.18em] uppercase transition-all ${
                    channel === 'whatsapp' ? 'bg-sage-600 text-ivory-50 border-sage-600' : 'border-sage-200 text-charcoal-500 hover:border-sage-500'
                  }`}
                >
                  <WhatsappLogo size={14} /> WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setChannel('email')}
                  className={`flex items-center justify-center gap-2 py-3.5 border text-[11px] tracking-[0.18em] uppercase transition-all ${
                    channel === 'email' ? 'bg-copper-500 text-ivory-50 border-copper-500' : 'border-sage-200 text-charcoal-500 hover:border-copper-400'
                  }`}
                >
                  <EnvelopeSimple size={14} /> Email
                </button>
              </div>

              <button type="submit" className="mt-5 w-full flex items-center justify-center gap-2 bg-charcoal-700 text-ivory-50 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-charcoal-800 transition-colors">
                Send message
                <ArrowRight size={14} />
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ivory-100 pb-0">
        <div className="relative aspect-[16/8] sm:aspect-[16/6] bg-sage-200">
          <iframe
            title="Masawara map"
            src="https://www.google.com/maps?q=3+St+Michaels+Lane+Borrowdale+Harare&output=embed"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0, filter: 'saturate(0.8) contrast(0.95)' }}
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-ivory-50 py-24 sm:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-7 lg:px-10">
          <SectionReveal className="mb-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">Frequently asked</p>
            <h2 className="font-display italic text-[34px] sm:text-[52px] leading-[1.05] text-charcoal-700">
              Things we&apos;re often asked.
            </h2>
          </SectionReveal>

          <div className="divide-y divide-sage-100 border-y border-sage-100">
            {faqs.map((f, i) => (
              <div key={i} className="py-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display italic text-xl sm:text-2xl text-charcoal-700">{f.q}</span>
                  <CaretDown size={18} className={`shrink-0 text-sage-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="pb-6 pr-8 text-[15px] text-charcoal-500 font-light leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
