'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Terminal, Network } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900"
    >
      {/* Neural Connections Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path
            d="M50 300 Q 200 250 350 300"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-blue-400/20"
          />
          <path
            d="M100 400 Q 250 350 400 400"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-purple-400/20"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full backdrop-blur-lg border border-blue-500/20"
      >
        <Terminal className="w-full h-full p-8 text-blue-400/40" />
      </motion.div>

      {/* Gradient Overlays */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full filter blur-3xl opacity-20"
      />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mb-8">
            <Network className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
              Connect With Our Neural Core
            </span>
          </div>
          <h2 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 pb-[0.2em]">
            Power Your Project
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's architect intelligent solutions together. Reach out to our neural network specialists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all text-gray-200 placeholder-gray-400"
                  placeholder="Enter your neural signature"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all text-gray-200 placeholder-gray-400"
                  placeholder="your.signal@frequency.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 rounded-lg border border-white/10 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/20 transition-all text-gray-200 placeholder-gray-400"
                  placeholder="Transmit your query..."
                ></textarea>
              </div>

              <button className="w-full relative overflow-hidden px-8 py-4 font-semibold text-white border-2 border-indigo-600 rounded-full group transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Initiate Connection
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 transition-transform duration-500 ease-in-out group-hover:-translate-y-full" />
                <span className="absolute inset-0 bg-white/10 transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-0" />
              </button>
            </form>
          </motion.div>

          {/* Contact Channels */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Direct Neural Links
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                    <Phone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Synaptic Frequency</p>
                    <p className="text-indigo-300">+1 (555) 010-0110</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Data Stream</p>
                    <p className="text-blue-300">connect@neuralcore.ai</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Network Nodes
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all hover:border-indigo-400 group"
                >
                  <FaLinkedin className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                </a>
                <a
                  href="https://instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-all hover:border-pink-400 group"
                >
                  <FaInstagram className="w-6 h-6 text-pink-400 group-hover:text-pink-300 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Particles */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  );
}