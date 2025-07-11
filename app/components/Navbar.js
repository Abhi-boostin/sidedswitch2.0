'use client';
import { lenisInstance } from './SmoothScroll';
import { useState } from 'react';

const handleNavClick = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (target && lenisInstance) {
    lenisInstance.scrollTo(target, { offset: 0, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  }
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full h-24 z-50 pointer-events-auto">
      {/* Logo (top left) */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="w-10 h-10 bg-[#c6bba7] rounded-full flex items-center justify-center">
          <span className="text-2xl">🐱</span>
        </div>
      </div>
      {/* Menu icon for mobile */}
      <button
        className="md:hidden absolute top-6 right-6 z-50 pointer-events-auto"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
      >
        {/* Menu icon (3 bars) */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c6bba7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
      </button>
      {/* Vertical Nav (right) - desktop */}
      <div className="hidden md:fixed md:top-8 md:right-8 md:flex md:flex-col md:items-end md:space-y-2 bg-transparent pointer-events-auto">
        <a href="#hero" onClick={e => handleNavClick(e, 'hero')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">Home</a>
        <a href="#about" onClick={e => handleNavClick(e, 'about')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">About</a>
        <a href="#services" onClick={e => handleNavClick(e, 'services')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">Services</a>
        <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">Contact</a>
      </div>
      {/* Mobile Drawer Nav */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-95 flex flex-col items-end pt-8 pr-6 z-50 md:hidden pointer-events-auto transition-all shadow-2xl">
          {/* Close button */}
          <button
            className="mb-8"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c6bba7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <a href="#hero" onClick={e => { handleNavClick(e, 'hero'); setMenuOpen(false); }} className="uppercase tracking-widest text-[#c6bba7] text-xl font-darker-grotesque hover:text-white transition-colors mb-6">Home</a>
          <a href="#about" onClick={e => { handleNavClick(e, 'about'); setMenuOpen(false); }} className="uppercase tracking-widest text-[#c6bba7] text-xl font-darker-grotesque hover:text-white transition-colors mb-6">About</a>
          <a href="#services" onClick={e => { handleNavClick(e, 'services'); setMenuOpen(false); }} className="uppercase tracking-widest text-[#c6bba7] text-xl font-darker-grotesque hover:text-white transition-colors mb-6">Services</a>
          <a href="#contact" onClick={e => { handleNavClick(e, 'contact'); setMenuOpen(false); }} className="uppercase tracking-widest text-[#c6bba7] text-xl font-darker-grotesque hover:text-white transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
} 