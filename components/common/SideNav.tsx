'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Pages } from '@/app/page';

interface SideNavProps {
  navigateTo: (page: Pages) => void;
  currentPage: Pages;
}


export default function SideNav({ navigateTo, currentPage }: SideNavProps) {
    const navItems = [
      { initial: 'A', name: 'About', page: Pages.ABOUT },
      { initial: 'S', name: 'Skills', page: Pages.SKILLS },
      { initial: 'P', name: 'Projects', page: Pages.PROJECTS },
      { initial: 'C', name: 'Contact', page: Pages.CONTACT },
    ];

    return (
    <motion.nav 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <motion.div
            key={item.page}
            initial={{ width: 40, borderRadius: 9999 }}
            whileHover={{ width: 130, borderRadius: 12 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="h-10 cursor-pointer relative overflow-hidden shadow-lg"
            onClick={() => navigateTo(item.page)}
          >
            <div className="absolute inset-0 flex items-center pl-2">
              <AnimatePresence initial={false}>
                <motion.span
                  key="initial"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex items-center justify-center h-8 w-8 text-xl font-bold backdrop-blur-sm  ${
                    currentPage === item.page 
                      ? 'bg-amber-700 text-amber-50' 
                      : 'bg-amber-100 text-amber-700'
                  } rounded-full`}
                >
                  {item.initial}
                </motion.span>

                <motion.span
                  key="text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="absolute font-bold left-12 text-amber-800 whitespace-nowrap bg-amber-50/80 w-full p-2"
                >
                  {item.name}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}