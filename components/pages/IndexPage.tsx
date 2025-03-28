'use client';

import useScreenSize from '@/hooks/useScreenSize';
import { Pages } from '@/types/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MobileNav } from '../common/MobileNav';
import { TiThMenu } from 'react-icons/ti';
import SideNav from '../common/SideNav';

interface IndexPageProps {
  onNext: () => void;
  onPrev: () => void;
  navigateTo: (page: Pages) => void;
}

export default function IndexPage({ onNext, onPrev, navigateTo }: IndexPageProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenSize = useScreenSize();

  const indexItems = [
    { label: 'About Me', page: Pages.ABOUT },
    { label: 'Skills', page: Pages.SKILLS },
    { label: 'Projects', page: Pages.PROJECTS },
    { label: 'Contact', page: Pages.CONTACT }
  ];

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
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
        isOpen && (screenSize === 'small' || screenSize === 'medium') &&
        (
          <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} navigateTo={navigateTo} />
        )
      }

      <h2 className="text-3xl mb-8 text-amber-900 font-bold font-serif">Index</h2>
      <ul className="space-y-4 w-[70%]">
        {indexItems.map((item, index) => (
          <li 
            key={item.label} 
            onClick={() => navigateTo(item.page)}
            className="text-xl font-serif hover:text-amber-700 cursor-pointer transition-colors flex w-full flex-row justify-between hover:bg-amber-100 px-4 py-2 rounded-lg"
          >
            {item.label} 
            <span className="text-amber-700 font-serif">pg. {index + 1}</span>
          </li>
        ))}
      </ul>

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