'use client';
import { useState, useEffect } from 'react';
import {
  ScanSearch,
  BrainCircuit,
  Rocket,
  BarChartBig,
  Gavel,
  Microscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';

const iconComponents = {
  ingest: ScanSearch,
  analyze: BrainCircuit,
  predict: Rocket,
} as const;

type StepConfig = {
  name: string;
  icon: keyof typeof iconComponents;
  description: string;
  useCases: string[];
  color: string;
};

const steps: StepConfig[] = [
  {
    name: 'Ingest & Digitize',
    icon: 'ingest',
    description: 'Automated processing of diverse data sources at enterprise scale',
    useCases: [
      'Document digitization pipelines',
      'Multi-format data unification',
      'Real-time data validation'
    ],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'Analyze Patterns',
    icon: 'analyze',
    description: 'Deep learning-powered insight extraction from complex datasets',
    useCases: [
      'Operational trend analysis',
      'Anomaly detection systems',
      'Structured/unstructured data fusion'
    ],
    color: 'from-teal-400 to-emerald-500',
  },
  {
    name: 'Predict & Optimize',
    icon: 'predict',
    description: 'AI-driven forecasting for strategic decision automation',
    useCases: [
      'Demand forecasting models',
      'Resource allocation engines',
      'Process optimization frameworks'
    ],
    color: 'from-orange-400 to-rose-500',
  },
];

const industryExamples = [
  {
    icon: Microscope,
    title: "Pharmaceutical Intelligence",
    content: "Scan research papers, clinical trials, and patient feedback. AI highlights key results, flags anomalies, and predicts promising drug interactions.",
  },
  {
    icon: BarChartBig,
    title: "Banking Solutions",
    content: "Call center workforce optimization using AI-powered demand forecasting"
  },
  {
    icon: Gavel,
    title: "Legal Case Support",
    content: "AI reads contracts and case files in seconds. It pulls out names, deadlines, and key clauses—then suggests relevant precedents.",
  }
];

export default function EnterpriseAI() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % steps.length);
    }, 36000);
    return () => clearInterval(interval);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative py-48 px-12 bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden">
      {/* Animated Data Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400/30 rounded-full"
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
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title + Tabs Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">
          {/* Left Title Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-6 mb-12">
              <BrainCircuit className="w-16 h-16 text-emerald-400" />
              <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                How AI can help your Business ?
              </h2>
            </div>
            <p className="text-2xl text-gray-300 leading-relaxed">
              We turn your enterprise data into actionable insights through our predictive intelligence platform—empowering your teams to access the information they need, exactly when they need it.
            </p>
          </motion.div>

          {/* Right Tabs Column */}
          <div className="lg:col-span-3">
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <Tab.List className="flex space-x-8 pb-8 border-b border-white/20">
                {steps.map((step, idx) => (
                  <Tab
                    key={idx}
                    className={({ selected }) =>
                      `relative px-4 py-3 text-lg font-medium focus:outline-none ${
                        selected ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        {step.name}
                        {selected && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-teal-400"
                            layoutId="underline"
                          />
                        )}
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className="mt-12">
                <AnimatePresence mode='wait'>
                  {steps.map((step, idx) => {
                    const Icon = iconComponents[step.icon];
                    return (
                      <Tab.Panel key={idx}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex flex-col md:flex-row items-start gap-8"
                        >
                          <motion.div
                            className={`p-8 rounded-2xl bg-gradient-to-br ${step.color} relative overflow-hidden flex-shrink-0`}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Icon className="w-16 h-16 text-white" />
                            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/10 rounded-full" />
                          </motion.div>

                          <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white">{step.name}</h3>
                            <p className="text-xl text-gray-300">{step.description}</p>
                            <ul className="space-y-3">
                              {step.useCases.map((useCase, i) => (
                                <li
                                  key={i}
                                  className="flex items-center text-gray-400 before:content-['▹'] before:text-emerald-400 before:mr-3"
                                >
                                  {useCase}
                                </li>
                              ))}
                            </ul>
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

        {/* Separate Use Cases Section */}
        <div className="w-full text-center mt-32">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-16 pt-8">
            Use Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industryExamples.map((example, idx) => {
              const Icon = example.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <Icon className="w-12 h-12 text-emerald-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {example.title}
                    </h3>
                    <p className="text-gray-400">{example.content}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Predictive Analytics Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 500 500" className="w-full h-full">
          <path
            d="M50 300 Q 150 100 300 200 T 450 350"
            stroke="currentColor"
            strokeWidth="0.8"
            className="text-emerald-400/30"
            fill="none"
          />
          <circle cx="100" cy="250" r="3" fill="currentColor" className="text-emerald-400/30" />
          <circle cx="250" cy="150" r="3" fill="currentColor" className="text-emerald-400/30" />
          <circle cx="400" cy="300" r="3" fill="currentColor" className="text-emerald-400/30" />
        </svg>
      </div>
    </section>
  );
}