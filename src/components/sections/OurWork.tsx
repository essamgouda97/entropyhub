'use client';
import { motion } from 'framer-motion';

export default function EnterpriseExperience() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden">
      {/* Background Design */}
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
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent pb-2">
            Trusted by Leading Enterprises
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We are proud to be working with one of the biggest companies in the Middle East specializing in petroleum pipelines. This industry leader manages a vast archive of documents—many over 20 years old—that contain critical, confidential data.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our team is digitizing these documents while upholding the highest standards of data security. By integrating with their proprietary API, we enable smart data retrieval and interactive workflows. Whether it’s handling routine administrative tasks or facilitating on-demand information access, our solution is designed to empower users to work smarter and faster.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
