import React from 'react';
import { Link } from 'react-router-dom';
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { business } from '../data/siteData';
import Wordmark from './Wordmark';

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;
  return (
    <footer className="relative bg-charcoal-700 text-ivory-200 mt-0">
      {/* Botanical top edge */}
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true" className="block w-full h-10 text-ivory-100">
        <path d="M0 60 L0 20 Q360 0 720 20 T1440 20 L1440 60 Z" fill="currentColor" />
      </svg>

      <div className="relative max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-14">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <Wordmark scheme="light" />
            <p className="text-sm text-ivory-200/70 leading-relaxed max-w-xs font-light">
              {business.tagline} A boutique retreat at the end of St Michaels Lane.
            </p>
            <p className="font-accent text-xl text-copper-300">
              Come for the experience, stay for the night.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 border border-ivory-200/20 flex items-center justify-center hover:border-copper-300 hover:text-copper-300 transition-colors">
                <InstagramLogo size={16} />
              </a>
              <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 border border-ivory-200/20 flex items-center justify-center hover:border-copper-300 hover:text-copper-300 transition-colors">
                <FacebookLogo size={16} />
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 border border-ivory-200/20 flex items-center justify-center hover:border-copper-300 hover:text-copper-300 transition-colors">
                <WhatsappLogo size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="font-display italic text-lg mb-5 text-ivory-50">Explore</h4>
            <ul className="space-y-3 text-sm text-ivory-200/70">
              <li><Link to="/suites" className="hover:text-copper-300 transition-colors">Suites</Link></li>
              <li><Link to="/dining" className="hover:text-copper-300 transition-colors">Dining</Link></li>
              <li><Link to="/wellness" className="hover:text-copper-300 transition-colors">Wellness</Link></li>
              <li><Link to="/gardens" className="hover:text-copper-300 transition-colors">Gardens</Link></li>
            </ul>
          </div>

          {/* Stay */}
          <div className="lg:col-span-2">
            <h4 className="font-display italic text-lg mb-5 text-ivory-50">Stay</h4>
            <ul className="space-y-3 text-sm text-ivory-200/70">
              <li><Link to="/reservations" className="hover:text-copper-300 transition-colors">Reservations</Link></li>
              <li><Link to="/about" className="hover:text-copper-300 transition-colors">Our story</Link></li>
              <li><Link to="/contact" className="hover:text-copper-300 transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-copper-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div className="col-span-2 lg:col-span-4">
            <h4 className="font-display italic text-lg mb-5 text-ivory-50">Visit</h4>
            <ul className="space-y-3.5 text-sm text-ivory-200/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-copper-300 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 text-copper-300 shrink-0" />
                <span>
                  Reception · {business.hours.reception}<br />
                  Restaurant · {business.hours.restaurant}<br />
                  Spa · {business.hours.spa}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 text-copper-300 shrink-0" />
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-copper-300">{business.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={16} className="mt-0.5 text-copper-300 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-copper-300">{business.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-ivory-200/15 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-xs text-ivory-200/50 text-center sm:text-left">
          <p>© 2026 {business.name} · Borrowdale, Harare.</p>
          <p>{business.instagramHandle} · {business.rating} stars · {business.reviewCount} reviews</p>
        </div>

        <p className="mt-5 text-center text-[11px] text-ivory-200/40 tracking-[0.14em] uppercase">
          Website by{' '}
          <a href="https://bitstudio.co.zw" target="_blank" rel="noopener noreferrer" className="text-copper-300 hover:underline">
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
