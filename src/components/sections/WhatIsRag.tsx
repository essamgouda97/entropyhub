'use client';
import React from 'react';

export default function WhatIsRag() {
  return (
    <section className="py-32 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-indigo-500 font-semibold uppercase tracking-wider mb-4">Technology</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Retrieval-Augmented Generation?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            RAG combines traditional search techniques with the power of AI language models. It retrieves relevant data from
            trusted sources in real time and feeds it into a generation model to produce grounded, context-aware answers.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            src="/whatisrag.jpg"
            alt="Retrieval-Augmented Generation illustration"
            className="w-full max-w-md rounded-xl shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
