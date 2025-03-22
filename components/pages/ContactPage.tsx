'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { Pages } from '@/types/navigation';
import useScreenSize from '@/hooks/useScreenSize';
import { TiThMenu } from 'react-icons/ti';
import { MobileNav } from '../common/MobileNav';

interface ContactPageProps {
  onNext: () => void;
  onPrev: () => void;
  navigateTo: (page: Pages) => void;
}

const contactMethods = [
  {
    name: 'Email',
    icon: <FiMail />,
    url: 'mailto:manakhare5@gmail.com',
    text: 'manakhare5@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/manakhare',
    text: 'https://linkedin.com/in/manakhare'
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/manakhare',
    text: 'https://github.com/manakhare'
  },
  {
    name: 'LeetCode',
    icon: <SiLeetcode />,
    url: 'https://leetcode.com/manakhare5',
    text: 'https://leetcode.com/manakhare5'
  }
];

export default function ContactPage({ onNext, onPrev, navigateTo }: ContactPageProps) {
  const [headingAnimationComplete, setHeadingAnimationComplete] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const screenSize = useScreenSize();

  return (
    <div className="w-full h-full flex flex-col items-center p-8">

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

      <div className='w-full lg:w-3/4'>
        <AnimatePresence>
          <motion.h2
            key="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: headingAnimationComplete ? -30 : 0 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setHeadingAnimationComplete(true)}
            className="text-3xl mt-15 lg:mt-0 lg:text-4xl font-bold text-amber-900 mb-4 lg:mb-8 flex justify-center items-center font-serif border-b-4 border-amber-900"
          >
            Contact Me
          </motion.h2>
        </AnimatePresence>
      </div>

      {headingAnimationComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-w-4xl flex flex-row flex-wrap justify-center items-center gap-8"
        >
          <div className='w-full lg:w-3/4 grid grid-cols-2 gap-8'>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-12 py-6 lg:p-6 bg-amber-50 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-4xl text-amber-700 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">
                  {method.name}
                </h3>
                {/* {method.text && (
                        <p className="text-sm text-center text-amber-700">
                        {method.text}
                        </p>
                    )} */}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation Controls */}
      <div className="lg:hidden w-full absolute flex justify-between items-center bottom-75 lg:hidden">
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