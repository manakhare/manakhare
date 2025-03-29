import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import { FaAws, FaCode, FaDocker, FaFigma, FaGitAlt, FaJava, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiApachekafka, SiConfluence, SiCss3, SiHtml5, SiJavascript, SiJira, SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiRedux, SiTailwindcss, SiTypescript, SiVite } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'

const skills = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'SQL', icon: <BiLogoPostgresql /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Vite', icon: <SiVite /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Hono', icon: <FaCode /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'VS Code', icon: <TbBrandVscode /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Jira', icon: <SiJira /> },
    { name: 'Confluent', icon: <SiConfluence /> },
    { name: 'Zod', icon: <FaCode /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <FaCode /> },
    { name: 'Aceternity', icon: <FaCode /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Redis', icon: <DiRedis /> },
    { name: 'Kafka', icon: <SiApachekafka /> }
]

function Skills() {
    return (
        <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{margin: "130px", once: false}}
            className='w-full bg-amber-800 flex flex-col items-center justify-center py-10'>
            <div className='w-full lg:w-3/4 flex justify-center items-center'>
                <AnimatePresence>
                    <motion.h2
                        key="projects-heading"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 10 }}
                        // animate={{ opacity: 1, y: 10 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="text3xl lg:text-5xl font-bold text-amber-50 w-full flex justify-center items-center font-serif uppercase tracking-wider"
                    >
                        Skills
                    </motion.h2>
                </AnimatePresence>
            </div>

            <div className="w-full pt-16 lg:w-[90%] max-w-6xl space-y-1 lg:space-y-4 flex flex-wrap lg:flex-row gap-2 lg:gap-5 items-center justify-center">
                {
                    skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            // animate={{ opacity: 1, y: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-full flex flex-wrap lg:flex-row justify-center items-center gap-4">
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col items-center justify-center p-2 lg:p-6 bg-amber-50 rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    <div className="text-md lg:text-4xl text-amber-700 lg:mb-2">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xs lg:text-sm text-center text-amber-900">{skill.name}</span>
                                </motion.div>
                            </div>

                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Skills