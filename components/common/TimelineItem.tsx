'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  year: string;
  location: string;
  description: ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export function TimelineItem({ title, subtitle, year, location, description, delay = 0, onClick }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay + 0.5, duration: 0.5 }}
      // className="relative pl-8 border-l-4 border-amber-700 mb-4 hover:shadow-md cursor-pointer px-4 py-2 w-[85%] group"
      className="w-full relative px-6 py-3 lg:pl-8 border-l-4 border-amber-700 hover:bg-amber-50 lg:p-2 rounded-lg cursor-pointer bg-amber-50 lg:bg-transparent  "
      onClick={onClick}
    >
      <div className="absolute w-4 h-4 bg-amber-700 rounded-full -left-[10px] top-4 group-hover:bg-amber-900 transition-colors" />
      <div className="">
        <h3 className="text-lg lg:text-2xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors font-serif">{title}</h3>
        <p className="text-sm text-amber-800">{subtitle}</p>
        <div className="hidden flex flex-row justify-between mt-2">
          <p className="text-sm text-amber-700 font-serif">{year}</p>
          <p className="text-sm text-amber-800 font-serif">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}
