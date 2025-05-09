'use client';
import React from 'react';
import { Zap, SearchCheck, BarChart3, Smile } from 'lucide-react';

export default function Vision() {
  return (
    <section className="relative py-40 px-6 bg-gradient-to-b from-indigo-100 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-200 opacity-20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-300 opacity-10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center z-10 relative">
        {/* Header - Font styling matched */}
        <p className="text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Our Vision
        </p>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-10">
          Smarter Data, Faster Decisions
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-20">
          We help businesses unlock knowledge instantly using AI-powered retrieval. With RAG, teams work faster, stay focused, and make smarter decisions — without digging through endless documents.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <VisionItem
            Icon={SearchCheck}
            title="Precision Retrieval"
            text="Only the most relevant info — instantly."
          />
          <VisionItem
            Icon={Zap}
            title="Faster Workflows"
            text="Skip the search. Get answers in seconds."
          />
          <VisionItem
            Icon={BarChart3}
            title="Boosted Productivity"
            text="Focus on results, not research."
          />
          <VisionItem
            Icon={Smile}
            title="User-Friendly"
            text="Built for real teams, not just engineers."
          />
        </div>
      </div>
    </section>
  );
}

function VisionItem({
  Icon,
  title,
  text,
}: {
  Icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="p-6 rounded-2xl shadow-xl bg-white hover:shadow-2xl transition-transform transform hover:scale-105">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-indigo-600 text-white rounded-full">
          <Icon className="w-8 h-8" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{text}</p>
    </div>
  );
}