import React from 'react';
import Logo from '../ui/Logo';

const Footer = () => {
  const services = [
    { icon: "📱", title: "App Development", description: "Custom mobile and web applications tailored to your needs." },
    { icon: "🎨", title: "Web Design", description: "Modern, responsive, and user-friendly website designs." },
    { icon: "🤖", title: "Automation Systems", description: "Streamline your workflows with smart automation solutions." },
    { icon: "📊", title: "Data Analysis", description: "Turn raw data into actionable insights with our analysis services." },
    { icon: "🔍", title: "RAG Systems", description: "Cutting-edge retrieval-augmented generation systems for intelligent solutions." },
    { icon: "☁️", title: "Cloud Solutions", description: "Scalable and secure cloud services for your business." },
  ]
  return (
    <footer className="bg-gradient-to-b to-black via-black from-transparent  bg-opacity-10 py-10 border-t border-zinc-500">
      <div className="container mx-auto flex flex-wrap justify-between text-white">
        {/* Logo Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <Logo/>
          <p className='mt-8'>Building solutions for a better tomorrow.</p>
        </div>

        {/* Services Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
          {services.map((service, index) => (
                    
                      <li className=" ">{service.title}</li>
                  ))}
          </ul>
        </div>

        {/* About Us Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Email: entropyhub@tech.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 1234 Main St, City</li>
            <li>Support: support@entropyhub.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
