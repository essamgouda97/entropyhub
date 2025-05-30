'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sherif',
    role: 'Pipeline Developer/Co-Founder',
    bio: ' Bringing years of experience as a Pipeline Developer for leading animation and VFX studios, including contributions to major feature films like Mufasa: The Lion King. Sherif has a strong technical foundation and a passion for innovation. Outside the tech world, Sherif is also a former professional national athlete, blending discipline and performance into every aspect of his work..',
    image: '/sherif.jpeg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sherif-essam-9522a0103/',

    },
  },
  {
    name: 'Essam',
    role: 'Machine Learning Engineer/Co-Founder',
    bio: 'A seasoned Machine Learning Engineer with deep expertise in artificial intelligence and large-scale AI system design. Known for implementing and architecting advanced Retrieval-Augmented Generation (RAG) pipelines, Essam’s work has been recognized in Silicon Valley for pushing the boundaries of intelligent data systems. His strategic vision and technical leadership drive the innovation behind the company’s AI-powered platforms.',
    image: '/essam.jpg',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/essamgouda/',

    },
  },
  {
    name: 'Ahmed',
    role: 'Software Engineer/Co-Founder',
    bio: 'Meet a results-driven Backend Engineer with multiple years of experience delivering scalable fintech microservices using Spring Boot, Kotlin, and AWS. Ahmed specializes in event-driven systems with Kafka, clean architecture, and performance optimization. At EJADA Systems, he led key automation and migration initiatives—cutting development time by 50% and streamlining AWS workflows. Currently, he is advancing his expertise in Cloud and DevOps Engineering through the prestigious Digital Egypt Builders Initiative while pursuing his AWS Developer Associate certification.',
    image: '/ahmed.jpg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ahmed-abouelnasr-4965a7137/',

    },
  },
  {
    name: 'Yosif',
    role: 'Computer Developer/Co-Founder',
    bio: 'A software engineer and systems architect with a focus on building intelligent tools powered by AI agents. Yosif work bridges product thinking and deep technical execution, enabling businesses to automate complex workflows, extract insights from data, and deliver smarter user experiences. Yosif has also led the development of multilingual AI assistants and agent-based automation platforms that eliminate manual bottlenecks and scale operational efficiency.',
    image: '/yosif.jpg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yosif-elessawi/?originalSubdomain=eg',

    },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider mb-4 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                <div className="flex space-x-4">
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a

                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >

                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

