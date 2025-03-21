'use client';

import { useDrag } from "@use-gesture/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface AnimatedPageProps {
  children: React.ReactNode;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
}

const pageVariants = {
  enter: (direction: number) => ({
    rotateY: direction > 0 ? -270 : 90,
    x: direction > 0 ? '50%' : '-50%',
    opacity: 0,
  }),
  center: {
    rotateY: 0,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    rotateY: direction < 0 ? 120 : -120,
    x: direction < 0 ? '50%' : '-50%',
    opacity: 0,
  }),
};

export default function AnimatedPage({ children, direction, onNext, onPrev }: AnimatedPageProps) {
  const bind = useDrag(({ swipe: [swipeX] }) => {
    if (swipeX === -1) onNext();
    if (swipeX === 1) onPrev();
  });
  
  return (
    <div 
      {...bind()}
      className="relative h-screen w-full perspective-1000 flex items-center justify-center bg-[url(/background3.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50">
      <AnimatePresence custom={direction}>
        <motion.div
          key={Math.random()}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full flex justify-center items-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="w-[100%] lg:w-[50%] h-full relative">
            <div className="w-full h-full flex justify-center items-center bg-aged-paper ml-auto p-12 shadow-book-page bg-[url(/page7.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50">
              {children}

              {/* <div className="absolute bottom-10 left-8 right-8 flex justify-center"> */}
              <div className="hidden lg:block h-full bg-yellow-200 flex justify-center items-center">
                <div className="w-[60%] h-full flex flex-row justify-between items-center">
                  <button
                    onClick={onPrev}
                    className="absolute h-[90%] border bottom-6 -left-20 flex items-center text-3xl text-amber-900 font-semibold cursor-pointer px-4 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={onNext}
                    className="absolute flex h-[90%] bottom-6 -right-20 border items-center text-3xl text-amber-900 font-semibold cursor-pointer px-4 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
                  >
                    <FaChevronRight />
                  </button>
                </div>

                <div className="fixed left-4 right-4 top-1/2 -translate-y-1/2 md:bottom-10 md:left-8 md:right-8 md:top-auto flex justify-between">
                  <button
                    onClick={onPrev}
                    className="md:hidden text-3xl text-amber-900 bg-amber-50/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={onNext}
                    className="md:hidden text-3xl text-amber-900 bg-amber-50/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
                  >
                    <FaChevronRight />
                  </button>
                </div>


              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}