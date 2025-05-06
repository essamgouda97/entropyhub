import React from 'react';

export default function Implementation() {
  return (
    <section id="implementation" className="py-28 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-16">Our Simple & Seamless Implementation Process</h2>

        {/* Timeline Section */}
        <div className="relative">
          {/* Step 1: Discovery */}
          <div className="flex items-center justify-start mb-16">
            <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
              <span className="text-2xl">🔍</span>
            </div>
            <div className="ml-6 max-w-md">
              <h3 className="text-2xl font-semibold text-indigo-700">Step 1: Discovery</h3>
              <p className="text-lg text-gray-600 mt-4">
                We get to know your needs and tailor our solution just for you. It’s all about understanding how we can help.
              </p>
            </div>
          </div>

          {/* Step 2: Setup */}
          <div className="flex items-center justify-end mb-16">
            <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
              <span className="text-2xl">🔧</span>
            </div>
            <div className="ml-6 max-w-md">
              <h3 className="text-2xl font-semibold text-indigo-700">Step 2: Setup</h3>
              <p className="text-lg text-gray-600 mt-4">
                Our team seamlessly integrates RAG into your workflow. We ensure that it fits perfectly and operates smoothly.
              </p>
            </div>
          </div>

          {/* Step 3: Testing */}
          <div className="flex items-center justify-start mb-16">
            <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-6 max-w-md">
              <h3 className="text-2xl font-semibold text-indigo-700">Step 3: Testing</h3>
              <p className="text-lg text-gray-600 mt-4">
                We test everything to make sure it’s running perfectly. From performance to reliability, we’ve got it covered.
              </p>
            </div>
          </div>

          {/* Step 4: Launch */}
          <div className="flex items-center justify-end mb-16">
            <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="ml-6 max-w-md">
              <h3 className="text-2xl font-semibold text-indigo-700">Step 4: Launch</h3>
              <p className="text-lg text-gray-600 mt-4">
                The system is ready to go live, and we’ll be with you every step of the way with full support.
              </p>
            </div>
          </div>

          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-200"></div>
        </div>
      </div>
    </section>
  );
}
