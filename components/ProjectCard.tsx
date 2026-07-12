
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [images, setImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    try {
      const modules = (import.meta as any).glob(
        `../Projects-Portfolio/**/*.{png,jpg,jpeg}`,
        { eager: true, as: 'url' }
      );
      const entries = Object.entries(modules) as [string, string][];
      const urls = entries
        .filter(([path]) => project.imageFolder ? path.includes(`/${project.imageFolder}/`) : false)
        .map(([, url]) => url);
      urls.sort();
      if (mounted && urls.length) setImages(urls);
    } catch (e) {
      // ignore
    }

    return () => { mounted = false; };
  }, [project.imageFolder]);

  const thumbnail = images.length ? images[0] : project.image;

  function openAt(i = 0) {
    setIndex(i);
    setOpen(true);
  }

  function next() {
    if (!images.length) return;
    setIndex((i) => (i + 1) % images.length);
  }

  function prev() {
    if (!images.length) return;
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, images]);

  return (
    <>
      <div className="group relative glass rounded-2xl overflow-hidden hover:border-[#7c3aed]/50 transition-all duration-500">
        <div className="w-full overflow-hidden cursor-pointer h-44 md:h-56 lg:h-48" onClick={() => openAt(0)}>
          <img 
            src={thumbnail} 
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

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative max-w-4xl w-full mx-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
              aria-label="Close"
            >
              ✕
            </button>

            <img
              src={images.length ? images[index] : project.image}
              alt={project.title}
              className="w-full max-h-[70vh] object-contain rounded-lg bg-[#0b1220]"
            />

            {images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full p-2">◀</button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 rounded-full p-2">▶</button>
              </>
            )}

            <div className="mt-4 p-4 bg-[#07101a] rounded-b-lg text-white">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map(t => (
                  <span key={t} className="px-2 py-1 text-[10px] uppercase font-mono bg-[#7c3aed]/10 text-[#7c3aed] rounded border border-[#7c3aed]/20">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
