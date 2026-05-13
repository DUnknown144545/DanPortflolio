
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#7c3aed]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#38bdf8]/15 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">Available for hire</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              I'm <span className="text-gradient">{PERSONAL_INFO.fullName}</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mb-8 font-mono">
              {PERSONAL_INFO.title}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.intro}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-[#7c3aed] hover:bg-[#5b21b6] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all group shadow-xl shadow-[#7c3aed]/20"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-1 bg-gradient-to-br from-[#151335]/40 to-[#7c3aed]/40 shadow-2xl">
              <img src={PERSONAL_INFO.avatar} alt={`${PERSONAL_INFO.fullName} profile`} className="object-cover w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
