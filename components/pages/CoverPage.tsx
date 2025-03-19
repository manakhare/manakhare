'use client';

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface BookCoverProps {
  onNext: () => void;
}

export default function CoverPage({ onNext }: BookCoverProps) {
  return (
    <div className="relative h-screen w-full bg-rustic-brown">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg flex gap-8 text-aged-paper"
      >
        <button className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer">Projects</button>
        <button className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer">About Me</button>
        <button className="hover:text-amber-200 text-amber-300 transition-colors cursor-pointer">Contact</button>
      </motion.nav>

      <div className="flex flex-col items-center justify-center h-full bg-brown-900 bg-[url(/background3.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50">
      <div className="bg-[url(/cover3.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50 w-[50%] h-[100%] flex flex-col items-center justify-center">
        <motion.img
          src="/Mana.png"
          alt="Profile"
          className="w-48 h-48 rounded-full mb-8 shadow-xl object-contain bg-amber-200"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.h1
          className="text-5xl font-bold mb-4 text-amber-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Mana Khare
        </motion.h1>
        <motion.p
          className="text-xl text-amber-200 mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.button
          onClick={onNext}
          className="flex items-center gap-2 text-amber-300 cursor-pointer hover:text-amber-200 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Next <FiArrowRight />
        </motion.button>
      </div>
      </div>
    </div>
  );
}