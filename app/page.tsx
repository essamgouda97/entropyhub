'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { useInView } from 'react-intersection-observer';

const Hero = dynamic(() => import('@/components/sections/Hero'), { suspense: true });
const Vision = dynamic(() => import('@/components/sections/Vision'), { suspense: true });
const WhatIsRag = dynamic(() => import('@/components/sections/WhatIsRag'), { suspense: true });
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), { suspense: true });
const Implementation = dynamic(() => import('@/components/sections/Implementation'), { suspense: true });
const Team = dynamic(() => import('@/components/sections/Team'), { suspense: true });
const UseCases = dynamic(() => import('@/components/sections/UseCases'), { suspense: true });
const Contact = dynamic(() => import('@/components/sections/Contact'), { suspense: true });

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

  const Section = ({ children, refProp }: { children: React.ReactNode; refProp: React.RefObject<HTMLElement> }) => {
    const { ref, inView } = useInView({
      triggerOnce: false, // allow it to trigger again when coming back into view
      threshold: 0.1,
    });


    return (
      <div
        ref={(node) => {
          ref(node);
          if (refProp) refProp.current = node;
        }}
        className={`transition-all duration-700 ease-out transform ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    );
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
        <Suspense fallback={<div>Loading...</div>}>
            <Section refProp={visionRef}><Hero /></Section>
            <Section refProp={whatIsRagRef}><Vision /></Section>
            <Section refProp={whyChooseUsRef}><WhatIsRag /></Section>
            <Section refProp={implementationRef}><WhyChooseUs /></Section>
            <Section refProp={teamRef}><Implementation /></Section>
            <Section refProp={useCasesRef}><Team /></Section>
            <Section refProp={contactRef}><UseCases /></Section>
            <Section refProp={contactRef}><Contact /></Section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
