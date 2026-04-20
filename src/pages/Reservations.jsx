import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRight, WhatsappLogo, EnvelopeSimple, Check } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import ReservationBar from '../components/ReservationBar';
import { suites, business } from '../data/siteData';

export default function Reservations() {
  const loc = useLocation();
  const [params] = useSearchParams();

  const preselected = loc.state?.suite || params.get('suite') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    suite: preselected,
    checkIn: params.get('checkIn') || '',
    checkOut: params.get('checkOut') || '',
    guests: Number(params.get('guests')) || 2,
    notes: '',
    channel: 'whatsapp',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const suiteLabel = suites.find((s) => s.slug === form.suite)?.name || 'Any suite';
    const msg = `Hello Masawara, I'd like to reserve:
• Suite: ${suiteLabel}
• Arriving: ${form.checkIn || 'TBD'}
• Departing: ${form.checkOut || 'TBD'}
• Guests: ${form.guests}
• Name: ${form.name}
• Email: ${form.email}
• Phone: ${form.phone}
${form.notes ? `\nNotes: ${form.notes}` : ''}`;

    if (form.channel === 'whatsapp') {
      const url = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
      toast.success('Opening WhatsApp — we will confirm within the hour.');
    } else {
      const url = `mailto:${business.email}?subject=${encodeURIComponent('Reservation request — ' + suiteLabel)}&body=${encodeURIComponent(msg)}`;
      window.location.href = url;
      toast.success('Opening email — we will confirm within the hour.');
    }
  };

  return (
    <PageTransition>
      <SEO
        title={`Reservations — ${business.name}`}
        description="Reserve a stay at Masawara Urban Retreat. Direct bookings, best rate, breakfast included."
      />

      <section className="relative pt-[84px] bg-ivory-100">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 pt-16 sm:pt-20 pb-8">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">Reservations</p>
            <h1 className="font-display italic text-[44px] sm:text-[68px] lg:text-[80px] leading-[1.02] text-charcoal-700">
              Reserve your stay<br />
              <span className="text-sage-600">in three quiet steps.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[15px] text-charcoal-500 font-light leading-relaxed">
              Choose your dates, pick a suite, send us a note &mdash; by WhatsApp or email. We confirm every reservation personally, usually within the hour.
            </p>
          </SectionReveal>

          <SectionReveal className="mt-10">
            <ReservationBar />
          </SectionReveal>
        </div>
      </section>

      <section className="bg-ivory-50 py-20 sm:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.9fr] gap-12 lg:gap-20 items-start">
          {/* Form */}
          <SectionReveal>
            <form onSubmit={handleSubmit} className="bg-ivory-100 border border-sage-100 p-6 sm:p-10">
              <h2 className="font-display italic text-[28px] sm:text-[36px] text-charcoal-700 mb-1">
                The details.
              </h2>
              <p className="text-[13px] text-charcoal-400 font-light mb-8">
                Nothing is charged here. We confirm by message and take deposit on arrival.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Your name</span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Phone</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Preferred suite</span>
                  <select
                    value={form.suite}
                    onChange={(e) => setForm({ ...form, suite: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  >
                    <option value="">Any suite / recommend to me</option>
                    {suites.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name} &nbsp;—&nbsp; ${s.price}/night</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Arriving</span>
                  <input
                    required
                    type="date"
                    value={form.checkIn}
                    onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  />
                </label>
                <label className="block">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Departing</span>
                  <input
                    required
                    type="date"
                    value={form.checkOut}
                    onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Number of guests</span>
                  <select
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400">Notes — special occasions, dietary, preferences</span>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="mt-2 w-full bg-transparent border-b border-sage-200 py-2.5 focus:border-sage-600 outline-none text-[15px] text-charcoal-700 resize-none"
                  />
                </label>
              </div>

              <div className="mt-8 pt-6 border-t border-sage-100">
                <p className="text-[10px] tracking-[0.22em] uppercase text-charcoal-400 mb-4">Send via</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, channel: 'whatsapp' })}
                    className={`flex items-center justify-center gap-2 py-3.5 border text-[11px] tracking-[0.18em] uppercase transition-all ${
                      form.channel === 'whatsapp'
                        ? 'bg-sage-600 text-ivory-50 border-sage-600'
                        : 'border-sage-200 text-charcoal-500 hover:border-sage-500'
                    }`}
                  >
                    <WhatsappLogo size={14} /> WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, channel: 'email' })}
                    className={`flex items-center justify-center gap-2 py-3.5 border text-[11px] tracking-[0.18em] uppercase transition-all ${
                      form.channel === 'email'
                        ? 'bg-copper-500 text-ivory-50 border-copper-500'
                        : 'border-sage-200 text-charcoal-500 hover:border-copper-400'
                    }`}
                  >
                    <EnvelopeSimple size={14} /> Email
                  </button>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full flex items-center justify-center gap-2 bg-charcoal-700 text-ivory-50 py-4 text-[11px] tracking-[0.22em] uppercase hover:bg-charcoal-800 transition-colors"
                >
                  Send reservation request
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </SectionReveal>

          {/* Side */}
          <SectionReveal delay={150} className="lg:sticky lg:top-28">
            <div className="bg-charcoal-700 text-ivory-50 p-8 sm:p-10">
              <p className="font-accent text-2xl text-copper-300 mb-3">a direct booking includes</p>
              <h3 className="font-display italic text-3xl leading-tight">
                Our best rate, always.
              </h3>

              <ul className="mt-8 space-y-3 text-[14px] text-ivory-100/80 font-light">
                {[
                  'Breakfast every morning, under the fig',
                  'Garden access, pool access, yoga access',
                  'Free cancellation up to 7 days before arrival',
                  'Airport transfer, arranged on request',
                  'Complimentary laundry during your stay',
                  'A welcome drink from the garden',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check size={14} className="mt-1 text-copper-300 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-ivory-100/15">
                <p className="text-[10px] tracking-[0.22em] uppercase text-ivory-100/60 mb-3">Direct line</p>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="block font-display italic text-2xl text-copper-300 hover:text-ivory-50 transition-colors"
                >
                  {business.phone}
                </a>
                <p className="mt-4 text-[13px] text-ivory-100/70 font-light">
                  Violet runs the front desk Monday to Friday. Weekends, it&apos;s Tendai.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Link
                to="/suites"
                className="py-3.5 text-center text-[11px] tracking-[0.2em] uppercase border border-charcoal-700 text-charcoal-700 hover:bg-charcoal-700 hover:text-ivory-50 transition-colors"
              >
                Browse suites
              </Link>
              <Link
                to="/contact"
                className="py-3.5 text-center text-[11px] tracking-[0.2em] uppercase border border-charcoal-700 text-charcoal-700 hover:bg-charcoal-700 hover:text-ivory-50 transition-colors"
              >
                Other questions
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
