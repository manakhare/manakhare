'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaFigma, FaJava, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiJavascript, SiApachekafka, SiTypescript, SiHtml5, SiCss3, SiNextdotjs, SiVite, SiPostgresql, SiMongodb, SiMysql, SiRedux, SiTailwindcss, SiJira, SiConfluence, SiApache } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';

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
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Redis', icon: <DiRedis /> },
    { name: 'Kafka', icon: <SiApachekafka /> }
  ]
};

export default function SkillsPage({ onNext, onPrev }: SkillsPageProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      {/* <div className='w-3/4 mt-8'>
        <h2 className="w-full text-3xl lg:text-4xl flex justify-center items-center font-bold text-amber-900 mb-8 font-serif border-b-4 border-amber-900">Skills</h2>
      </div> */}
      <div className='w-3/4'>
        <AnimatePresence>
          <motion.h2
            key="projects-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:text-4xl mt-16 lg:mt-0 lg:text-4xl font-bold text-amber-900 w-full flex justify-center items-center font-serif border-b-4 border-amber-900"
          >
            Skills
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="w-full lg:w-[90%] max-w-6xl space-y-4 flex flex-col items-center justify-center">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          // className='flex flex-col items-center justify-center bg-amber-100 rounded-lg shadow-md'
          >
            {/* <h3 className="text-2xl font-semibold text-amber-800 mb-4">{category}</h3> */}
            {/* <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"> */}
            <div className="flex flex-wrap lg:flex-row justify-center items-center gap-4">
              {items.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center justify-center p-2 lg:p-3 bg-amber-50 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <div className="text-sm lg:text-3xl text-amber-700 lg:mb-1">
                    {skill.icon}
                  </div>
                  <span className="text-sm hidden lg:block text-center text-amber-900">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="w-full absolute flex justify-between lg:hidden bottom-75">
        <div>
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