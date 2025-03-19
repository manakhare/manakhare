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
      className="w-full relative pl-8 border-l-4 border-amber-700 hover:bg-amber-50 p-2 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute w-4 h-4 bg-amber-700 rounded-full -left-[10px] top-4 group-hover:bg-amber-900 transition-colors" />
      <div>
        <h3 className="text-2xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">{title}</h3>
        <p className="text-lg text-amber-800">{subtitle}</p>
        <div className="hidden flex flex-row justify-between mt-2">
          <p className="text-sm text-amber-700">{year}</p>
          <p className="text-sm text-amber-800">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}



// 'use client';

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface TimelineItemProps {
//   title: string;
//   subtitle: string;
//   year: string;
//   location: string;
//   description: ReactNode;
//   className?: string;
//   delay?: number;
// }

// export function TimelineItem({ title, location, className, subtitle, year, description, delay = 0 }: TimelineItemProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: delay + 0.5, duration: 0.5 }}
//       className={`relative pl-8 border-l-4 border-amber-700 mb-4 hover:shadow-md hover:border-b-amber-700 hover:border cursor-pointer px-4 py-1 w-[85%] ${className}`}
//     >
//       <div className="absolute w-4 h-4 bg-amber-700 rounded-full -left-[10px] top-4"></div>
//       <div>
//         <h3 className="text-2xl font-bold text-amber-900">{title}</h3>
//         <p className="text-lg text-amber-800">{subtitle}</p>
//         <div className="hidden flex flex-row justify-between">
//           <p className="text-sm text-amber-700 mb-2">{year}</p>
//           <p className="text-sm text-amber-800">{location}</p>
//         </div>
//         <div className="hidden text-amber-900 space-y-2">{description}</div>

//       </div>
//     </motion.div>
//   );
// }