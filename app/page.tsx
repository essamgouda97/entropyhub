"use client";

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header'
import ParticlesBackround from '@/components/ParticlesBackground'
import AboutUs from '@/components/sections/AboutUs'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import React, { useRef } from 'react'

const Home = () => {

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  interface SectionRef {
    current: HTMLElement | null;
  }

  const scrollToSection = (section: React.RefObject<HTMLElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
     <Header
        scrollToSection={scrollToSection}
        sections={{
          services: servicesRef,
          about: aboutUsRef,
          contact: contactRef,
        }}
      />
     <ParticlesBackround />
      <Hero />
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer/>
    </>
  )
}

export default Home