import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PageFlipProps {
    children: React.ReactNode;
    direction: number;
    onNext: () => void;
    onPrev: () => void;
}

const pageVariants = {
    enter: (direction: number) => ({
        rotateY: direction > 0 ? 120 : -120,
        opacity: 0,
    }),
    center: {
        rotateY: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        rotateY: direction < 0 ? 120 : -120,
        opacity: 0,
    }),
};

export default function PageFlip({ children, direction, onNext, onPrev }: PageFlipProps) {

    return (
        <div className="relative h-screen w-full">
            <AnimatePresence custom={direction}>
                <motion.div
                    key={Math.random()}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-amber-50 shadow-xl p-12"
                    style={{
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {children}

                    {/* Navigation Controls */}
                    <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                        <button
                            onClick={onPrev}
                            className="flex items-center gap-2 text-amber-700 hover:text-amber-900"
                        >
                            {/* <FiArrowLeft /> Previous */}
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={onNext}
                            className="flex items-center gap-2 text-amber-700 hover:text-amber-900"
                        >
                            {/* Next <FiArrowRight /> */}
                            <FaChevronRight />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}