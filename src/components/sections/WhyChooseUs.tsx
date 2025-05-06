'use client';
import React from 'react';

const features = [
  {
    emoji: '🔌',
    title: 'Seamless Integration',
    description:
      'Connect with your existing systems effortlessly using modern APIs and flexible architecture.',
  },
  {
    emoji: '⚡',
    title: 'High Performance',
    description:
      'Experience fast, reliable data retrieval and intelligent generation at enterprise scale.',
  },
  {
    emoji: '🧠',
    title: 'Expert Support',
    description:
      'Get guidance from seasoned engineers to ensure smooth deployment and tailored solutions.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-indigo-500 font-semibold uppercase tracking-wider mb-4">Why Choose Us</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">
          Designed for teams that value speed and simplicity
        </h2>
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-left bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
