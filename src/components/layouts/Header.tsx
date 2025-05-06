'use client';
import React, { useState } from 'react';

type SectionRefs = {
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
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleClick = (ref: React.RefObject<HTMLElement>) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setMenuOpen(false);
      scrollToSection(ref);
    };
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-20">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-2xl font-bold text-indigo-700" onClick={handleClick(sections.vision)}>
          AI Software Solution
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          <li><a href="#vision" onClick={handleClick(sections.vision)} className="hover:text-blue-600">Vision</a></li>
          <li><a href="#what-is-rag" onClick={handleClick(sections.whatIsRag)} className="hover:text-blue-600">How It Works</a></li>
          <li><a href="#why-choose-us" onClick={handleClick(sections.whyChooseUs)} className="hover:text-blue-600">Why Us</a></li>
          <li><a href="#implementation" onClick={handleClick(sections.implementation)} className="hover:text-blue-600">Process</a></li>
          <li><a href="#team" onClick={handleClick(sections.team)} className="hover:text-blue-600">Team</a></li>
          <li><a href="#use-cases" onClick={handleClick(sections.useCases)} className="hover:text-blue-600">Use Cases</a></li>
          <li><a href="#contact" onClick={handleClick(sections.contact)} className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center">
          <button onClick={handleClick(sections.contact)} className="hidden md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition mr-4">
            Start Pilot
          </button>
          <button className="md:hidden px-2 py-1 focus:outline-none" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <ul id="mainMenu" className="md:hidden absolute top-full left-0 w-full bg-white shadow mt-2 flex flex-col items-center gap-4 py-4">
            <li><a href="#vision" onClick={handleClick(sections.vision)} className="hover:text-blue-600">Vision</a></li>
            <li><a href="#what-is-rag" onClick={handleClick(sections.whatIsRag)} className="hover:text-blue-600">How It Works</a></li>
            <li><a href="#why-choose-us" onClick={handleClick(sections.whyChooseUs)} className="hover:text-blue-600">Why Us</a></li>
            <li><a href="#implementation" onClick={handleClick(sections.implementation)} className="hover:text-blue-600">Process</a></li>
            <li><a href="#team" onClick={handleClick(sections.team)} className="hover:text-blue-600">Team</a></li>
            <li><a href="#use-cases" onClick={handleClick(sections.useCases)} className="hover:text-blue-600">Use Cases</a></li>
            <li><a href="#contact" onClick={handleClick(sections.contact)} className="hover:text-blue-600">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
}