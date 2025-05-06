import React from 'react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-28 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center mb-16">Why Choose Our Solution?</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full"><img src="/connect.png" alt="Integration icon" className="w-6 h-6" /></div>
              <h3 className="ml-4 text-xl font-semibold">Seamless Integration</h3>
            </div>
            <p className="text-gray-600">Integrate our RAG system with your existing tools and workflows with minimal effort.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full"><img src="/robot.png" alt="Performance icon" className="w-6 h-6" /></div>
              <h3 className="ml-4 text-xl font-semibold">High Performance</h3>
            </div>
            <p className="text-gray-600">Enjoy fast, reliable data retrieval and response generation at enterprise scale.</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full"><img src="/shield.png" alt="Support icon" className="w-6 h-6" /></div>
              <h3 className="ml-4 text-xl font-semibold">Expert Support</h3>
            </div>
            <p className="text-gray-600">Our team provides dedicated support and customization for your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}