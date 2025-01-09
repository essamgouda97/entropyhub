import React from 'react'
import WhyChooseUs from '../widgets/WhyChooseUs'

const Services = () => {

  const services = [
    { icon: "📱", title: "App Development", description: "Custom mobile and web applications tailored to your needs." },
    { icon: "🎨", title: "Web Design", description: "Modern, responsive, and user-friendly website designs." },
    { icon: "🤖", title: "Automation Systems", description: "Streamline your workflows with smart automation solutions." },
    { icon: "📊", title: "Data Analysis", description: "Turn raw data into actionable insights with our analysis services." },
    { icon: "🔍", title: "RAG Systems", description: "Cutting-edge retrieval-augmented generation systems for intelligent solutions." },
    { icon: "☁️", title: "Cloud Solutions", description: "Scalable and secure cloud services for your business." },
  ]
  return (
    <section className="py-10 bg-slate-900 ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-semibold text-center text-[#78dce8] mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-600 p-6 rounded-lg shadow hover:shadow-md transition duration-300 text-center hover:scale-105"
          >
            <div className="text-5xl p-8">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-[#78dce8]">{service.title}</h3>
            <p className="text-slate-200 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <WhyChooseUs/>
  </section>
  
  )
}

export default Services