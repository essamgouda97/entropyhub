import React from 'react';

export default function Team() {
  return (
    <section id="team" className="py-28 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-16">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: 'Essam', role: 'ML Engineer', img: '/AIbrain.png' },
            { name: 'Youssef', role: 'Full-Stack Developer', img: '/Software.png' },
            { name: 'Ahmed', role: 'Java & Cloud Developer', img: '/machinebrain.png' },
            { name: 'Sherif', role: 'Python Developer', img: '/hacker.png' },
          ].map(({ name, role, img }) => (
            <div key={name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <img src={img} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}