'use client';
import { motion } from 'framer-motion';
import { Scale, Users, BrainCircuit, MessageSquare, ShoppingBag, HeartPulse } from 'lucide-react';

const useCases = [
  {
    icon: Scale,
    title: "Legal Research Acceleration",
    description: "Instant case law retrieval and summary generation for legal teams",
    color: "from-purple-400 to-indigo-500"
  },
  {
    icon: Users,
    title: "Intelligent Recruitment",
    description: "AI-powered candidate matching and interview question generation",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: BrainCircuit,
    title: "Strategic Decision Support",
    description: "Real-time insights generation from corporate data repositories",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: MessageSquare,
    title: "Customer Support AI",
    description: "Instant knowledge retrieval for personalized customer responses",
    color: "from-yellow-400 to-amber-500"
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Personalization",
    description: "Behavior-based product recommendation engine",
    color: "from-pink-400 to-rose-500"
  },
  {
    icon: HeartPulse,
    title: "Clinical Intelligence",
    description: "Medical research analysis and patient care optimization",
    color: "from-teal-400 to-sky-500"
  }
];

export default function UseCases() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-50 to-indigo-50 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Industry Applications
          </p>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-16">
            Transformative Business Solutions
            <br />
            Powered by AI
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative text-left bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${useCase.color} rounded-2xl opacity-30`} />
              </div>

              <div className="relative">
                <div className={`mb-6 w-fit p-4 rounded-xl bg-gradient-to-r ${useCase.color}`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {useCase.description}
                </p>
              </div>

              {/* Subtle background hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}