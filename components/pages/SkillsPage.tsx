'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaFigma, FaJava, FaCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNextdotjs, SiVite, SiPostgresql, SiMongodb, SiMysql, SiRedux, SiTailwindcss, SiJira, SiConfluence } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';

interface SkillsPageProps {
  onNext: () => void;
  onPrev: () => void;
}

const skills = {
  Languages: [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'SQL', icon: <BiLogoPostgresql /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> }
  ],
  Technologies: [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Hono', icon: <FaCode /> }
  ],
  Tools: [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'VS Code', icon: <TbBrandVscode /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Confluent', icon: <SiConfluence /> }
  ],
  Libraries: [
    { name: 'Zod', icon: <FaCode /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <FaCode /> },
    { name: 'Aceternity', icon: <FaCode /> }
  ],
  Databases: [
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> }
  ]
};

export default function SkillsPage({ onNext, onPrev }: SkillsPageProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-amber-900 mb-8">Skills</h2>
      
      <div className="w-full max-w-6xl space-y-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">{category}</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {items.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center p-4 bg-amber-50 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-4xl text-amber-700 mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-center text-amber-900">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

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