import React from 'react';

export default function WhatIsRag() {
  return (
    <section id="what-is-rag" className="py-28 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img src="/neuralnetwork.png" alt="RAG" className="w-48 h-48 object-contain" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-indigo-700 mb-6">What is Retrieval-Augmented Generation?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Retrieval-Augmented Generation (RAG) is a cutting-edge AI framework combining search and generation. It retrieves relevant data and generates accurate responses, ideal for knowledge management.
          </p>
        </div>
      </div>
    </section>
  );
}