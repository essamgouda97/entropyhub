'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sherif',
    role: 'CEO & Co-Founder',
    bio: 'Sherif BIO.',
    image: '/sherif.jpeg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sherif-essam-9522a0103/',
      twitter: 'https://twitter.com/sherif',
    },
  },
  {
    name: 'Essam',
    role: 'CTO & Co-Founder',
    bio: 'Essam leads the technical strategy, ensuring we always stay ahead of the curve in technology.',
    image: '/essam.jpg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/essamgouda/',
      twitter: 'https://twitter.com/alice',
    },
  },
  {
    name: 'Ahmed',
    role: 'Head of Cloud Development',
    bio: 'Ahmed BIO',
    image: '/ahmed.jpg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ahmed-abouelnasr-4965a7137/',
      twitter: 'https://twitter.com/bob',
    },
  },
  {
    name: 'Yosif',
    role: 'Head of Marketing Strategy',
    bio: 'Yosif BIO',
    image: '/yosif.jpg', // Make sure this image exists in public folder
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yosif-elessawi/?originalSubdomain=eg',
      twitter: 'https://twitter.com/eve',
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
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter className="w-5 h-5" />
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

