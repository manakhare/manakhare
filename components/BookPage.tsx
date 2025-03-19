'use client';

import { motion, AnimatePresence } from "framer-motion";
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


interface BookPageProps {
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

export default function BookPage({ children, direction, onNext, onPrev }: BookPageProps) {
    return (
        <div className="relative h-screen w-full perspective-1000 flex items-center justify-center bg-[url(/background3.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50">
            <AnimatePresence custom={direction}>
                <motion.div
                    key={Math.random()}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-0 w-full h-full flex justify-center items-center"
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                >
                    

                    {/* Right Page (Content) */}
                    <div className="w-[50%] h-full">
                        <div className="w-full h-full flex justify-center items-center bg-aged-paper ml-auto p-12 shadow-book-page bg-[url(/page1.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(0deg)',
                            }}
                        >
                            {children}

                            <div className="absolute bottom-10 left-8 right-8 flex justify-center">
                                <div className="w-[60%] flex flex-row justify-between">
                                    <button
                                        onClick={onPrev}
                                        className="flex items-center gap-2 text-3xl text-amber-900 font-semibold cursor-pointer p-4 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
                                    >
                                        {/* <FiArrowLeft /> Previous */}
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        onClick={onNext}
                                        className="flex items-center gap-2 text-3xl text-amber-900 font-semibold cursor-pointer p-4 rounded-full backdrop-blur-md shadow-md hover:shadow-xl bg-opacity-50"
                                    >
                                        {/* Next <FiArrowRight /> */}
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