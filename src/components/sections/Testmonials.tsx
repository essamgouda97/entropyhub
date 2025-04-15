import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechNova Solutions",
    content: "The AI agents completely transformed our customer support operations. Response times improved by 70% while maintaining 98% accuracy. The implementation team was exceptional throughout the process.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "Director of Operations, FinEdge",
    content: "Our RAG system has become the knowledge backbone of our organization. It reduced research time for our analysts from hours to minutes. The customization options were exactly what we needed.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "David Rodriguez",
    role: "Enterprise Architect, GlobalBank",
    content: "The security features and scalability of the solution gave us confidence to deploy across all regional offices. Their team's understanding of financial compliance requirements was impressive.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-transparent to-black">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by innovative enterprises across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black bg-opacity-80 rounded-xl p-8 backdrop-blur-sm border border-gray-700 hover:border-yellow-400 transition-all"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="text-gray-300 mb-6 relative">
                <FaQuoteLeft className="text-blue-500 opacity-20 text-3xl absolute -top-2 -left-1" />
                <p className="relative z-10">{testimonial.content}</p>
              </div>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i}
                    className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all">
            Read More Case Studies
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;