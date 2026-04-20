import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlowerLotus, Sun, Clock, Sparkle, WhatsappLogo, ArrowRight } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { spaTreatments, yogaSchedule, business } from '../data/siteData';

const spaHero = 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1800&q=80';
const yogaImg = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80';
const soundImg = 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1600&q=80';
const spaBg = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=80';

export default function Wellness() {
  const [tab, setTab] = useState('spa');
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello Masawara, I'd like to book a treatment.")}`;

  return (
    <PageTransition>
      <SEO
        title={`Wellness — Spa & Yoga at ${business.name}`}
        description="Skin Spa treatments, open-air yoga deck, candlelit yin, sound baths. Three-time Harare Spa of the Year."
      />

      {/* Hero */}
      <section className="relative pt-[84px] -mt-[84px] min-h-[85svh] flex items-center bg-sage-900">
        <div className="absolute inset-0">
          <img
            src={spaHero}
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sage-900/40 via-charcoal-900/35 to-charcoal-900/75" />
        </div>
        <div className="relative z-10 max-w-[1380px] w-full mx-auto px-5 sm:px-7 lg:px-12 py-16">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-copper-300 mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-copper-300" />
              Wellness
            </p>
            <h1 className="font-display text-ivory-50 text-[48px] sm:text-[80px] lg:text-[100px] leading-[0.98] max-w-5xl">
              Slow down.<br />
              <span className="italic text-copper-300">Breathe out.</span>
            </h1>
            <p className="mt-8 max-w-xl text-ivory-100/85 text-[15.5px] leading-relaxed font-light">
              A walled spa and an open-air yoga deck. Three-time Harare Spa of the Year, and the quiet anchor of the house. For residents and visiting guests alike.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="bg-ivory-100 py-10 sm:py-14">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setTab('spa')}
              className={`px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all ${
                tab === 'spa' ? 'bg-charcoal-700 text-ivory-50' : 'bg-transparent text-charcoal-500 border border-sage-200 hover:border-sage-500'
              }`}
            >
              The Skin Spa
            </button>
            <button
              onClick={() => setTab('yoga')}
              className={`px-8 py-4 text-[11px] tracking-[0.2em] uppercase transition-all ${
                tab === 'yoga' ? 'bg-charcoal-700 text-ivory-50' : 'bg-transparent text-charcoal-500 border border-sage-200 hover:border-sage-500'
              }`}
            >
              The Yoga Deck
            </button>
          </div>
        </div>
      </section>

      {/* SPA */}
      {tab === 'spa' && (
        <section className="bg-ivory-50 pb-24 sm:pb-32">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
              <SectionReveal>
                <div className="relative aspect-[4/5] overflow-hidden sticky top-[120px]">
                  <img
                    src={spaBg}
                    alt="The Skin Spa"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </SectionReveal>
              <SectionReveal delay={100}>
                <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4 flex items-center gap-3">
                  <FlowerLotus size={16} weight="thin" /> Treatments
                </p>
                <h2 className="font-display italic text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-charcoal-700">
                  The treatment menu.
                </h2>
                <p className="mt-5 text-[15px] text-charcoal-500 font-light leading-relaxed">
                  Facials, massage, body, sound &mdash; six treatments we return to time and again. Custom pairings on request.
                </p>

                <div className="mt-10 divide-y divide-sage-100 border-y border-sage-100">
                  {spaTreatments.map((t, i) => (
                    <div key={t.name} className="py-6 grid grid-cols-12 gap-4 items-center">
                      <span className="col-span-1 font-accent text-xl text-copper-500 hidden sm:block">{String(i + 1).padStart(2, '0')}</span>
                      <div className="col-span-12 sm:col-span-7">
                        <h3 className="font-display italic text-xl sm:text-2xl text-charcoal-700">{t.name}</h3>
                        <p className="mt-1 text-[13px] text-charcoal-400 font-light">{t.note}</p>
                      </div>
                      <span className="col-span-6 sm:col-span-2 flex items-center gap-1.5 text-[12px] tracking-wide uppercase text-charcoal-400">
                        <Clock size={12} /> {t.duration}
                      </span>
                      <span className="col-span-6 sm:col-span-2 text-right font-display text-xl text-sage-700">${t.price}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-600 text-ivory-50 text-[11px] tracking-[0.2em] uppercase hover:bg-sage-700 transition-colors"
                  >
                    <WhatsappLogo size={14} />
                    Book a treatment
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal-700 text-charcoal-700 text-[11px] tracking-[0.2em] uppercase hover:bg-charcoal-700 hover:text-ivory-50 transition-colors"
                  >
                    Enquire
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      )}

      {/* YOGA */}
      {tab === 'yoga' && (
        <section className="bg-ivory-50 pb-24 sm:pb-32">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
              <SectionReveal>
                <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4 flex items-center gap-3">
                  <Sun size={16} weight="thin" /> The Schedule
                </p>
                <h2 className="font-display italic text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.05] text-charcoal-700">
                  An open teak deck,<br /> under the fig.
                </h2>
                <p className="mt-5 text-[15px] text-charcoal-500 font-light leading-relaxed">
                  Seven classes a week, all levels welcome. Mats, bolsters, and a pot of herbal tea at the end. Drop-in $12, resident guests free.
                </p>

                <div className="mt-10 border-y border-sage-100 divide-y divide-sage-100">
                  {yogaSchedule.map((s) => (
                    <div key={s.day} className="grid grid-cols-12 gap-3 py-5 items-center">
                      <span className="col-span-3 font-display italic text-lg text-sage-700">{s.day}</span>
                      <span className="col-span-3 font-display text-lg text-charcoal-700">{s.time}</span>
                      <span className="col-span-4 font-body text-[14px] text-charcoal-500">{s.style}</span>
                      <span className="col-span-2 text-right text-[11px] tracking-wide uppercase text-charcoal-400 hidden sm:block">{s.level}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 font-accent text-2xl text-copper-500">
                  bring water, leave your phone.
                </p>
              </SectionReveal>

              <SectionReveal delay={150} className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={yogaImg}
                    alt="Yoga deck at sunrise"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={soundImg}
                    alt="Sound bath setup"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      )}

      {/* Retreat packages */}
      <section className="bg-charcoal-700 text-ivory-50 py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-copper-300 mb-4">Small retreats</p>
            <h2 className="font-display italic text-[36px] sm:text-[54px] leading-[1.05]">
              Three nights. Six treatments. One quiet self.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'The Quiet Night', nights: '1 night', price: 285, includes: ['Garden Suite', 'One spa treatment', 'Breakfast + dinner'] },
              { title: 'The Weekend Pause', nights: '2 nights', price: 540, includes: ['Courtyard Room', 'Two spa treatments', 'Yoga + sound bath'] },
              { title: 'The Full Retreat', nights: '3 nights', price: 895, includes: ['Garden Suite', 'Half-day spa retreat', 'All meals, yoga daily'] },
            ].map((pkg) => (
              <div key={pkg.title} className="border border-ivory-100/15 p-8 hover:border-copper-300 transition-colors">
                <p className="text-[11px] tracking-[0.22em] uppercase text-copper-300">{pkg.nights}</p>
                <h3 className="mt-3 font-display italic text-3xl text-ivory-50">{pkg.title}</h3>
                <ul className="mt-6 space-y-2 text-[14px] text-ivory-100/75 font-light">
                  {pkg.includes.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkle size={10} weight="fill" className="text-copper-300" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-ivory-100/15 flex items-end justify-between">
                  <div>
                    <p className="font-display text-3xl text-copper-300">${pkg.price}</p>
                    <p className="text-[10px] tracking-wider uppercase text-ivory-100/50">per person</p>
                  </div>
                  <Link
                    to="/reservations"
                    className="text-[11px] tracking-[0.2em] uppercase text-copper-300 hover:text-ivory-50"
                  >
                    Reserve &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
