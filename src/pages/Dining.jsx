import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, ForkKnife, Star } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { diningSections, business, amenities } from '../data/siteData';

const diningHero = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80';
const diningSide1 = 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?auto=format&fit=crop&w=1200&q=80';
const diningSide2 = 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80';
const diningSide3 = 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80';

export default function Dining() {
  const xhale = amenities.find((a) => a.slug === 'xhale-events');

  return (
    <PageTransition>
      <SEO
        title={`The Patio — Dining at ${business.name}`}
        description="Fusion dining on the garden patio. Local produce, seasonal menu, open daily 7:00–22:00."
      />

      {/* Hero — tall, cinematic */}
      <section className="relative pt-[84px] bg-charcoal-900 -mt-[84px] min-h-[90svh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={diningHero}
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-charcoal-900/30 to-charcoal-900/85" />
        </div>
        <div className="relative z-10 max-w-[1380px] w-full mx-auto px-5 sm:px-7 lg:px-12 pb-20 sm:pb-28">
          <p className="font-accent text-3xl sm:text-4xl text-copper-300 mb-4">found by word of mouth</p>
          <h1 className="font-display text-ivory-50 text-[48px] sm:text-[80px] lg:text-[104px] leading-[0.98] max-w-5xl">
            The Patio<br />
            <span className="italic text-copper-300">Restaurant.</span>
          </h1>
          <p className="mt-8 max-w-xl text-ivory-100/85 text-[15.5px] leading-relaxed font-light">
            Our fusion kitchen, open to residents and to those who know. Local, seasonal, never loud — a menu that changes every other Tuesday because the tomatoes tell us when.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ivory-100/80">
            <span className="flex items-center gap-2"><Clock size={14} /> {business.hours.restaurant}</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> On the garden</span>
            <span className="flex items-center gap-2 text-copper-300"><Star size={14} weight="fill" /> Harare Food Awards, 2023 & 2024</span>
          </div>
        </div>
      </section>

      {/* Intro + triptych */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-14 items-center">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">On the table</p>
            <h2 className="font-display italic text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] text-charcoal-700">
              Garden-led, kitchen-driven.
            </h2>
            <p className="mt-6 text-[15px] text-charcoal-500 font-light leading-relaxed">
              Chef Tendai builds the menu around whatever the garden &mdash; and three farms in Mashonaland &mdash; can offer each week. Expect a small plate of something odd that works, a main that makes you notice, a pudding that isn&apos;t shy about butter.
            </p>
            <p className="mt-5 text-[15px] text-charcoal-500 font-light leading-relaxed">
              We serve breakfast under the fig, lunch on the patio, dinner wherever you&apos;d like us to lay a table.
            </p>
          </SectionReveal>
          <SectionReveal delay={150} className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-sage-100 col-span-1">
              <img src={diningSide1} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-sage-100 col-span-1 translate-y-6">
              <img src={diningSide2} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-sage-100 col-span-1">
              <img src={diningSide3} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-ivory-50 py-24 sm:py-32 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[900px] mx-auto px-5 sm:px-7 lg:px-10">
          <SectionReveal className="text-center mb-16">
            <p className="font-accent text-3xl text-copper-500 mb-3">à la carte</p>
            <h2 className="font-display italic text-[36px] sm:text-[54px] text-charcoal-700 leading-tight">
              A small, seasonal menu.
            </h2>
            <p className="mt-4 text-[13px] tracking-wider uppercase text-charcoal-400">
              — changes every other Tuesday —
            </p>
          </SectionReveal>

          <div className="space-y-16">
            {diningSections.map((section, idx) => (
              <SectionReveal key={section.title} delay={idx * 100}>
                <div>
                  <h3 className="font-display italic text-2xl sm:text-3xl text-sage-700 mb-6 pb-3 border-b border-sage-200 tracking-wide">
                    {section.title}
                  </h3>
                  <ul className="space-y-5">
                    {section.dishes.map((d) => (
                      <li key={d.name} className="flex items-baseline gap-4">
                        <span className="font-display text-lg sm:text-xl text-charcoal-700 flex-1">
                          {d.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-charcoal-200 translate-y-[-4px] hidden sm:block" />
                        <span className="font-display text-lg text-copper-500 shrink-0">${d.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-20 text-center">
            <p className="font-accent text-2xl text-copper-500 mb-4">for groups of six and more</p>
            <p className="text-[14px] text-charcoal-500 max-w-md mx-auto font-light leading-relaxed">
              Chef Tendai offers a tasting menu at $65 per person &mdash; seven courses, wine pairings on request.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Xhale private room */}
      {xhale && (
        <section className="bg-charcoal-700 text-ivory-50 py-24 sm:py-32 relative overflow-hidden">
          <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <SectionReveal>
              <p className="text-[11px] tracking-[0.28em] uppercase text-copper-300 mb-4">Private dining</p>
              <h2 className="font-display italic text-[36px] sm:text-[54px] leading-[1.05]">
                The Xhale Room.
              </h2>
              <p className="mt-6 text-[15px] text-ivory-100/80 font-light leading-relaxed">
                {xhale.summary}
              </p>
              <ul className="mt-8 space-y-3 text-[14px] text-ivory-100/75">
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-copper-300" /> Seats 12&ndash;30</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-copper-300" /> Dedicated chef &amp; server</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-copper-300" /> Custom menus from $85/person</li>
                <li className="flex items-center gap-3"><span className="h-px w-5 bg-copper-300" /> Wine pairings by the sommelier</li>
              </ul>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-copper-500 text-ivory-50 text-[11px] tracking-[0.2em] uppercase hover:bg-copper-600 transition-colors"
              >
                Enquire about a private event
              </Link>
            </SectionReveal>
            <SectionReveal delay={150}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={xhale.image}
                  alt={xhale.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </SectionReveal>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
