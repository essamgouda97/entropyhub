'use client';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg mb-12">We'd love to hear from you! Whether you have a question, a suggestion, or just want to chat, our team is here to help.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-4 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information  */}
          <div className="text-left">
            <p className="text-lg mb-6">You can also reach us at:</p>
            <ul className="list-none">
              <li className="mb-2">
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li className="mb-2">
                <strong>Email:</strong> contact@company.com
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
