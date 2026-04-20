import React from 'react';

// Text wordmark — no external image. The copper underline + tiny leaf
// do the logo work.
export default function Wordmark({ scheme = 'dark', small = false }) {
  const base = scheme === 'light' ? 'text-ivory-50' : 'text-charcoal-700';
  const accent = scheme === 'light' ? 'text-copper-300' : 'text-copper-500';
  const stroke = scheme === 'light' ? 'stroke-copper-300' : 'stroke-copper-500';

  const primarySize = small ? 'text-[22px]' : 'text-[26px] sm:text-[28px]';

  return (
    <span className="flex items-baseline gap-2 select-none">
      <span className="flex flex-col leading-none">
        <span className={`font-display italic font-medium tracking-tight ${primarySize} ${base}`}>
          Masawara
          <svg
            viewBox="0 0 100 8"
            aria-hidden="true"
            className={`block w-full h-[5px] mt-0.5 ${stroke}`}
            fill="none"
            strokeWidth="1"
          >
            <path d="M0 4 Q25 1 50 4 T100 4" strokeLinecap="round" />
            <circle cx="93" cy="4" r="1.2" className={scheme === 'light' ? 'fill-copper-300' : 'fill-copper-500'} stroke="none" />
          </svg>
        </span>
        <span className={`mt-1.5 font-body text-[9px] tracking-[0.32em] uppercase ${accent}`}>
          Urban Retreat
        </span>
      </span>
    </span>
  );
}
