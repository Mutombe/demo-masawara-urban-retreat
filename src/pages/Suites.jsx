import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bed, UsersThree, Ruler, ArrowRight, Check, WhatsappLogo } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { suites, business } from '../data/siteData';

export default function Suites() {
  const [active, setActive] = useState(suites[0].slug);
  const current = suites.find((s) => s.slug === active) || suites[0];
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Masawara, I'd like to reserve the ${current.name}.`)}`;

  return (
    <PageTransition>
      <SEO
        title={`Suites — ${business.name}`}
        description="Six distinct boutique suites at Masawara — from the Studio Retreat for solo travellers to the Jacaranda Honeymoon Suite."
      />

      {/* Hero */}
      <section className="relative pt-[84px] pb-12 sm:pb-16 bg-ivory-100">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 pt-16 sm:pt-20">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">The Rooms</p>
            <h1 className="font-display italic text-[44px] sm:text-[72px] lg:text-[84px] leading-[1.02] text-charcoal-700 max-w-4xl">
              Six ways to stay.<br />
              <span className="text-sage-600">Each one, quietly its own.</span>
            </h1>
            <p className="mt-7 max-w-xl text-[15px] text-charcoal-500 font-light leading-relaxed">
              Every suite is styled individually. No two have the same view, the same bath, or the same reading chair. Choose the one that sounds most like you.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-ivory-100 sticky top-[84px] z-30 border-y border-sage-100">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 sm:gap-3 py-4 min-w-max">
            {suites.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActive(s.slug)}
                className={`whitespace-nowrap px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase transition-all border ${
                  active === s.slug
                    ? 'bg-charcoal-700 text-ivory-50 border-charcoal-700'
                    : 'bg-transparent text-charcoal-500 border-sage-200 hover:border-sage-400 hover:text-charcoal-700'
                }`}
              >
                {s.name.replace(/^The /, '')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="bg-ivory-50 py-16 sm:py-24">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-start">
            <SectionReveal key={current.slug}>
              <div className="relative aspect-[4/3] overflow-hidden bg-sage-100">
                <img
                  src={current.gallery[0]}
                  alt={current.name}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                {current.gallery.slice(1, 3).map((g, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden bg-sage-100">
                    <img
                      src={g}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal key={`body-${current.slug}`} delay={100}>
              <p className="text-[11px] tracking-[0.28em] uppercase text-copper-500 mb-4">{current.kicker}</p>
              <h2 className="font-display italic text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.05] text-charcoal-700">
                {current.name}
              </h2>
              <p className="mt-5 text-[15px] text-charcoal-500 font-light leading-relaxed">
                {current.description}
              </p>

              <div className="mt-8 pt-8 border-t border-sage-100 grid grid-cols-3 gap-4 text-center">
                <div>
                  <Ruler size={18} className="mx-auto text-sage-600 mb-1.5" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal-400">Size</p>
                  <p className="font-display text-lg text-charcoal-700 mt-0.5">{current.size}</p>
                </div>
                <div>
                  <UsersThree size={18} className="mx-auto text-sage-600 mb-1.5" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal-400">Sleeps</p>
                  <p className="font-display text-lg text-charcoal-700 mt-0.5">{current.sleeps}</p>
                </div>
                <div>
                  <Bed size={18} className="mx-auto text-sage-600 mb-1.5" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-charcoal-400">Bed</p>
                  <p className="font-display text-lg text-charcoal-700 mt-0.5">{current.bed}</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-sage-100">
                <p className="text-[11px] tracking-[0.22em] uppercase text-charcoal-400 mb-4">In this room</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2.5 text-[14px] text-charcoal-500">
                      <Check size={14} className="text-sage-600 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-sage-100 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="font-display text-4xl sm:text-5xl text-copper-500">${current.price}</p>
                  <p className="text-[11px] tracking-wider text-charcoal-400">{current.priceNote}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/reservations"
                    state={{ suite: current.slug }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-sage-600 text-ivory-50 text-[11px] tracking-[0.2em] uppercase hover:bg-sage-700 transition-colors"
                  >
                    Reserve this suite
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal-700 text-charcoal-700 text-[11px] tracking-[0.2em] uppercase hover:bg-charcoal-700 hover:text-ivory-50 transition-colors"
                  >
                    <WhatsappLogo size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* All suites grid */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">All Rooms</p>
            <h2 className="font-display italic text-[34px] sm:text-[48px] leading-[1.08] text-charcoal-700">
              At a glance.
            </h2>
          </SectionReveal>

          <div className="divide-y divide-sage-100 border-y border-sage-100">
            {suites.map((s) => (
              <button
                key={s.slug}
                onClick={() => {
                  setActive(s.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full grid grid-cols-12 gap-4 items-center py-5 text-left hover:bg-ivory-50 transition-colors px-4 -mx-4"
              >
                <span className="col-span-1 font-accent text-xl text-copper-500">{String(suites.indexOf(s) + 1).padStart(2, '0')}</span>
                <span className="col-span-6 sm:col-span-5 font-display italic text-xl sm:text-2xl text-charcoal-700">{s.name}</span>
                <span className="hidden sm:block col-span-3 text-[12px] tracking-wider uppercase text-charcoal-400">{s.size} · {s.bed}</span>
                <span className="col-span-3 sm:col-span-2 text-right font-display text-xl text-sage-700">${s.price}</span>
                <span className="col-span-2 sm:col-span-1 text-right text-charcoal-400">
                  <ArrowRight size={16} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
