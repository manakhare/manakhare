'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Modal } from '../common/Modal';
import { ProjectModal } from '../common/ProjectModal';

interface Project {
  name: string;
  description: string;
  github: string;
  demo: string;
  techStack: string[];
  detailedDescription: string;
}

interface ProjectsPageProps {
  onNext: () => void;
  onPrev: () => void;
}

const projects: Project[] = [
  {
    name: 'Medium',
    description: 'E-commerce platform with real-time analytics',
    github: '#',
    demo: '#',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis'],
    detailedDescription: 'Full-stack e-commerce solution with...'
  },
  {
    name: 'Let Us Chat',
    description: 'E-commerce platform with real-time analytics',
    github: '#',
    demo: '#',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis'],
    detailedDescription: 'Full-stack e-commerce solution with...'
  },
  {
    name: 'Whizz',
    description: 'E-commerce platform with real-time analytics',
    github: '#',
    demo: '#',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis'],
    detailedDescription: 'Full-stack e-commerce solution with...'
  },
  {
    name: 'Expense Tracker',
    description: 'E-commerce platform with real-time analytics',
    github: '#',
    demo: '#',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis'],
    detailedDescription: 'Full-stack e-commerce solution with...'
  },
  {
    name: 'Threads',
    description: 'E-commerce platform with real-time analytics',
    github: '#',
    demo: '#',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis'],
    detailedDescription: 'Full-stack e-commerce solution with...'
  },
  // Add more projects
];

export default function ProjectsPage({ onNext, onPrev }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [headingAnimationComplete, setHeadingAnimationComplete] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center p-8">
        <div className='w-3/4'>
            <AnimatePresence>
                <motion.h2
                key="projects-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: headingAnimationComplete ? -40 : 0 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => setHeadingAnimationComplete(true)}
                className="text-4xl font-bold text-amber-900 w-full flex justify-center items-center font-serif border-b-4 border-amber-900"
                >
                Projects
                </motion.h2>
            </AnimatePresence>
        </div>

      {headingAnimationComplete && (
        <div className="w-full max-w-4xl space-y-4">
            <div className='w-full flex flex-col justify-center items-center gap-6'>
                {projects.map((project, index) => (
                    <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className=" w-3/4 relative pl-8 border-l-4 border-amber-700 hover:bg-amber-50 p-4 rounded-lg cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                    >
                    <div className="absolute left-[-14px] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-700 rounded-full border-4 border-amber-50" />
                    
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-semibold text-amber-900">{project.name}</h3>
                        <div className="flex gap-4">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                            className="text-amber-700 hover:text-amber-900"
                            onClick={(e) => e.stopPropagation()}>
                            <FaGithub size={24} />
                        </a>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="text-amber-700 hover:text-amber-900"
                            onClick={(e) => e.stopPropagation()}>
                            <FaExternalLinkAlt size={24} />
                        </a>
                        </div>
                    </div>
                    <p className="text-amber-800 mt-2">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      )}

      {selectedProject && (
        <ProjectModal
          name={selectedProject.name}
          description={selectedProject.description}
          detailedDescription={selectedProject.detailedDescription}
          demo={selectedProject.demo}
          github={selectedProject.github}
          techStack={selectedProject.techStack}
          onClose={() => setSelectedProject(null)}
        >
          <div className="space-y-4">
            <div className="flex justify-between gap-4">
                <div className='text-amber-900 font-bold text-3xl mb-2'>{selectedProject.name}</div>
                <div className='flex gap-4 mr-5'>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-amber-700 hover:text-amber-900">
                        <FaGithub /> Github
                    </a>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-amber-700 hover:text-amber-900">
                        <FaExternalLinkAlt /> Demo
                    </a>
                </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-amber-900">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-amber-100 rounded-full text-amber-900">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-amber-900">Description</h4>
              <p className="text-amber-800 mt-2">{selectedProject.detailedDescription}</p>
            </div>
          </div>
        </ProjectModal>
      )}

      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-8 right-8 flex justify-between">
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-3xl text-amber-900 font-semibold cursor-pointer p-4 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
        >
          ←
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 text-3xl text-amber-900 font-semibold cursor-pointer p-4 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
        >
          →
        </button>
      </div>
    </div>
  );
}