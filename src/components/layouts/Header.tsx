// components/layouts/Header.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export type SectionRefs = {
  hero: React.RefObject<HTMLElement>;
  vision: React.RefObject<HTMLElement>;
  howItWorks: React.RefObject<HTMLElement>;
  whyChooseUs: React.RefObject<HTMLElement>;
  implementation: React.RefObject<HTMLElement>;
  team: React.RefObject<HTMLElement>;
  useCases: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
};

interface HeaderProps {
  scrollToSection: (section: React.RefObject<HTMLElement>) => void;
  sections: SectionRefs;
}

export default function Header({ scrollToSection, sections }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<keyof SectionRefs>('vision');
  const [show, setShow] = useState(true);

  // scroll spy + show/hide header
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      setShow(cur < lastY || cur < 100);
      lastY = cur;
      for (const [k, ref] of Object.entries(sections) as [keyof SectionRefs, React.RefObject<HTMLElement>][]) {
        const el = ref.current;
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 120 && r.bottom > 120) setActive(k);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  const navItems: [keyof SectionRefs, string][] = [
    ['hero', 'Home'],
    ['vision', 'Vision'],
    ['howItWorks', 'How It Works'],
    ['whyChooseUs', 'Why Us'],
    ['implementation', 'Implementation Process'],
    ['team', 'Team'],
    ['OurWork', 'Our Work'],
    ['contact', 'Contact'],
  ];

  const toggleMenu = () => setMenuOpen((o) => !o);
  const handleClick = (key: keyof SectionRefs) => {
    setMenuOpen(false);
    scrollToSection(sections[key]);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -110 }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-40 backdrop-blur-sm bg-white/80 shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <button
          onClick={() => handleClick('hero')}
          className="text-2xl font-extrabold text-indigo-600 focus:outline-none"
        >
          EntropyHub
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className={`relative py-1 text-sm font-medium focus:outline-none transition-colors hover:text-indigo-600 ${
                active === key ? 'text-indigo-600' : 'text-gray-700'
              }`}
            >
              {label}
              {active === key && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-indigo-500 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* CTA & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleClick('contact')}
            className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition"
          >
            Start Pilot
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-sm shadow-inner overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navItems.map(([key, label]) => (
                <li key={key}>
                  <button
                    onClick={() => handleClick(key)}
                    className="text-gray-800 text-base font-medium hover:text-indigo-600 transition"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
