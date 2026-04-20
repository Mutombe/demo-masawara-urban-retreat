import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bed, UsersThree, Ruler } from '@phosphor-icons/react';

export default function SuiteCard({ suite, index = 0 }) {
  return (
    <Link
      to="/reservations"
      state={{ suite: suite.slug }}
      className="block group relative overflow-hidden bg-ivory-50 transition-all duration-500 hover:shadow-[0_18px_48px_-20px_rgba(43,43,37,0.18)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-sage-100">
        <img
          src={suite.image}
          alt={suite.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1400ms] group-hover:scale-[1.045]"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/45 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] uppercase text-ivory-50 bg-charcoal-900/35 backdrop-blur px-3 py-1.5">
          {suite.kicker}
        </span>
        <span className="absolute top-4 right-4 font-accent text-2xl text-ivory-50">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display italic text-2xl sm:text-[26px] text-charcoal-700 leading-tight">
            {suite.name}
          </h3>
          <span className="shrink-0 mt-1 h-8 w-8 flex items-center justify-center border border-sage-200 text-sage-700 group-hover:bg-sage-600 group-hover:text-ivory-50 group-hover:border-sage-600 transition-all">
            <ArrowUpRight size={14} />
          </span>
        </div>
        <p className="mt-3 text-[13.5px] text-charcoal-400 leading-relaxed font-light">
          {suite.teaser}
        </p>
        <div className="mt-5 pt-5 border-t border-sage-100 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] tracking-wider text-charcoal-400 uppercase">
            <span className="flex items-center gap-1.5"><Ruler size={13} /> {suite.size}</span>
            <span className="flex items-center gap-1.5"><UsersThree size={13} /> {suite.sleeps}</span>
            <span className="hidden sm:flex items-center gap-1.5"><Bed size={13} /> {suite.bed}</span>
          </div>
          <div className="text-right">
            <p className="font-display text-xl text-copper-500">${suite.price}</p>
            <p className="text-[10px] tracking-wider text-charcoal-400 uppercase">per night</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
