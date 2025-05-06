// components/sections/Hero.tsx
'use client';
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background Blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-300 opacity-40 rounded-full filter blur-3xl animate-blob"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-blue-300 opacity-30 rounded-full filter blur-2xl animate-blob animation-delay-2000"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-4">
        <p className="text-indigo-500 font-semibold uppercase tracking-wider mb-4">
          Introducing RAG Intelligence
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-shine">
          Supercharged Retrieval<br />
          for Smarter AI Workflows
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Revolutionize your operations with blazing-fast, reliable knowledge retrieval powered by RAG.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold px-8 py-3 rounded-full transition duration-300 ease-out hover:scale-105 active:scale-95"
        >
          Start Building →
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <span className="animate-bounce text-indigo-500 text-2xl">↓</span>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        @keyframes blob {
          0% {
            border-radius: 42% 58% 63% 37% / 40% 44% 56% 60%;
          }
          33% {
            border-radius: 58% 42% 58% 42% / 44% 40% 60% 56%;
          }
          66% {
            border-radius: 63% 37% 42% 58% / 56% 60% 40% 44%;
          }
          100% {
            border-radius: 42% 58% 63% 37% / 40% 44% 56% 60%;
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes shine {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 1.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
