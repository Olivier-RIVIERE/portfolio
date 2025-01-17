"use client";

import { Section } from './Section';
import { FaArrowUp } from 'react-icons/fa';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className='bg-card'>
      <button onClick={scrollToTop} style={{ fontSize: '24px', cursor: 'pointer' }} className='absolute right-0 m-4 z-50'>
        <FaArrowUp />
      </button>
      <Section className="flex items-center justify-center py-8">
        <p className='text-muted-foreground text-sm'>© 2025 Olivier Riviere. Construit avec Next.js et Tailwind CSS.</p>
      </Section>
    </footer>
  );
};