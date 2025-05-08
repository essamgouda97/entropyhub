'use client';
import React, { useState, useEffect } from 'react';

export type SectionRefs = {
  vision: React.RefObject<HTMLElement>;
  whatIsRag: React.RefObject<HTMLElement>;
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
  const [showHeader, setShowHeader] = useState(true);

  // Scroll spy + header show/hide
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(lastY > currentY || currentY < 100);
      lastY = currentY;

      for (const [key, ref] of Object.entries(sections) as [keyof SectionRefs, React.RefObject<HTMLElement>][]) {
        const el = ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActive(key);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  const handleClick = (key: keyof SectionRefs) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(sections[key]);
  };

  const navItems: [keyof SectionRefs, string][] = [
    ['vision', 'Vision'],
    ['whatIsRag', 'How It Works'],
    ['whyChooseUs', 'Why Us'],
    ['implementation', 'Process'],
    ['team', 'Team'],
    ['useCases', 'Use Cases'],
    ['contact', 'Contact'],
  ];

  return (
    <header
      className={`fixed w-full bg-white shadow-sm z-20 transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo / Title */}
        <button onClick={handleClick('vision')} className="text-2xl font-bold text-indigo-700">
          AI Software Solution
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navItems.map(([key, label]) => (
            <li key={key}>
              <button
                onClick={handleClick(key)}
                className={`hover:text-blue-600 transition ${
                  active === key ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center">
          <button
            onClick={handleClick('contact')}
            className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition mr-4"
          >
            Start Pilot
          </button>
          <button className="md:hidden px-2 py-1" onClick={() => setMenuOpen((o) => !o)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow mt-2 flex flex-col items-center gap-4 py-4">
            {navItems.map(([key, label]) => (
              <li key={key}>
                <button onClick={handleClick(key)} className="hover:text-blue-600 transition">
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
