import React from 'react';
import { Card } from '../ui/card';

const Hero = () => {
  return (
    <section
      className="relative h-screen w-screen flex items-center justify-start"
    >
      <div className="text-start  bg-opacity-50 text-white p-10 rounded-lg  max-w-4xl">
        <h1 className="text-4xl md:text-8xl font-bold">
          Transform Your Ideas Into Reality
        </h1>
        <p className="mt-6 text-2xl">
          Our software solutions are designed to help your business innovate,
          grow, and thrive. Let's build something extraordinary together.
        </p>
        
        <div className="mt-10  ">
        
          <a
            href="#contact"
            className="px-6 py-4 bg-black bg-opacity-40 text-white text-3xl font-medium rounded-lg shadow hover:bg-black focus:ring-2 focus:outline-none"
          >
            Get Started
           
           
          </a>
        
        </div>
       
      </div>
    </section>
  );
};

export default Hero;