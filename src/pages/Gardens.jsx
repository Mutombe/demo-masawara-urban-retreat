import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Clock, ArrowRight, WhatsappLogo } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { experiences, business } from '../data/siteData';

const gardenHero = 'https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=1800&q=80';
const figTree = 'https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&w=1400&q=80';
const walledGarden = 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80';
const pool = 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1400&q=80';

export default function Gardens() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <PageTransition>
      <SEO
        title={`The Gardens & Experiences — ${business.name}`}
        description="A walled garden, botanical tours, breakfast under the fig, stargazing, sound baths, private dinners."
      />

      {/* Hero parallax */}
      <section className="relative pt-[84px] -mt-[84px] min-h-[90svh] flex items-end bg-sage-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={gardenHero}
            alt=""
            loading="eager"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'saturate(1.05) brightness(0.88)' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage-900/25 to-charcoal-900/80" />
        </div>
        <div className="relative z-10 max-w-[1380px] w-full mx-auto px-5 sm:px-7 lg:px-12 pb-20 sm:pb-28">
          <SectionReveal>
            <p className="font-accent text-3xl sm:text-4xl text-copper-300 mb-4">three-quarters of an acre</p>
            <h1 className="font-display text-ivory-50 text-[48px] sm:text-[80px] lg:text-[104px] leading-[0.98]">
              The Garden,<br />
              <span className="italic text-copper-300">and the hours it holds.</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Intro panel grid */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            <SectionReveal className="col-span-12 lg:col-span-5">
              <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4 flex items-center gap-3">
                <Leaf size={16} weight="thin" /> The Grounds
              </p>
              <h2 className="font-display italic text-[32px] sm:text-[46px] leading-[1.1] text-charcoal-700">
                A fig that pre-dates the house.
              </h2>
              <p className="mt-6 text-[15px] text-charcoal-500 font-light leading-relaxed">
                When Rumbidzai bought the property in 2017, the garden was the thing. The fig at the centre, the jacaranda by the wall, the old indigenous aloes along the eastern edge. We have added lavender, rosemary, four kinds of basil &mdash; and left the rest.
              </p>
              <p className="mt-4 text-[15px] text-charcoal-500 font-light leading-relaxed">
                Tawanda, our head gardener, walks the garden every morning. He will walk it with you at ten, if you&apos;d like.
              </p>
            </SectionReveal>
            <SectionReveal className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden bg-sage-100">
                <img src={figTree} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="relative aspect-square overflow-hidden bg-sage-100 translate-y-10">
                <img src={walledGarden} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="relative aspect-square overflow-hidden bg-sage-100 col-span-2">
                <img src={pool} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover object-center" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Experiences grid */}
      <section className="bg-ivory-50 py-24 sm:py-32">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">Experiences</p>
            <h2 className="font-display italic text-[34px] sm:text-[54px] leading-[1.05] text-charcoal-700">
              Small, slow, worth clearing the morning for.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {experiences.map((e, i) => (
              <SectionReveal key={e.slug} delay={(i % 2) * 80}>
                <article className="group bg-ivory-100 border border-sage-100 overflow-hidden transition-all hover:border-sage-300">
                  <div className="grid grid-cols-5 gap-0 h-full">
                    <div className="col-span-2 relative overflow-hidden bg-sage-100">
                      <img
                        src={e.image}
                        alt={e.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.06]"
                        onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div className="col-span-3 p-6 sm:p-7 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-copper-500">{e.priceLabel}</span>
                        <span className="text-charcoal-300">·</span>
                        <span className="flex items-center gap-1 text-[11px] text-charcoal-400"><Clock size={11} />{e.duration}</span>
                      </div>
                      <h3 className="font-display italic text-[22px] sm:text-[26px] text-charcoal-700 leading-tight">{e.title}</h3>
                      <p className="mt-3 text-[13.5px] text-charcoal-500 font-light leading-relaxed flex-1">{e.description}</p>
                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-sage-700 hover:text-copper-500 transition-colors"
                      >
                        Enquire <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sage-700 py-20 sm:py-28 text-ivory-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-7 lg:px-10 text-center">
          <p className="font-accent text-3xl text-copper-300 mb-4">make an afternoon of it</p>
          <h2 className="font-display italic text-[32px] sm:text-[44px] leading-tight">
            Book an experience, or ask for something custom.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-ivory-50 text-charcoal-700 text-[11px] tracking-[0.2em] uppercase hover:bg-copper-500 hover:text-ivory-50 transition-all"
            >
              <WhatsappLogo size={14} />
              WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-ivory-50/50 text-ivory-50 text-[11px] tracking-[0.2em] uppercase hover:bg-ivory-50 hover:text-charcoal-700 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
