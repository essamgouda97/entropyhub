'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Search, Settings, TestTube2, Rocket } from 'lucide-react';

export default function Implementation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const steps = [
    {
      icon: Search,
      title: "Discovery Phase",
      description: "Deep dive into your infrastructure needs and knowledge requirements",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless RAG implementation with existing data pipelines and APIs",
      color: "from-teal-400 to-emerald-500"
    },
    {
      icon: TestTube2,
      title: "Validation Testing",
      description: "Comprehensive performance benchmarking and accuracy validation",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Production Launch",
      description: "Full deployment with monitoring and ongoing optimization",
      color: "from-orange-400 to-rose-500"
    }
  ];

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={ref}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900"
    >
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
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
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full backdrop-blur-lg border border-purple-500/20"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full backdrop-blur-lg border border-blue-500/20"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Structured Implementation
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent pb-[0.15em]">
            Seamless Deployment Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-white/20 to-transparent -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-center gap-6 md:gap-12"
              >
                {/* Timeline Dot */}
                <div className="absolute md:static left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 top-0 md:top-auto w-4 h-4 bg-white/20 rounded-full z-10" />

                {/* Icon Container */}
                <div className={`w-full md:w-1/3 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg w-fit`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-2/3 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 hover:border-white/20 transition-all">
                    <div className="text-sm font-semibold text-gray-400 mb-2">Step {index + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}