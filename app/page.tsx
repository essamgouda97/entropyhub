'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { useInView } from 'react-intersection-observer';

const Hero = dynamic(() => import('@/components/sections/Hero'), { loading: () => <p>Loading...</p> });
const Vision = dynamic(() => import('@/components/sections/Vision'), { loading: () => <p>Loading...</p> });
const WhatIsRag = dynamic(() => import('@/components/sections/WhatIsRag'), { loading: () => <p>Loading...</p> });
const WhyChooseUs = dynamic(() => import('@/components/sections/WhyChooseUs'), { loading: () => <p>Loading...</p> });
const Implementation = dynamic(() => import('@/components/sections/Implementation'), { loading: () => <p>Loading...</p> });
const Team = dynamic(() => import('@/components/sections/Team'), { loading: () => <p>Loading...</p> });
const UseCases = dynamic(() => import('@/components/sections/UseCases'), { loading: () => <p>Loading...</p> });
const Contact = dynamic(() => import('@/components/sections/Contact'), { loading: () => <p>Loading...</p> });

export default function Home() {
  const heroRef = React.useRef<HTMLElement>(null);
  const visionRef = React.useRef<HTMLElement>(null);
  const whatIsRagRef = React.useRef<HTMLElement>(null);
  const whyChooseUsRef = React.useRef<HTMLElement>(null);
  const implementationRef = React.useRef<HTMLElement>(null);
  const teamRef = React.useRef<HTMLElement>(null);
  const useCasesRef = React.useRef<HTMLElement>(null);
  const contactRef = React.useRef<HTMLElement>(null);

  const scrollToSection = (section: React.RefObject<HTMLElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const Section = ({ children, refProp }: { children: React.ReactNode; refProp: React.RefObject<HTMLElement> }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

    return (
      <div
        ref={(node) => {
          ref(node);
          if (refProp) (refProp as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={`scroll-mt-24 transition-all duration-700 ease-out transform ${
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
          hero:     heroRef,
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
          <Section refProp={heroRef}><Hero /></Section>
          <Section refProp={visionRef}><Vision /></Section>
          <Section refProp={whatIsRagRef}><WhatIsRag /></Section>
          <Section refProp={whyChooseUsRef}><WhyChooseUs /></Section>
          <Section refProp={implementationRef}><Implementation /></Section>
          <Section refProp={teamRef}><Team /></Section>
          <Section refProp={useCasesRef}><UseCases /></Section>
          <Section refProp={contactRef}><Contact /></Section>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
