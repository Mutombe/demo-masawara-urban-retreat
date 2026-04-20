import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone } from '@phosphor-icons/react';
import { business } from '../data/siteData';
import Wordmark from './Wordmark';

const links = [
  { to: '/', label: 'Home' },
  { to: '/suites', label: 'Suites' },
  { to: '/dining', label: 'Dining' },
  { to: '/wellness', label: 'Wellness' },
  { to: '/gardens', label: 'Gardens' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isHome = loc.pathname === '/';
  const transparent = isHome && !scrolled;

  const waHref = `https://wa.me/${business.whatsapp.replace(/[^0-9]/g, '')}`;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          transparent
            ? 'bg-transparent'
            : 'bg-ivory-100/92 backdrop-blur-md border-b border-sage-100'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-7 lg:px-12 h-[84px] flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-3 group min-w-0" aria-label={business.name}>
            <Wordmark scheme={transparent ? 'light' : 'dark'} />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-[13px] tracking-[0.12em] uppercase transition-colors ${
                    transparent
                      ? isActive ? 'text-ivory-50' : 'text-ivory-100/85 hover:text-ivory-50'
                      : isActive ? 'text-sage-700' : 'text-charcoal-500 hover:text-sage-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className={`absolute -bottom-2 left-0 right-0 h-px ${transparent ? 'bg-copper-300' : 'bg-copper-500'}`} />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              aria-label="Call"
              className={`hidden sm:flex h-10 w-10 items-center justify-center transition-colors ${
                transparent ? 'text-ivory-50 hover:text-copper-300' : 'text-charcoal-500 hover:text-sage-700'
              }`}
            >
              <Phone size={18} />
            </a>
            <Link
              to="/reservations"
              className={`hidden md:inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase border transition-all ${
                transparent
                  ? 'border-ivory-100/40 text-ivory-50 hover:bg-ivory-50 hover:text-charcoal-700'
                  : 'border-charcoal-700 text-charcoal-700 hover:bg-charcoal-700 hover:text-ivory-50'
              }`}
            >
              Reserve
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`h-10 w-10 flex lg:hidden items-center justify-center ${transparent ? 'text-ivory-50' : 'text-charcoal-700'}`}
            >
              <List size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-900/50" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-ivory-100 flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-7 h-[84px] border-b border-sage-100">
            <Wordmark scheme="dark" small />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="h-10 w-10 flex items-center justify-center">
              <X size={22} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-7 py-10 gap-2">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3 font-display text-3xl italic transition-colors ${isActive ? 'text-sage-700' : 'text-charcoal-700'}`
                }
                style={{ animation: `fade-in-up 0.4s ease-out ${i * 50}ms both` }}
              >
                {l.label}
              </NavLink>
            ))}
            <p className="mt-6 font-accent text-xl text-copper-500">
              A hushed green hour from the city.
            </p>
          </nav>
          <div className="px-7 py-6 border-t border-sage-100 space-y-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-sage-600 text-ivory-50 py-3.5 text-xs tracking-[0.18em] uppercase hover:bg-sage-700 transition-colors"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp the front desk
            </a>
            <a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full flex items-center justify-center gap-2 border border-charcoal-700 text-charcoal-700 py-3.5 text-xs tracking-[0.18em] uppercase hover:bg-charcoal-700 hover:text-ivory-50 transition-colors"
            >
              <Phone size={14} />
              {business.phone}
            </a>
            <p className="pt-2 text-[11px] text-charcoal-400 text-center tracking-wide">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
