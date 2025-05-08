'use client';
import { useState, useEffect } from 'react';
import {
  Database,
  SlidersHorizontal,
  Rocket,
  Sparkles,
  BrainCircuit
} from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Tab } from '@headlessui/react';

const iconComponents = {
  database: Database,
  sliders: SlidersHorizontal,
  rocket: Rocket,
} as const;

type StepConfig = {
  name: string;
  icon: keyof typeof iconComponents;
  description: string;
  subtext: string;
  color: string;
};

const steps: StepConfig[] = [
  {
    name: 'Retrieve',
    icon: 'database',
    description: 'Instant access to structured and unstructured data across all your repositories',
    subtext: 'Vectorized knowledge • Real-time indexing • Cross-platform search',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Augment',
    icon: 'sliders',
    description: 'Context-aware AI processing with dynamic relevance scoring',
    subtext: 'Semantic enrichment • Neural ranking • Adaptive filtering',
    color: 'from-teal-400 to-emerald-500',
  },
  {
    name: 'Generate',
    icon: 'rocket',
    description: 'Natural language synthesis powered by large language models',
    subtext: 'Fluid summarization • Source-cited answers • Multi-format output',
    color: 'from-orange-400 to-rose-500',
  },
];

export default function WhatIsRag() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % steps.length);
    }, 8000); // Increased transition interval to 8 seconds
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative py-48 px-12 bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden min-h-[80vh]">
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: Math.random(),
            }}
            animate={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              scale: Math.random(),
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Neural Network Visualization */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path
            d="M50 100 Q 200 50 350 100"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-white/10"
          />
          <path
            d="M50 200 Q 250 150 450 200"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-white/10"
          />
          <path
            d="M100 300 Q 200 250 300 300"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-white/10"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="flex items-center gap-6 mb-12">
              <BrainCircuit className="w-16 h-16 text-emerald-400" />
              <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                RAG Architecture
              </h2>
            </div>
            <p className="text-2xl text-gray-300 leading-relaxed mt-8">
              Transform raw information into strategic insights through our three-stage cognitive pipeline
            </p>

            {/* Interactive Diagram */}
            <div className="hidden lg:block mt-24 relative h-[500px]">
              <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-lg border border-white/10 p-8">
                <div className="flex justify-between items-center h-full">
                  {steps.map((step, idx) => {
                    const Icon = iconComponents[step.icon];
                    return (
                      <motion.div
                        key={idx}
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${step.color} ${
                          selectedIndex === idx ? 'scale-110' : 'scale-90 opacity-50'
                        } transition-all duration-300`}
                      >
                        {isMounted && <Icon className="w-12 h-12 text-white" />}
                      </motion.div>
                    );
                  })}
                </div>
                <Sparkles className="absolute -top-8 -right-8 w-16 h-16 text-yellow-400" />
              </div>
            </div>
          </motion.div>

          {/* Tabs Section */}
          <div className="lg:col-span-3">
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <Tab.List className="flex space-x-12 pb-8 border-b border-white/20">
                {steps.map((step, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      `relative px-6 py-4 text-xl font-medium focus:outline-none ${
                        selected ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        {step.name}
                        {selected && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400"
                            layoutId="underline"
                          />
                        )}
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-16">
                <AnimatePresence mode='wait'>
                  {steps.map((step, idx) => {
                    const Icon = iconComponents[step.icon];
                    return (
                      <Tab.Panel key={idx}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.6 }} // Slower transition
                          className="flex flex-col md:flex-row items-start gap-12"
                        >
                          <motion.div
                            className={`p-8 rounded-3xl bg-gradient-to-br ${step.color} relative overflow-hidden flex-shrink-0`}
                            whileHover={{
                              scale: 1.05,
                              rotate: 1,
                              transition: { duration: 0.4 } // Slower hover
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Icon className="w-20 h-20 text-white" />
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
                          </motion.div>

                          <div className="space-y-6">
                            <h3 className="text-4xl font-bold text-white">{step.name}</h3>
                            <p className="text-2xl text-gray-300">{step.description}</p>
                            <p className="text-base text-gray-400 font-mono">{step.subtext}</p>
                          </div>
                        </motion.div>
                      </Tab.Panel>
                    );
                  })}
                </AnimatePresence>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]" />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]" />
      </div>
    </section>
  );
}