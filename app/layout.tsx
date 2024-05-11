import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import AppHeader from './components/app-header';
import MainContent from '@/app/components/main-content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Math Site',
  description: 'New level of Math for children',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`relative min-h-screen flex-col ${inter.className}`}>
        <AppHeader />
        <MainContent>{children}</MainContent>
      </body>
    </html>
  );
}
