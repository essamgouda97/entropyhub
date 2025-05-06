import React from 'react';

const teamMembers = [
  {
    name: 'Sherif',
    role: 'CEO & Co-Founder',
    bio: 'Sherif BIO.',
    image: '/sherif.jpeg', // Make sure to replace with the correct image URL
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/sherif-essam-9522a0103/',
      twitter: 'https://twitter.com/sherif',
    },
  },
  {
    name: 'Essam',
    role: 'CTO & Co-Founder ',
    bio: 'Essam leads the technical strategy, ensuring we always stay ahead of the curve in technology.',
    image: '/essam.jpg', // Replace with actual image path
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/essamgouda/',
      twitter: 'https://twitter.com/alice',
    },
  },
  {
    name: 'Ahmed',
    role: ' Head of Cloud Development',
    bio: 'Ahmed BIO',
    image: '/ahmed.jpg', // Replace with actual image path
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/ahmed-abouelnasr-4965a7137/',
      twitter: 'https://twitter.com/bob',
    },
  },
  {
    name: 'Yosif',
    role: 'Head of Marketing Strategy',
    bio: 'Yosif BIO',
    image: '/yosif.jpg', // Replace with actual image path
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/yosif-elessawi/?originalSubdomain=eg',
      twitter: 'https://twitter.com/eve',
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-16">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover rounded-2xl group-hover:opacity-80 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold">{member.name}</h3>
                    <p className="text-lg">{member.role}</p>
                    <p className="mt-4 text-sm">{member.bio}</p>
                    <div className="mt-4 flex space-x-4">
                      <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <span className="text-xl">🔗</span>
                      </a>
                      <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <span className="text-xl">🐦</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
