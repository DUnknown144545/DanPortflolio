
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-gray-950">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center gap-6">
          <a href={PERSONAL_INFO.github} className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          <a href={PERSONAL_INFO.linkedin} className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">Email</a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Built with React, TypeScript & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
