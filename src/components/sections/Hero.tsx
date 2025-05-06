'use client';
import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-100 px-6"
    >
      <div className="text-center max-w-3xl">
        <p className="text-indigo-500 font-semibold uppercase tracking-wider mb-4">
          Introducing RAG Intelligence
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Supercharged Retrieval<br />
          for Smarter AI Workflows
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Revolutionize your operations with blazing-fast, reliable knowledge retrieval powered by RAG.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-full bg-indigo-600 text-white text-lg font-medium shadow-md hover:bg-indigo-700 transition"
        >
          Start Building →
        </a>
      </div>
    </section>
  );
}
