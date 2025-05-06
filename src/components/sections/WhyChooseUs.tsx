import React from 'react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-28 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center mb-16">Why Choose Our Solution?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-3">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
            <p className="text-gray-600">Integrate our RAG system with your existing tools and workflows with minimal effort.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-gray-600">Enjoy fast, reliable data retrieval and response generation at enterprise scale.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="text-4xl mb-3">🛠️</div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Our team provides dedicated support and customization for your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
