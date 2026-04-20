import React from 'react';
import { Link } from 'react-router-dom';
import { Quotes, ArrowRight, Star } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import SEO from '../components/SEO';
import { aboutStory, team, reviews, business } from '../data/siteData';

export default function About() {
  return (
    <PageTransition>
      <SEO
        title={`Our Story — ${business.name}`}
        description="The house, the garden, the quiet idea behind Masawara Urban Retreat."
      />

      {/* Hero */}
      <section className="relative pt-[84px] pb-16 sm:pb-24 bg-ivory-100 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 pt-16 sm:pt-24">
          <SectionReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">Our Story</p>
            <h1 className="font-display italic text-[44px] sm:text-[72px] lg:text-[92px] leading-[1.02] text-charcoal-700 max-w-4xl">
              The quiet idea<br />
              <span className="text-sage-600">behind a small hotel.</span>
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Story split */}
      <section className="bg-ivory-50 py-20 sm:py-28">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <SectionReveal>
            <div className="relative aspect-[4/5] overflow-hidden lg:sticky lg:top-28">
              <img
                src={aboutStory.image}
                alt="The house"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </SectionReveal>
          <SectionReveal delay={150}>
            <p className="font-accent text-3xl text-copper-500 mb-3">est. 2017</p>
            <h2 className="font-display italic text-[32px] sm:text-[46px] leading-[1.1] text-charcoal-700">
              {aboutStory.title}
            </h2>
            <div className="mt-8 space-y-5 text-[15.5px] text-charcoal-500 font-light leading-relaxed">
              {aboutStory.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <blockquote className="mt-12 pl-6 border-l-2 border-copper-500">
              <Quotes size={24} className="text-copper-500 mb-3" weight="fill" />
              <p className="font-display italic text-2xl sm:text-3xl text-charcoal-700 leading-[1.3]">
                &ldquo;Hospitality is not the house. It is the grace with which you open it.&rdquo;
              </p>
              <footer className="mt-4 text-[12px] tracking-[0.2em] uppercase text-sage-700">
                &mdash; Rumbidzai Munyoro, Founder
              </footer>
            </blockquote>
          </SectionReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ivory-100 py-24 sm:py-32">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">The House Team</p>
            <h2 className="font-display italic text-[34px] sm:text-[48px] leading-[1.08] text-charcoal-700">
              Four people who run the quiet.
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 60}>
                <figure className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-sage-100 mb-5">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <h3 className="font-display italic text-xl sm:text-[22px] text-charcoal-700">{t.name}</h3>
                  <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-copper-500">{t.role}</p>
                  <p className="mt-3 text-[13px] text-charcoal-500 font-light leading-relaxed">{t.bio}</p>
                </figure>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sage-50 py-24 sm:py-32 relative overflow-hidden">
        <div className="grain" />
        <div className="relative max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="text-[11px] tracking-[0.28em] uppercase text-sage-700 mb-4">Guest voices</p>
            <h2 className="font-display italic text-[34px] sm:text-[48px] leading-[1.08] text-charcoal-700">
              What our guests have told us.
            </h2>
          </SectionReveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 space-y-6 sm:space-y-8">
            {reviews.map((r, i) => (
              <SectionReveal key={i} delay={(i % 3) * 60}>
                <article className="break-inside-avoid bg-ivory-50 p-7 sm:p-8 border border-sage-100">
                  <div className="flex items-center gap-1 text-copper-500 mb-4">
                    {[...Array(r.rating)].map((_, k) => <Star key={k} size={13} weight="fill" />)}
                  </div>
                  <h3 className="font-display italic text-xl text-charcoal-700 leading-tight">{r.title}</h3>
                  <p className="mt-4 text-[14px] text-charcoal-500 font-light leading-relaxed">&ldquo;{r.body}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-sage-100">
                    <div className="h-10 w-10 rounded-full overflow-hidden bg-sage-200">
                      <img
                        src={r.avatar}
                        alt={r.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-charcoal-700">{r.name}</p>
                      <p className="text-[11px] text-charcoal-400 tracking-wide">{r.stay} · {r.location}</p>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-100 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-7 lg:px-10 text-center">
          <p className="font-accent text-3xl text-copper-500 mb-4">come for the experience</p>
          <h2 className="font-display italic text-[32px] sm:text-[48px] leading-[1.08] text-charcoal-700">
            Stay for the night.
          </h2>
          <Link
            to="/reservations"
            className="mt-10 inline-flex items-center gap-2 px-9 py-4 bg-charcoal-700 text-ivory-50 text-[11px] tracking-[0.22em] uppercase hover:bg-sage-700 transition-colors"
          >
            Reserve your stay
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
