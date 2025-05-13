'use client';
import { motion } from 'framer-motion';
import { Rocket, Zap, LifeBuoy } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Enterprise-Ready AI',
    description: 'We’ve successfully integrated intelligent systems into real-world enterprise workflows, delivering tangible results with minimal friction.',
    color: 'from-purple-400 to-indigo-500'
  },
  {
    icon: Zap,
    title: 'Elite Engineering Team',
    description: 'Our developers have been contracted by leading names like Disney, Marvel, and top Silicon Valley firms. We translate complexity into clarity — and ideas into action.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: LifeBuoy,
    title: 'Proven Delivery Track Record',
    description: 'We don’t just promise outcomes — we deliver them. Whether it’s rapid deployment or tailored AI workflows, we meet client needs with precision and speed.',
    color: 'from-green-400 to-emerald-500'
  },
];

export default function WhyChooseUs() {
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
            Why Choose EntropyHub
          </p>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-16">
            Built for Impact,
            <br />
            Chosen for Results
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative text-left bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-30`} />
              </div>

              <div className="relative">
                <div className={`mb-6 w-fit p-4 rounded-xl bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {feature.description}
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
