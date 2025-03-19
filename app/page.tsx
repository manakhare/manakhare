'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BookCover from '../components/pages/CoverPage';
import AnimatedPage from '../components/common/AnimatedPage';
import IndexPage from '../components/pages/IndexPage';
import AboutPage from '../components/pages/AboutPage';
import SkillsPage from '@/components/pages/SkillsPage';

export enum Pages {
  COVER,
  INDEX,
  ABOUT,
  SKILLS,
  PROJECTS,
  CONTACT
}

export default function PortfolioBook() {
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.COVER);
  const [direction, setDirection] = useState<number>(1);

  const renderPage = () => {
    switch(currentPage) {
      case Pages.COVER:
        return <BookCover onNext={() => {
          setDirection(1);
          setCurrentPage(Pages.INDEX);
        }} />;
        
      case Pages.INDEX:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => {
              setDirection(1);
              setCurrentPage(Pages.ABOUT);
            }}
            onPrev={() => {
              setDirection(-1);
              setCurrentPage(Pages.COVER);
            }}
          >
            <IndexPage onNext={() => setCurrentPage(Pages.ABOUT)} />
          </AnimatedPage>
        );

      case Pages.ABOUT:
        return (
          <AnimatedPage
            direction={direction}
            onNext={() => setCurrentPage(Pages.SKILLS)}
            onPrev={() => {
              setDirection(-1);
              setCurrentPage(Pages.INDEX);
            }}
          >
            <AboutPage direction={direction} />
          </AnimatedPage>
        );

        case Pages.SKILLS:
          return (
            <AnimatedPage
                key="skills"
                direction={direction}
                onNext={() => setCurrentPage(Pages.PROJECTS)}
                onPrev={() => {
                  setDirection(-1);
                  setCurrentPage(Pages.ABOUT);
                }}
              >
                <SkillsPage 
                  onNext={() => setCurrentPage(Pages.PROJECTS)}
                  onPrev={() => {
                    setDirection(-1);
                    setCurrentPage(Pages.ABOUT);
                  }}
                />
              </AnimatedPage>
          )

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100">
      <AnimatePresence mode='wait'>
        {renderPage()}
      </AnimatePresence>
    </div>
  );
}




// 'use client';

// import { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import BookCover from '../components/BookCover';
// import BookPage from '../components/BookPage';

// export default function PortfolioBook() {
//   const [currentPage, setCurrentPage] = useState<number>(0);
//   const [direction, setDirection] = useState<number>(1);

//   const pages = [
//     <BookCover key="cover" onNext={() => {
//       setDirection(1);
//       setCurrentPage(1);
//     }} />,
//     <BookPage key="index" direction={direction} onNext={() => {
//       setDirection(1);
//       setCurrentPage(2);
//     }} onPrev={() => {
//       setDirection(-1);
//       setCurrentPage(0);
//     }}>
//       <div className='flex flex-col justify-center items-center h-full w-full'>
//           <h2 className="text-3xl mb-8 text-amber-900 font-bold">Index</h2>
        
//         <ul className="space-y-4 w-[70%]">
//           {['About Me', 'Projects', 'Contact'].map((item, index) => (
//             <li key={item} className="text-xl hover:text-amber-700 cursor-pointer transition-colors flex w-full flex-row justify-between">
//               {item} <span className="float-right">pg. {index + 2}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </BookPage>
//   ];

//   return (
//     <div className="h-screen w-full bg-gray-100">
//       <AnimatePresence mode='wait'>
//         {pages[currentPage]}
//       </AnimatePresence>
//     </div>
//   );
// }