'use client';
import React from 'react';

export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center mb-16">How Our Solution Can Help Your Business</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {/* Law Firm Use Case */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full text-4xl">⚖️</div>
              <h3 className="ml-4 text-xl font-semibold">Accelerate Legal Research</h3>
            </div>
            <p className="text-gray-600">
              Law firms deal with vast amounts of legal data. With our solution, legal teams can quickly retrieve relevant case law and generate accurate summaries, saving hours of manual research.
            </p>
          </div>

          {/* HR Department Use Case */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-4xl">📑</div>
              <h3 className="ml-4 text-xl font-semibold">Streamline Recruitment</h3>
            </div>
            <p className="text-gray-600">
              HR teams can instantly analyze resumes, match candidates to job descriptions, and generate personalized interview questions, improving hiring efficiency and accuracy.
            </p>
          </div>

          {/* Corporate Decision-Making Use Case */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full text-4xl">📊</div>
              <h3 className="ml-4 text-xl font-semibold">Improve Decision-Making</h3>
            </div>
            <p className="text-gray-600">
              Corporate teams can quickly retrieve relevant reports and generate insights, allowing for faster and more informed decision-making.
            </p>
          </div>

          {/* Customer Support Use Case */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full text-4xl">🤖</div>
              <h3 className="ml-4 text-xl font-semibold">Enhance Response Times</h3>
            </div>
            <p className="text-gray-600">
              Customer support teams can automatically retrieve the most relevant articles and generate personalized responses instantly, improving customer satisfaction.
            </p>
          </div>

          {/* E-commerce Business Use Case */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full text-4xl">🛒</div>
              <h3 className="ml-4 text-xl font-semibold">Personalized Recommendations</h3>
            </div>
            <p className="text-gray-600">
              E-commerce businesses can analyze customer behavior and automatically generate product recommendations, creating a personalized shopping experience that drives conversions.
            </p>
          </div>

          {/* Healthcare Use Case */}
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full text-4xl">🩺</div>
              <h3 className="ml-4 text-xl font-semibold">Improve Patient Care</h3>
            </div>
            <p className="text-gray-600">
              Healthcare providers can quickly retrieve patient data, analyze medical research, and generate clinical recommendations based on the latest findings, improving patient care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
