"use client";
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import About from '@/components/classic/About';
import Projects from '@/components/classic/Projects';
import Experience from '@/components/classic/Experience';
import Skills from '@/components/classic/Skills';
import Contact from '@/components/classic/Contact';
import Link from 'next/link';


export default function Classic() {
  return (
    <div className='w-screen min-h-screen bg-amber-50 flex flex-col items-center justify-center scroll-smooth'>

      <div className='w-full md:w-[80%] h-full flex flex-col justify-start items-start'>

        <div className='w-full flex flex-col justify-center items-center py-5 bg-amber-800'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className='text-4xl font-bold text-amber-50 font-serif '
          >
            Mana Khare
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className='text-2xl font-normal text-amber-50 font-serif mt-2'
          >
            Full stack Developer
          </motion.div>
        </div>

        <div className='w-full hidden lg:block'>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full flex flex-row justify-between py-2 bg-amber-900"
          >
            <div className='flex flex-row gap-5 text-lg justify-center items-center'>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Home</div>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Bookish</div>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Resume</div>
            </div>
            <div className='flex flex-row gap-5 text-lg justify-center items-center'>
              <Link href='#about'>
                <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>About</div>
              </Link>
              <Link href='#experience'>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Experience</div>
              </Link>
              <Link href='#projects'>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Projects</div>
              </Link>
              <Link href='#skills'>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Skills</div>
              </Link>
              <Link href='#contact'>
              <div className='px-4 py-2 text-amber-50 cursor-pointer hover:font-semibold hover:scale-110 hover:underline hover:underline-offset-4 hover:-translate-y-1 transition delay-120 duration-300 ease-in-out'>Contact</div>
              </Link>
            </div>
            
          </motion.nav>
        </div>

        <div id='about'>
          <About />
        </div>

        <div id='projects' className='w-full'>
          <Projects />
        </div>

        <div id='experience' className='w-full flex items-center justify-center border-8 border-amber-800 bg-amber-800 rounded-md my-10 py-10'>
          <Experience />
        </div>

        <div id='skills' className='w-full'>
          <Skills />
        </div>

        <div id='contact' className='w-full'>
          <Contact />
        </div>
        
      </div>

    </div>
  )
}
