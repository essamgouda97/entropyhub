import React from 'react';
import { FaRobot, FaDatabase, FaShieldAlt, FaPlug } from 'react-icons/fa';
import { Card } from '../ui/card';

const Problem = () => {
  const features = [
    {
      icon: FaRobot,
      title: "Custom AI Agents for Automation",
      description: "Tailored AI solutions that automate complex workflows and repetitive tasks.",
      color: "blue" as 'blue'
    },
    {
      icon: FaDatabase,
      title: "Enterprise-Grade RAG Systems",
      description: "Powerful retrieval-augmented generation for instant knowledge access.",
      color: "purple" as 'purple'
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Scalable Solutions",
      description: "Enterprise-level security with infrastructure that grows with your needs.",
      color: "green" as 'green'
    },
    {
      icon: FaPlug,
      title: "Seamless API Integrations",
      description: "Easy integration with your existing systems and workflows.",
      color: "yellow" as 'yellow'
    }
  ];

  const getColorClasses = (color: 'blue' | 'purple' | 'green' | 'yellow') => {
    const colors = {
      blue: {
        text: 'text-blue-500',
        border: 'hover:border-blue-500'
      },
      purple: {
        text: 'text-purple-500',
        border: 'hover:border-purple-500'
      },
      green: {
        text: 'text-green-500',
        border: 'hover:border-green-500'
      },
      yellow: {
        text: 'text-yellow-500',
        border: 'hover:border-yellow-500'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-black to-transparent bg-opacity-10 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Businesses struggle with repetitive tasks, unstructured data, and slow decision-making. 
            Our AI agents and RAG systems automate workflows, retrieve knowledge instantly, 
            and deliver intelligent responses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colorClasses = getColorClasses(feature.color);
            const IconComponent = feature.icon;
            
            return (
              <Card key={index}>
              <div 
                key={index}
                className={`bg-black opacity-80 bg-opacity-50 rounded-xl p-8 backdrop-blur-sm border border-gray-700 transition-all w-full h-full ${colorClasses.border}`}
              >
                <div className={`${colorClasses.text} mb-4 flex justify-center`}>
                  <IconComponent size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problem;