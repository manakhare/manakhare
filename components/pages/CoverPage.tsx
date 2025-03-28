'use client';

import useScreenSize from '@/hooks/useScreenSize';
import { Pages } from '@/types/navigation';
import { motion } from "framer-motion";
import { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { TiThMenu } from 'react-icons/ti';
import {MobileNav} from '@/components/common/MobileNav'
import SideNav from '../common/SideNav';

interface BookCoverProps {
  onNext: () => void;
  navigateTo: (page: Pages) => void;
}

export default function CoverPage({ onNext, navigateTo }: BookCoverProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenSize = useScreenSize();

  return (
    <div className="relative h-screen w-full bg-rustic-brown">
      {/* <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed hidden lg:block top-4 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg lg:flex gap-8 text-aged-paper"
      >
        <button 
          onClick={() => navigateTo(Pages.PROJECTS)}
          className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer font-serif hover:underline hover:underline-offset-4"
        >
          Projects
        </button>
        <button 
          onClick={() => navigateTo(Pages.SKILLS)}
          className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer font-serif hover:underline hover:underline-offset-4"
        >
          Skills
        </button>
        <button 
          onClick={() => navigateTo(Pages.ABOUT)}
          className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer font-serif hover:underline hover:underline-offset-4"
        >
          About Me
        </button>
        <button 
          onClick={() => navigateTo(Pages.CONTACT)}
          className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer font-serif hover:underline hover:underline-offset-4"
        >
          Contact
        </button>
      </motion.nav> */}   

      <SideNav navigateTo={navigateTo} currentPage={Pages.COVER}/>

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='lg:hidden fixed absolute w-10 h-10 top-8 right-8 bg-amber-900 rounded-full border-2 border-amber-100'
        onClick={() => setIsOpen(true)}
      >
        <span className='w-full h-full flex justify-center items-center text-amber-100 text-xl'><TiThMenu /></span>
      </motion.nav>

      {
        isOpen && (screenSize==='small' || screenSize==='medium') && 
        (
          <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} navigateTo={navigateTo}/>
        )
      }
     

      <div className="flex flex-col items-center justify-center h-full bg-brown-900 bg-[url(/background3.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50">
      <div className="w-[100%] bg-[url(/cover5.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50 lg:w-[50%] h-[100%] flex flex-col items-center justify-center">
        <motion.img
          src="/Cropped.png"
          alt="Profile"
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mb-8 shadow-xl object-contain bg-amber-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.h1
          className="text-4xl lg:text-5xl  font-serif font-bold mb-4 text-amber-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Mana Khare
        </motion.h1>
        <motion.p
          className="text-lg lg:text-xl text-amber-200 mb-12 font-serif"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.button
          onClick={onNext}
          className="flex justify-center px-4 py-2 backdrop-blur-md rounded-full items-center gap-2 text-amber-300 cursor-pointer hover:text-amber-200 transition-colors font-serif"
          whileHover={{ scale: 1.05 }}
        >
          <span className='text-lg'>Next</span> <FiArrowRight />
        </motion.button>
      </div>
      </div>
    </div>
  );
}