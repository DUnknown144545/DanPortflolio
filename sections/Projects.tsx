
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-indigo-500">Creations</span></h2>
            <p className="text-gray-400">A selection of my most impactful projects, ranging from AI applications to IoT automation systems.</p>
          </div>
          <button className="text-indigo-400 font-semibold flex items-center gap-2 hover:text-indigo-300 transition-colors">
            View All Projects <span>&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
