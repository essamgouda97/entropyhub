import { Metadata } from 'next';
import { SITE } from '../config.js';
import "./globals.css";
import Header from '@/components/layouts/Header';

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title
  },
  description: SITE.description,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300 dark:bg-slate-900">
      <Header/>
          <main>{children}</main>
      </body>
    </html>
  );
}
