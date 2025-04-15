"use client";

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header'
import ParticlesBackround from '@/components/ParticlesBackground'
import AboutUs from '@/components/sections/AboutUs'
import CallToAction from '@/components/sections/CallToAction';
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem';
import SalesPipeline from '@/components/sections/SalesPipeline';
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testmonials';
import React, { useRef } from 'react'

const Home = () => {

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  const ProblemRef = useRef(null);

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
          problem: ProblemRef,
          services: servicesRef,
          about: aboutUsRef,
          contact: contactRef,
        }}
      />
     <ParticlesBackround />
      <Hero />
      <div ref={ProblemRef}>
        <Problem />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <SalesPipeline />
      <Testimonials />
      <CallToAction />
      <Footer/>
    </>
  )
}

export default Home