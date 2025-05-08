'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BrainCircuit, Code, Rocket } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900"
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path
            d="M50 100 Q 200 50 350 100"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-blue-400/20"
          />
          <path
            d="M50 200 Q 250 150 450 200"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-purple-400/20"
          />
          <path
            d="M100 300 Q 200 250 300 300"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-indigo-400/20"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full backdrop-blur-lg border border-blue-500/20"
      >
        <BrainCircuit className="w-full h-full p-8 text-blue-400/40" />
      </motion.div>

      <motion.div
        style={{ y: y2, rotate }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full backdrop-blur-lg border border-purple-500/20"
      >
        <Code className="w-full h-full p-8 text-purple-400/40" />
      </motion.div>

      {/* Gradient Backgrounds */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full filter blur-3xl opacity-40"
      />
      <motion.div
        style={{ y: y2, scale }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-2xl opacity-30"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 mx-auto"
        >
          <Rocket className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">
            Now powered by RAG 2.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 bg-clip-text text-transparent leading-[1.1]"
        >
          <span className="block bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered
          </span>
          <span className="block pt-2">
            Knowledge Retrieval
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Transform enterprise data into actionable insights with our adaptive retrieval augmented generation platform
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#contact"
            className="relative inline-block px-8 py-3 font-semibold text-white border-2 border-indigo-600 rounded-full overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-indigo-600">
              Start Building →
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 transition-transform duration-500 ease-in-out group-hover:-translate-y-full" />
            <span className="absolute inset-0 bg-white transition-transform duration-500 ease-in-out -translate-y-full group-hover:translate-y-0" />
          </a>

          <button className="px-8 py-3 font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full backdrop-blur-lg border border-white/10 hover:border-white/20">
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="animate-bounce flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">Explore More</span>
          <div className="w-8 h-12 rounded-3xl border-2 border-gray-400/30 flex justify-center p-1">
            <motion.div
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}