import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Not Found — Masawara Urban Retreat" description="That page has wandered off into the garden." />
      <section className="min-h-[80svh] flex items-center justify-center px-5 bg-ivory-100 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519449556851-5720b33024e7?auto=format&fit=crop&w=1800&q=60")',
            backgroundSize: 'cover',
          }}
        />
        <div className="relative text-center max-w-lg">
          <p className="font-accent text-3xl text-copper-500 mb-4">wandered off</p>
          <h1 className="font-display italic text-[72px] sm:text-[112px] text-charcoal-700 leading-[0.95]">
            4<span className="text-sage-600">0</span>4
          </h1>
          <p className="mt-6 text-[15px] text-charcoal-500 font-light leading-relaxed">
            This page must be somewhere in the garden. Let us walk you back to the front desk.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-charcoal-700 text-ivory-50 text-[11px] tracking-[0.22em] uppercase hover:bg-sage-700 transition-colors"
          >
            <ArrowLeft size={14} /> Back to the house
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
