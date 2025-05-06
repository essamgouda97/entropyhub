import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-6">Contact Us</h2>
        <p className="text-lg mb-6">Ready to transform your data access? Reach out to start your pilot.</p>
        <p>Email: <a href="mailto:info@aisoftwaresolution.com" className="text-blue-600 hover:underline">info@aisoftwaresolution.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/company/aisoftwaresolution" className="text-blue-600 hover:underline">linkedin.com/company/aisoftwaresolution</a></p>
      </div>
    </section>
  );
}