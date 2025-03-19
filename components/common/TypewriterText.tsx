'use client';

import { motion, useAnimation } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  ref?: RefObject<{
    skipAnimation: () => void;
} | null>
}

export function TypewriterText({ 
  text, 
  delay = 0, 
  speed = 30, 
  onComplete, 
  className 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const controls = useAnimation();
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);
  const isCompleted = useRef(false);

  const skipAnimation = () => {
    if (!isCompleted.current) {
      setDisplayText(text);
      controls.start({ opacity: 1 }).then(() => {
        onComplete?.();
      });
      isCompleted.current = true;
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const animate = async () => {
      await controls.start({ opacity: 1 });
      for (let i = 0; i < text.length; i++) {
        await new Promise<void>(resolve => {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(text.slice(0, i + 1));
            resolve();
          }, speed);
        });
      }
      isCompleted.current = true;
      onComplete?.();
    };

    const timeout = setTimeout(animate, delay);
    return () => {
      clearTimeout(timeout);
      clearTimeout(timeoutRef.current);
    };
  }, [text, delay, speed]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={controls}
      className={className}
      onClick={skipAnimation}
    >
      {displayText}
    </motion.div>
  );
}


// 'use client';

// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";

// interface TypewriterTextProps {
//   text: string;
//   delay?: number;
//   className?: string;
//   onComplete?: () => void;
// }

// export function TypewriterText({ text, className, delay = 0, onComplete }: TypewriterTextProps) {
//   const [displayText, setDisplayText] = useState("");
//   const controls = useAnimation();

//   useEffect(() => {
//     const animate = async () => {
//       await controls.start({ opacity: 1 });
//       for (let i = 0; i < text.length; i++) {
//         await new Promise(resolve => setTimeout(resolve, 50));
//         setDisplayText(text.slice(0, i + 1));
//       }
//       onComplete?.();
//     };

//     const timeout = setTimeout(animate, delay);
//     return () => clearTimeout(timeout);
//   }, [text, delay]);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={controls}
//       className={`text-amber-900 ${className}`}
//     >
//       {displayText}
//     </motion.div>
//   );
// }