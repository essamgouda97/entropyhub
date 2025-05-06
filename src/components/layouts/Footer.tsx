'use client';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          ↑ Top
        </button>
      )}
      <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm transition-colors">
        &copy; {new Date().getFullYear()} AI Software Solution. All rights reserved.
      </footer>
    </>
  );
}