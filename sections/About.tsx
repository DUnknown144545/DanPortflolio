
import React from 'react';
import { Layout, Server, Cpu, Palette } from 'lucide-react';

const About: React.FC = () => {
  const focusAreas = [
    {
      icon: <Layout size={24} />,
      title: "Web & Mobile",
      desc: "Creating responsive and performant applications using React and TypeScript."
    },
    {
      icon: <Server size={24} />,
      title: "Backend Systems",
      desc: "Architecting scalable APIs and database schemas with Python and Django."
    },
    {
      icon: <Cpu size={24} />,
      title: "IoT & Automation",
      desc: "Bridging the gap between hardware and software through embedded systems."
    },
    {
      icon: <Palette size={24} />,
      title: "UI/UX Awareness",
      desc: "Designing clean, intuitive interfaces that prioritize the user experience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-indigo-600/30 blur-2xl rounded-full"></div>
              <img 
                src="https://picsum.photos/seed/profile/500/600" 
                alt="About Me" 
                className="relative z-10 rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-white/10"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Tomorrow's <span className="text-indigo-500">Solutions</span> Today</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With a background in both high-level software development and low-level embedded programming, I bring a unique holistic perspective to every project. Whether it's a mobile app for hundreds of users or a specialized IoT device, I focus on reliability, scalability, and impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {focusAreas.map((area, idx) => (
                <div key={idx} className="p-4 glass rounded-xl border-l-4 border-l-indigo-500">
                  <div className="text-indigo-400 mb-3">{area.icon}</div>
                  <h4 className="font-bold mb-1 text-white">{area.title}</h4>
                  <p className="text-xs text-gray-500 leading-tight">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
