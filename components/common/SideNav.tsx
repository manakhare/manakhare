// 'use client';
// import { motion } from 'framer-motion';
// import { Pages } from '@/types/navigation';
// import { useRouter } from 'next/navigation';

// interface SideNavProps {
//   navigateTo: (page: Pages) => void;
//   currentPage: Pages;
// }

// export default function SideNav({ navigateTo, currentPage }: SideNavProps) {
//   const router = useRouter();
  
//   const navItems = [
//     { initial: 'H', name: 'Home', path: '/' },
//     { initial: 'C', name: 'Classic', path: '/classic' },
//     { initial: 'A', name: 'About', page: Pages.ABOUT },
//     { initial: 'S', name: 'Skills', page: Pages.SKILLS },
//     { initial: 'P', name: 'Projects', page: Pages.PROJECTS },
//     { initial: 'C', name: 'Contact', page: Pages.CONTACT },
//   ];

//   const handleNavigation = (target: Pages | string |undefined) => {
//     if (typeof target === 'string') {
//       router.push(target);
//     } else if(target !== undefined) {
//       navigateTo(target);
//     }
//   };

//   return (
//     <motion.nav 
//       className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
//       initial={{ x: -100 }}
//       animate={{ x: 0 }}
//     >
//       <div className="flex flex-col gap-2 bg-amber-50/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
//         {navItems.map((item) => (
//           <motion.div
//             key={item.name}
//             initial={{ width: 40, borderRadius: 9999 }}
//             whileHover={{ width: 120, borderRadius: 8 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
//             className="h-10 relative overflow-hidden cursor-pointer"
//             onClick={() => handleNavigation('path' in item ? item.path : item.page)}
//           >
//             <div className="absolute left-0 top-0 h-full flex items-center">
//               <div className="flex items-center gap-2 pl-2">
//                 <span className={`text-xl font-bold ${
//                   currentPage === (item as any).page 
//                     ? 'text-amber-900' 
//                     : 'text-amber-700'
//                 }`}>
//                   {item.initial}
//                 </span>
//                 <motion.span
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                   className="text-amber-700 whitespace-nowrap pr-2"
//                 >
//                   {item.name}
//                 </motion.span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.nav>
//   );
// }



'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Pages } from '@/types/navigation';
import { useRouter } from 'next/navigation';

interface SideNavProps {
  navigateTo: (page: Pages) => void;
  currentPage: Pages;
}


export default function SideNav({ navigateTo, currentPage }: SideNavProps) {
  const router = useRouter();

    const navItems = [
      { initial: 'A', name: 'About', page: Pages.ABOUT },
      { initial: 'S', name: 'Skills', page: Pages.SKILLS },
      { initial: 'P', name: 'Projects', page: Pages.PROJECTS },
      { initial: 'C', name: 'Contact', page: Pages.CONTACT },
    ];

    const navItems_secondary = [
      {initial: 'H', name: 'Home', page: '/'},
      {initial: 'C', name: 'Classic', page: '/classic'},
      {initial: 'D', name: 'Download', page: '/download'},
    ]

    return (
    <motion.nav 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="hidden lg:block fixed left-0 p-2 pr-4 top-1/2 -translate-y-1/2 z-50 h-[60%] flex flex-col gap-4 items-center justify-center rounded-tr-2xl rounded-br-2xl"
    >
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        {navItems.map((item) => (
          <motion.div
            key={item.page}
            initial={{ width: 40, borderRadius: 9999 }}
            whileHover={{ width: 130, borderRadius: 12 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="h-10 cursor-pointer relative overflow-hidden shadow-lg flex items-center justify-center"
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

        {
          navItems_secondary.map((item) => (
            <motion.div
            key={item.page}
            initial={{ width: 40, borderRadius: 9999 }}
            whileHover={{ width: 130, borderRadius: 12 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="h-10 cursor-pointer relative overflow-hidden shadow-lg flex items-center justify-center"
            onClick={() => router.push(item.page)}
          >
            <div className="absolute inset-0 flex items-center pl-2">
              <AnimatePresence initial={false}>
                <motion.span
                  key="initial"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex items-center justify-center h-8 w-8 text-xl font-bold backdrop-blur-sm  
                  bg-amber-100 text-amber-700
                  rounded-full`}
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
          ))
        }
      </div>
    </motion.nav>
  );
}