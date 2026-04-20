import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Star, Quotes, Leaf, MapPin } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SuiteCard from '../components/SuiteCard';
import AmenityCard from '../components/AmenityCard';
import ReservationBar from '../components/ReservationBar';
import SEO from '../components/SEO';

import {
  business, hero, suites, amenities, reviews, stats, experiences, aboutStory,
} from '../data/siteData';

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % hero.images.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <PageTransition>
      <SEO
        title={`${business.name} — Boutique Garden Hotel in Harare`}
        description={business.description}
      />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[100svh] -mt-[84px] pt-[84px] overflow-hidden bg-charcoal-800">
        {/* Image stack with soft-focus cross-fade */}
        <div className="absolute inset-0">
          {hero.images.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-[2000ms]"
              style={{ opacity: heroIdx === i ? 1 : 0 }}
            >
              <img
                src={src}
                alt=""
                loading={i === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center"
                style={{ filter: 'blur(0.5px) saturate(0.95)' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          ))}
          {/* layered scrim for warm, sage-tinted mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/55 via-charcoal-800/35 to-charcoal-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(20,20,17,0.4)_80%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 pt-16 sm:pt-24 pb-12 min-h-[calc(100svh-84px)] flex flex-col justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-ivory-100/80 text-[11px] tracking-[0.25em] uppercase">
              <span className="h-px w-10 bg-copper-300" />
              {hero.eyebrow}
            </div>
            <h1 className="mt-6 font-display text-ivory-50 text-[44px] sm:text-[72px] lg:text-[92px] leading-[0.98] tracking-tight">
              {hero.title}
              <br />
              <span className="italic text-copper-300">{hero.titleItalic}</span>
            </h1>
            <p className="mt-7 max-w-xl text-ivory-100/85 text-[15.5px] sm:text-[17px] leading-relaxed font-light">
              {hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to={hero.cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-ivory-50 text-charcoal-700 text-[11px] tracking-[0.22em] uppercase hover:bg-copper-500 hover:text-ivory-50 transition-all"
              >
                {hero.cta.label}
                <ArrowRight size={14} />
              </Link>
              <Link
                to={hero.secondary.href}
                className="inline-flex items-center gap-2 px-8 py-4 border border-ivory-50/50 text-ivory-50 text-[11px] tracking-[0.22em] uppercase hover:bg-ivory-50 hover:text-charcoal-700 transition-colors"
              >
                {hero.secondary.label}
              </Link>
            </div>

            {/* Rating */}
            <div className="mt-12 flex items-center gap-4 text-ivory-100/85">
              <div className="flex items-center gap-1 text-copper-300">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" />)}
              </div>
              <p className="text-sm font-light">
                <span className="font-medium text-ivory-50">{business.rating}/5</span>
                <span className="mx-2 text-ivory-100/40">·</span>
                {business.reviewCount} guest reviews
              </p>
            </div>
          </div>

          {/* Reservation bar */}
          <div className="mt-12">
            <ReservationBar compact dark />
          </div>
        </div>

        {/* Image index dots */}
        <div className="absolute bottom-8 right-6 z-10 hidden sm:flex flex-col gap-2">
          {hero.images.map((_, i) => (
            <button
              key={i}
              aria-label={`Hero image ${i + 1}`}
              onClick={() => setHeroIdx(i)}
              className={`w-[2px] h-10 transition-all ${i === heroIdx ? 'bg-copper-300' : 'bg-ivory-100/30'}`}
            />
          ))}
        </div>
      </section>

      {/* ============ WELCOME / INTRO ============ */}
      <section className="relative bg-ivory-100 py-24 sm:py-36 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1100px] mx-auto px-5 sm:px-7 lg:px-10 text-center">
          <SectionReveal>
            <p className="font-accent text-3xl sm:text-4xl text-copper-500">
              welcome to the quietest address in Borrowdale
            </p>
          </SectionReveal>
          <SectionReveal delay={150}>
            <h2 className="mt-7 font-display italic text-[36px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-charcoal-700 tracking-tight">
              A small hotel, a walled garden,<br className="hidden sm:block" /> and a quiet idea of what hospitality should feel like.
            </h2>
          </SectionReveal>
          <SectionReveal delay={300}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-0">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-4xl sm:text-5xl text-sage-700">{s.value}</p>
                  <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-charcoal-400">{s.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ SUITES ============ */}
      <section className="relative bg-ivory-50 py-24 sm:py-32">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">The Suites</p>
              <h2 className="font-display italic text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-charcoal-700">
                Eleven rooms. Each a little world of its own.
              </h2>
            </div>
            <Link
              to="/suites"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-sage-700 hover:text-copper-500 transition-colors"
            >
              View all suites
              <ArrowUpRight size={14} />
            </Link>
          </SectionReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {suites.slice(0, 6).map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 80}>
                <SuiteCard suite={s} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AMENITIES MOSAIC ============ */}
      <section className="relative bg-sage-50 py-24 sm:py-32 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">The House</p>
            <h2 className="font-display italic text-[36px] sm:text-[52px] lg:text-[60px] text-charcoal-700 leading-[1.05]">
              Six quiet ways to spend a day.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {amenities.map((a, i) => (
              <SectionReveal key={a.slug} delay={i * 60}>
                <AmenityCard amenity={a} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STORY / ABOUT SPLIT ============ */}
      <section className="relative bg-ivory-100 py-24 sm:py-36 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <SectionReveal className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={aboutStory.image}
                  alt={aboutStory.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-[45%] aspect-square overflow-hidden hidden sm:block">
                <img
                  src={aboutStory.image2}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center border-[6px] border-ivory-100"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">{aboutStory.eyebrow}</p>
              <h2 className="font-display italic text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.1] text-charcoal-700">
                {aboutStory.title}
              </h2>
              <div className="mt-8 space-y-5 text-[15px] text-charcoal-500 leading-relaxed font-light">
                {aboutStory.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-copper-500 hover:text-copper-700 transition-colors group"
              >
                <span className="copper-underline">Read our story</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCES STRIP ============ */}
      <section className="relative bg-charcoal-700 text-ivory-50 py-24 sm:py-32 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.28em] uppercase text-copper-300 mb-4">Slow Hours</p>
              <h2 className="font-display italic text-[36px] sm:text-[52px] lg:text-[60px] leading-[1.05]">
                Small experiences, quietly curated.
              </h2>
            </div>
            <Link
              to="/gardens"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-copper-300 hover:text-ivory-50 transition-colors"
            >
              All experiences
              <ArrowUpRight size={14} />
            </Link>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {experiences.slice(0, 3).map((e, i) => (
              <SectionReveal key={e.slug} delay={i * 80}>
                <article className="group relative overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-600">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1600ms] group-hover:scale-[1.05]"
                      onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <p className="font-accent text-xl text-copper-300 mb-2">{e.priceLabel}</p>
                      <h3 className="font-display italic text-2xl sm:text-[28px] text-ivory-50 leading-tight">
                        {e.title}
                      </h3>
                      <p className="mt-3 text-[13px] text-ivory-100/75 leading-relaxed font-light">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL BIG ============ */}
      <section className="relative bg-ivory-100 py-24 sm:py-36 overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1100px] mx-auto px-5 sm:px-7 lg:px-10">
          <SectionReveal className="text-center">
            <Quotes size={48} className="mx-auto text-sage-300 mb-10" weight="fill" />
            <blockquote className="font-display italic text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.22] text-charcoal-700 text-balance">
              &ldquo;{reviews[0].body}&rdquo;
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-sage-200">
                <img
                  src={reviews[0].avatar}
                  alt={reviews[0].name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-charcoal-700 text-sm">{reviews[0].name}</p>
                <p className="text-xs text-charcoal-400 tracking-wide">{reviews[0].stay}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative bg-charcoal-700 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1800&q=80"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-charcoal-900/65" />
        </div>

        <div className="relative max-w-3xl mx-auto px-5 sm:px-7 lg:px-10 text-center">
          <SectionReveal>
            <p className="font-accent text-3xl sm:text-4xl text-copper-300">
              your room is almost ready
            </p>
            <h2 className="mt-5 font-display italic text-[36px] sm:text-[56px] lg:text-[64px] leading-[1.05] text-ivory-50">
              Stay a night. Stay a week. Stay a while.
            </h2>
            <p className="mt-6 text-ivory-100/80 text-[15px] font-light">
              Rooms from <span className="text-copper-300">$115 / night</span>. Breakfast always included.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 px-9 py-4 bg-copper-500 text-ivory-50 text-[11px] tracking-[0.22em] uppercase hover:bg-copper-600 transition-colors"
              >
                Make a reservation
                <ArrowRight size={14} />
              </Link>
              <a
                href={`https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-9 py-4 border border-ivory-50/50 text-ivory-50 text-[11px] tracking-[0.22em] uppercase hover:bg-ivory-50 hover:text-charcoal-700 transition-colors"
              >
                WhatsApp the desk
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
