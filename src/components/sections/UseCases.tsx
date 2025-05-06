import React from 'react';

export default function UseCases() {
  return (
    <section id="use-cases" className="py-28 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center mb-16">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Customer Support', text: 'Automate responses by retrieving data from your knowledge base and generating human-like answers.' },
            { title: 'Legal Tech', text: 'Accelerate contract review by summarizing clauses and highlighting critical changes instantly.' },
            { title: 'Financial Insights', text: 'Query financial reports in natural language to get quick insights from P&L and balance sheets.' },
          ].map(({ title, text }) => (
            <div key={title} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}