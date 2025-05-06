// app/page.tsx
'use client';

import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Hero from '@/components/sections/Hero';
import Vision from '@/components/sections/Vision';
import WhatIsRag from '@/components/sections/WhatIsRag';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Implementation from '@/components/sections/Implementation';
import Team from '@/components/sections/Team';
import UseCases from '@/components/sections/UseCases';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const visionRef = React.useRef<HTMLElement>(null);
  const whatIsRagRef = React.useRef<HTMLElement>(null);
  const whyChooseUsRef = React.useRef<HTMLElement>(null);
  const implementationRef = React.useRef<HTMLElement>(null);
  const teamRef = React.useRef<HTMLElement>(null);
  const useCasesRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);

  const scrollToSection = (section: React.RefObject<HTMLElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        sections={{
          vision: visionRef,
          whatIsRag: whatIsRagRef,
          whyChooseUs: whyChooseUsRef,
          implementation: implementationRef,
          team: teamRef,
          useCases: useCasesRef,
          contact: contactRef,
        }}
      />

      <main>
        <div ref={visionRef}><Hero /></div>
        <div ref={whatIsRagRef}><Vision /></div>
        <div ref={whyChooseUsRef}><WhatIsRag /></div>
        <div ref={implementationRef}><WhyChooseUs /></div>
        <div ref={teamRef}><Implementation /></div>
        <div ref={useCasesRef}><Team /></div>
        <div ref={contactRef}><UseCases /></div>
        <Contact />
      </main>

      <Footer />
    </>
  );
}
