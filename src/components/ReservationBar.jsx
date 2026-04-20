import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, UsersThree, MoonStars, ArrowRight } from '@phosphor-icons/react';

export default function ReservationBar({ compact = false, dark = false }) {
  const nav = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  const [form, setForm] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: 2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(form).toString();
    nav(`/reservations?${params}`);
  };

  const base = dark
    ? 'bg-charcoal-700/80 text-ivory-50 border-ivory-100/20'
    : 'bg-ivory-50 text-charcoal-700 border-sage-100';

  const input = dark
    ? 'bg-transparent border-b border-ivory-100/25 text-ivory-50 focus:border-copper-300'
    : 'bg-transparent border-b border-sage-200 text-charcoal-700 focus:border-sage-600';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${base} ${compact ? 'p-4' : 'p-6 sm:p-7'} border backdrop-blur-xl grid grid-cols-1 sm:grid-cols-[1fr_1fr_0.7fr_auto] gap-5 sm:gap-7 items-end`}
    >
      <label className="block">
        <span className={`flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase ${dark ? 'text-ivory-100/70' : 'text-charcoal-400'} mb-2`}>
          <Calendar size={12} />
          Arriving
        </span>
        <input
          type="date"
          value={form.checkIn}
          min={today}
          onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
          className={`w-full pb-2 text-[15px] outline-none ${input}`}
        />
      </label>

      <label className="block">
        <span className={`flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase ${dark ? 'text-ivory-100/70' : 'text-charcoal-400'} mb-2`}>
          <MoonStars size={12} />
          Departing
        </span>
        <input
          type="date"
          value={form.checkOut}
          min={form.checkIn}
          onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
          className={`w-full pb-2 text-[15px] outline-none ${input}`}
        />
      </label>

      <label className="block">
        <span className={`flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase ${dark ? 'text-ivory-100/70' : 'text-charcoal-400'} mb-2`}>
          <UsersThree size={12} />
          Guests
        </span>
        <select
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
          className={`w-full pb-2 text-[15px] outline-none ${input}`}
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n} className="bg-ivory-50 text-charcoal-700">{n} guest{n > 1 ? 's' : ''}</option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-sage-600 text-ivory-50 text-[11px] tracking-[0.2em] uppercase hover:bg-sage-700 transition-colors"
      >
        Check availability
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
