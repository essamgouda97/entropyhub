import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 text-center bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-[#44b8c5] mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-8">Learn why we are the best choice for your business.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Items */}
          <div className="space-y-8">
            {[
              { icon: "/icons/experience-50.png", title: "Expertise", description:  "Leverage our extensive experience to achieve exceptional outcomes and drive meaningful results." },
              { icon: "/icons/bulb-64.png", title: "Innovative Solutions", description: "Benefit from cutting-edge products meticulously designed to meet your unique requirements." },
              { icon: "/icons/plan-50.png", title: "Strategic Approach", description: "We prioritize a customer-first methodology, delivering tailored solutions that align with your goals." },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>
                  <img src={item.icon} alt={item.title} className="w-20 h-auto mt-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 text-start">{item.title}</h3>
                  <p className="text-gray-600 text-start">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Image */}
          <div className="hidden lg:block">
            <img
              src="/features.jpg"
              alt="Why Choose Us"
              className="mx-auto w-full max-w-sm hover:scale-105"
            />
          </div>

          {/* Right Items */}
          <div className="space-y-8">
            {[
              { icon: "/icons/price-80.png", title: "Value-Driven Pricing", description: "Access premium services at competitive rates, ensuring maximum value for your investment." },
              { icon: "/icons/delivery-80.png", title: "Reliable Delivery", description: "Count on us for punctual and seamless delivery, ensuring your projects stay on schedule." },
              { icon: "/icons/support-80.png", title: "Exceptional Support", description: "Enjoy round-the-clock assistance from our dedicated team, committed to your success." },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>
                  <img src={item.icon} alt={item.title} className="w-20 h-auto mt-2" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-start text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-start">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;