'use client';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} AI Software Solution. All rights reserved.
    </footer>
  );
}
