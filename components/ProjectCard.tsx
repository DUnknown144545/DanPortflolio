
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative glass rounded-2xl overflow-hidden hover:border-[#7c3aed]/50 transition-all duration-500">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 text-[10px] uppercase font-mono bg-[#7c3aed]/10 text-[#7c3aed] rounded border border-[#7c3aed]/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#7c3aed] transition-colors">
            <Github size={18} /> Code
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
