import React from 'react';
import { FaRocket, FaCalendarAlt, FaHeadset } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-transparent bg-opacity-10 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how our AI solutions can automate your workflows and unlock your data's potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          

          {/* Option 2 */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition-all">
            <div className="text-purple-300 mb-4">
              <FaCalendarAlt className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Book a Demo</h3>
            <p className="text-gray-200 mb-6">See our solutions in action with a personalized walkthrough</p>
            <button className="w-full py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all">
              Schedule Now
            </button>
          </div>

          {/* Option 3 */}
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:border-opacity-40 transition-all">
            <div className="text-green-300 mb-4">
              <FaHeadset className="text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Talk to an Expert</h3>
            <p className="text-gray-200 mb-6">Get answers to your specific use cases and requirements</p>
            <button className="w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;