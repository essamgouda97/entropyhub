import React from 'react';

export default function Vision() {
  return (
    <section id="vision" className="py-28 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We aim to empower businesses with intelligent and intuitive data systems that reduce operational delays and make decision-making faster and smarter. Our tools serve as a bridge between raw data and actionable insight.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/ourvision.jpg"
            alt="Vision"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
}