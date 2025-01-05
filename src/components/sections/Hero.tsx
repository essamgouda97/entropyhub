import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-start"
      style={{
        backgroundImage: "url('/connect.png')",
      }}
    >
      <div className="text-start  bg-opacity-50 text-white p-10 rounded-lg  max-w-3xl">
        <h1 className="text-4xl md:text-7xl font-bold">
          Transform Your Ideas Into Reality
        </h1>
        <p className="mt-6 text-xl">
          Our software solutions are designed to help your business innovate,
          grow, and thrive. Let's build something extraordinary together.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white text-xl font-medium rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;