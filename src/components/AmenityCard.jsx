import React from 'react';
import * as Icons from '@phosphor-icons/react';

export default function AmenityCard({ amenity }) {
  // Fallback icon if the named one doesn't exist
  const Icon = Icons[amenity.icon] || Icons.Leaf;

  return (
    <article className="group relative overflow-hidden bg-ivory-50 border border-sage-100 transition-all duration-500 hover:border-sage-300">
      <div className="relative aspect-[3/2] overflow-hidden bg-sage-100">
        <img
          src={amenity.image}
          alt={amenity.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1600ms] group-hover:scale-[1.06]"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />
        <div className="absolute bottom-4 left-4 h-11 w-11 flex items-center justify-center bg-ivory-50 text-sage-700">
          <Icon size={20} weight="thin" />
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-display italic text-2xl text-charcoal-700 leading-tight">
          {amenity.title}
        </h3>
        <p className="mt-3 text-[13.5px] text-charcoal-400 leading-relaxed font-light">
          {amenity.summary}
        </p>
      </div>
    </article>
  );
}
