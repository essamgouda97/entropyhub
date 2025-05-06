import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-24 overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4">Unlock Your Data Potential</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Imagine asking any question and getting precise answers in seconds—powered by our proprietary RAG AI.</p>
        <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition">
          Start Your Pilot
        </a>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-24">
          <path fill="#f7f8fa" fillOpacity="1" d="M0,160L60,149.3C120,139,240,117,360,122.7C480,128,600,160,720,170.7C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}