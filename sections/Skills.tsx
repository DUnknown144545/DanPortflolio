
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Toolkit & <span className="text-[#7c3aed]">Technologies</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">The core technologies I use to bring ideas to life across the full stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category} className="glass p-8 rounded-2xl hover:bg-white/5 transition-all group">
              <h3 className="text-xl font-bold mb-6 text-[#7c3aed] flex items-center justify-between">
                {category}
                <div className="h-px bg-[#7c3aed]/20 flex-grow ml-4 group-hover:bg-[#7c3aed]/40 transition-all"></div>
              </h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div 
                    key={skill.name}
                    className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm font-medium hover:border-[#7c3aed] transition-colors flex items-center gap-2"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
