
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certs" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Badges of <span className="text-indigo-500">Expertise</span></h2>
          <p className="text-gray-400">Continuous learning is at the heart of my developer journey.</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="glass p-6 rounded-xl flex items-center gap-6 group hover:border-indigo-500/30 transition-all">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 flex-shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Award size={32} />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{cert.issuer} • {cert.date}</span>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
