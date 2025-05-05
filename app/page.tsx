'use client';

import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    <>


      {/* Embed your HTML page via an iframe */}
      <div className="flex-1">
        <iframe
          src="/mainPage.html"
          className="w-full h-screen"
          style={{ border: 'none' }}
          title="Main Page"
        />
      </div>

    </>
  );
}
