'use client';
import { lenisInstance } from './SmoothScroll';

const handleNavClick = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (target && lenisInstance) {
    lenisInstance.scrollTo(target, { offset: 0, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  }
};

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-24 z-50 pointer-events-none">
      {/* Logo (top left) */}
      <div className="absolute top-4 left-4 pointer-events-auto">
        <div className="w-10 h-10 bg-[#c6bba7] rounded-full flex items-center justify-center">
          <span className="text-2xl">🐱</span>
        </div>
      </div>
      {/* Vertical Nav (right) */}
      <div className="fixed top-8 right-8 flex flex-col items-end space-y-2 bg-transparent pointer-events-auto">
        <a href="#hero" onClick={e => handleNavClick(e, 'hero')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">Home</a>
        <a href="#about" onClick={e => handleNavClick(e, 'about')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">About</a>
        <a href="#services" onClick={e => handleNavClick(e, 'services')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">Services</a>
        <a href="#contact" onClick={e => handleNavClick(e, 'contact')} className="uppercase tracking-widest text-[#c6bba7] text-lg font-darker-grotesque hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
} 