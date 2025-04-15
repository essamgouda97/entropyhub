import React from 'react'
import {Card} from '../ui/card'
import { FiCpu, FiMessageSquare, FiTrendingUp, FiSearch, FiMessageCircle, FiBook } from 'react-icons/fi';
import Image from 'next/image';


const Services = () => {

  return (
    <section className="py-20 bg-gradient-to-b to-black from-transparent  bg-opacity-10 min-h-screen flex items-center justify-center">
    <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge AI technologies designed to transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          {/* Software Agents Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-blue-500 bg-opacity-20">
                <FiCpu className="text-blue-400 text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-white">Software Agents</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <FiMessageSquare className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Autonomous Task Automation</h4>
                  <p className="text-gray-300">AI agents that handle repetitive tasks without human intervention</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <FiMessageSquare className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Conversational AI for Customer Support</h4>
                  <p className="text-gray-300">24/7 intelligent support agents that understand natural language</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <FiTrendingUp className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Workflow Optimization</h4>
                  <p className="text-gray-300">Streamline business processes with intelligent automation</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual for Software Agents */}
          <div className="relative h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            {/* Replace with your actual diagram or screenshot */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [Software Agents Diagram or Dashboard Screenshot]
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* RAG Systems Section */}
          <div className="space-y-8 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-purple-500 bg-opacity-20">
                <FiSearch className="text-purple-400 text-3xl" />
              </div>
              <h3 className="text-3xl font-bold text-white">RAG Systems</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-purple-400">
                  <FiSearch className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Intelligent Document Search</h4>
                  <p className="text-gray-300">Find relevant information across millions of documents in seconds</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-purple-400">
                  <FiMessageCircle className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Context-aware AI Responses</h4>
                  <p className="text-gray-300">Answers grounded in your specific business knowledge</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-purple-400">
                  <FiBook className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white">Knowledge Management for Enterprises</h4>
                  <p className="text-gray-300">Centralize and leverage your organizational knowledge</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual for RAG Systems */}
          <div className="relative h-80 lg:h-96 bg-gray-800 rounded-xl overflow-hidden border border-gray-700 lg:order-1">
            {/* Replace with your actual diagram or screenshot */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              [RAG System Diagram or Interface Screenshot]
            </div>
          </div>
        </div>
      </div>
  </section>
  
  )
}

export default Services