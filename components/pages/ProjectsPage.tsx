'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Modal } from '../common/Modal';
import { ProjectModal } from '../common/ProjectModal';
import useScreenSize from '@/hooks/useScreenSize';
import { Pages } from '@/types/navigation';
import { TiThMenu } from 'react-icons/ti';
import { MobileNav } from '../common/MobileNav';

interface Project {
  name: string;
  description: string;
  github: string;
  demo?: string;
  techStack: string[];
  detailedDescription: string[];
}

interface ProjectsPageProps {
  onNext: () => void;
  onPrev: () => void;
  navigateTo: (page: Pages) => void;
}

const projects: Project[] = [
  {
    name: 'Medium',
    description: 'Blogging application',
    github: 'https://github.com/manakhare/medium',
    demo: '#',
    techStack: ['ReactJs', 'HonoJs', 'Recoil', 'Postgres', 'Prisma', 'TailwindCSS', 'Cloudflare workers', 'JWT'],
    detailedDescription: [
      "A medium clone, with proper authentication and authorization",
      "Create, Read, Update, Delete posts efficiently",
      "View and edit your profile details",
      "A feed of posts from all the registered users",
      "View all posts by you",
      "Logout"
    ],
  },
  {
    name: 'Let Us Chat',
    description: 'Realtime chat app',
    github: 'https://github.com/manakhare/let-us-chat',
    demo: '#',
    techStack: ['ReactJs', 'Node.js', 'Postgres', 'Prisma', 'Redis', 'Kafka', 'Socket.io', 'TailwindCSS', 'Docker', 'JWT'],
    detailedDescription: [
      'Signin/login through google authentication',
      "Signin using Google authentication",
      'Create a chatting room',
      'Invite friends to join the chat by copying the chat link and sharing it with them.',
      'Chat real-time',
      'Edit/Delete a chatting room',
      'View a list of all the chat rooms that you\'ve created on the dashboard.',
      'Continue chatting from where you left out.',
      'Sign out',
    ]
  },
  {
    name: 'Whizz',
    description: 'A workflow automation platform - inspired by Zapier',
    github: 'https://github.com/manakhare/whizz',
    demo: '#',
    techStack: ['NextJs', 'Node.js', 'Microservices', 'Polyrepo', 'Kafka', 'Docker', 'Postgres', 'Prisma', 'TailwindCSS', 'JWT'],
    detailedDescription: [
      'Authenticated signin/signup',
      "Secure Authentication (Sign-up & Login)",
      "CRUD operations on your automation flows (Whizz)",
      "Dashboard to view automation flows in tabular format",
      "Ability to create dynamic workflows: triggers followed by asynchronous actions",
      "Webhook integration for dynamic data handling",
      "Robust and secure Logout functionality",
    ]
  },
  {
    name: 'Bookish Portfolio',
    description: 'Portfolio website',
    github: 'https://github.com/manakhare/manakhare',
    demo: '#',
    techStack: ['NextJs', 'ReactJs', 'Tailwindcss', 'Framer-motion', 'Typescript'],
    detailedDescription: [
      'A portfolio website built using Next.js and Tailwind CSS. It showcases my projects, skills, and experience in a visually appealing manner. The website is responsive and optimized for performance.'
    ]
  },
  {
    name: 'Expense Tracker',
    description: 'Track your expenses',
    github: 'https://github.com/manakhare/Track-expenses-react',
    demo: '#',
    techStack: ['React', 'Javascript'],
    detailedDescription: [
      'An expense tracking application where you can add your expenses and view them in a list.',
      'You can also remove the expenses from the list.',
      'The application is built using React and JavaScript, and it provides a simple and intuitive interface for managing your expenses.'
    ]
  },
  // {
  //   name: 'Threads',
  //   description: 'A social media website',
  //   github: '#',
  //   demo: '#',
  //   techStack: ['React', 'Node.js', 'MongoDB', 'Redis'],
  //   detailedDescription: ['Full-stack e-commerce solution with...']
  // },
  // Add more projects
];

export default function ProjectsPage({ onNext, onPrev, navigateTo }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [headingAnimationComplete, setHeadingAnimationComplete] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenSize = useScreenSize();
  const iconSize = screenSize === 'small' || screenSize === 'medium' ? 16 : 24;
  const topSpace = screenSize === 'small' || screenSize === 'medium' ? -80 : -40;

  return (
    <div className="w-full h-full flex flex-col items-center lg:p-8 p-4">

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='lg:hidden fixed absolute w-10 h-10 top-8 right-8 bg-amber-900 rounded-full border-2 border-amber-100'
        onClick={() => setIsOpen(true)}
      >
        <span className='w-full h-full flex justify-center items-center text-amber-100 text-xl'><TiThMenu /></span>
      </motion.nav>

      {
        isOpen && (screenSize === 'small' || screenSize === 'medium') &&
        (
          <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} navigateTo={navigateTo} />
        )
      }

      
        <div className='w-3/4 mb-0'>
          <AnimatePresence>
            <motion.h2
              key="projects-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: headingAnimationComplete ? topSpace : 0 }}
              transition={{ duration: 0.8 }}
              onAnimationComplete={() => setHeadingAnimationComplete(true)}
              className="text-3xl mt-16 lg:mt-0 lg:text-4xl font-bold text-amber-900 w-full flex justify-center items-center font-serif border-b-4 border-amber-900"
            >
              Projects
            </motion.h2>
          </AnimatePresence>
        </div>
      

      {headingAnimationComplete && (
        <div className="w-full max-w-4xl space-y-4 mt-0">
          <div className='w-full flex flex-col justify-center items-center gap-6'>
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -50, y: 0 }}
                animate={{ opacity: 1, x: 0, y:(screenSize === 'small' || screenSize === 'medium') ? -40 : 0 }}
                transition={{ delay: index * 0.2 }}
                className="w-full bg-amber-50 lg:bg-transparent lg:w-3/4 relative pl-6 lg:pl-8 border-l-4 border-amber-700 hover:bg-amber-50 p-3 lg:p-4 rounded-lg cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute left-[-14px] top-1/2 transform -translate-y-1/2 w-6 h-6 bg-amber-700 rounded-full border-4 border-amber-50" />

                <div className="flex justify-between items-center">
                  <h3 className="text-xl lg:text-2xl font-semibold font-serif text-amber-900">{project.name}</h3>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-900"
                      onClick={(e) => e.stopPropagation()}>
                      <FaGithub size={iconSize} />
                    </a>
                    {project.demo !== "#" && <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-900"
                      onClick={(e) => e.stopPropagation()}>
                      <FaExternalLinkAlt size={iconSize} />
                    </a>}
                  </div>
                </div>
                <p className="text-amber-800">{project.description}</p>
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
                {selectedProject.demo !== "#" && <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 text-amber-700 hover:text-amber-900">
                  <FaExternalLinkAlt /> Demo
                </a>}
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
              <ul className="text-amber-800 mt-2 list-disc pl-5">{selectedProject.detailedDescription.map((point, index) => (
                <li key={index} className='list-disc'>{point}</li>
              ))}</ul>
            </div>
          </div>
        </ProjectModal>
      )}

      {/* Navigation Controls */}
      <div className="lg:hidden w-full absolute flex justify-between bottom-75 lg:hidden">
        <div className=''>
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-3xl text-amber-900 font-semibold cursor-pointer p-3 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div>
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-3xl text-amber-900 font-semibold cursor-pointer p-3 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}