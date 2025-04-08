'use client';

import { motion } from "framer-motion";
import { desc } from "framer-motion/client";
import { ReactNode } from "react";

interface ProjectModalProps {
    name: string;
    description: string;
    github: string;
    demo?: string;
    techStack: string[];
    detailedDescription: string[];
    onClose: () => void;
    children: ReactNode
  }

export function ProjectModal({ name, github, demo, techStack, description, onClose, children }: ProjectModalProps) {
  // const points = description?.split('.').pop() ? [description.split('.').pop()!] : [];
  // const points = description.split('.');
  // points.pop();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="relative bg-aged-paper rounded-lg p-8 max-w-2xl w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
            {children}
        </div>
        {/* <h3 className="text-3xl font-bold text-amber-900 mb-1 font-serif">{name}</h3>
        <p className="text-lg text-amber-800 font-semibold font-normal font-serif">{name}</p>
        <div className="flex justify-between">
        <p className="text-sm text-amber-700 mb-4">{name}</p>
          <p className="text-sm text-amber-700">{name}</p>
        </div>
        <div className="text-amber-900">
          <ul className="list-disc pl-4 font-serif">
            {points.map((point: string, i: number) => (
              <li key={i} className="mb-2">{point}</li>
            ))}
          </ul>
        </div> */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 text-2xl cursor-pointer"
        >
          &times;
        </button>
      </motion.div>
    </motion.div>
  );
}