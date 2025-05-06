import React from 'react';

export default function Implementation() {
  return (
    <section id="implementation" className="py-28 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-700 text-center mb-16">Our Implementation Process</h2>
        <div className="relative">
          <div className="border-l-2 border-indigo-200 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-12">
            {[
              { step: 1, title: 'Discovery', text: 'We analyze your needs, data sources, and goals to tailor the solution.', img: '/hacker.png', align: 'right' },
              { step: 2, title: 'Integration', text: 'Seamlessly connect your data sources and configure the RAG pipeline.', img: '/codeeditor.png', align: 'left' },
              { step: 3, title: 'Testing & Validation', text: 'Rigorous testing ensures accuracy, performance, and user satisfaction.', img: '/features.jpg', align: 'right' },
              { step: 4, title: 'Deployment & Support', text: 'We deploy your solution and provide ongoing support and improvements.', img: '/datacenter.png', align: 'left' },
            ].map(({ step, title, text, img, align }) => (
              <div key={step} className={`flex flex-col md:flex-row items-center fade-in ${align === 'left' ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:px-8 text-${align === 'left' ? 'left' : 'right'}">
                  <div className="inline-block bg-indigo-${step === 1 ? '600' : step === 2 ? '700' : step === 3 ? '800' : '900'} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mb-4">{step}</div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
                <div className="md:w-1/2">
                  <img src={img} alt={title} className="w-40 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}