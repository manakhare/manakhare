'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypewriterText } from '../common/TypewriterText';
import { TimelineItem } from '../common/TimelineItem';
import { Modal } from '../common/Modal';

interface AboutPageProps {
  direction: number;
}

const FULL_TEXT = `I am a full stack developer. I enjoy the process of designing and building applications and watching it all come together. I have worked in both a service and product company and have seen the best of both worlds. I have worked with MERN stack, React.js, Node.js, Docker, Redis, Kafka, Postgresql, Express.js and MongoDB, HTML, CSS, JavaScript, and am currently getting to know AI deeply. Here is all that you need to know about me.`;

export default function AboutPage({ direction }: AboutPageProps) {
  const [step, setStep] = useState(0);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const fullTextRef = useRef<{ skipAnimation: () => void }>(null);

  const handleClick = () => {
    if (step === 0) setStep(1);
    else if (step === 1) setStep(2);
    else if (step === 2) {
      fullTextRef.current?.skipAnimation();
    }
  };

  useEffect(() => {
    if (direction === 1) setStep(0);
  }, [direction]);

  return (
    <div 
      className="w-full max-w-2xl" 
      onClick={handleClick}
    >
      {selectedItem && (
        <Modal
          {...selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

      <motion.div 
        className="text-center mb-4 mt-8 flex justify-center items-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className='w-3/4'>
          <TypewriterText 
            text="About Me" 
            onComplete={() => setStep(1)}
            className="text-5xl font-bold mb-4 font-serif text-amber-900 border-b-4 border-amber-900"
            speed={step > 0 ? 0 : 30}
          />
        </div>
      </motion.div>

      {step >= 1 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <TypewriterText
            text="Hi👋 I am Mana Khare"
            onComplete={() => setStep(2)}
            className="text-3xl font-semibold mb-4 text-center font-serif text-amber-800"
            speed={step > 1 ? 0 : 30}
          />
        </motion.div>
      )}

      {step >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg mb-8 text-center px-16 cursor-default font-serif text-amber-900"
        >
          <TypewriterText
            // ref={fullTextRef}
            text={FULL_TEXT}
            onComplete={() => setStep(3)}
            speed={30}
            className="whitespace-pre-wrap"
          />
        </motion.div>
      )}    

      {step >= 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col justify-start items-start ml-24"
        >
          <TimelineItem
            title="Lakshmi Narain College of Technology"
            subtitle="CGPA: 8.91"
            location="Bhopal, Madhya Pradesh"
            year="July 2019 - June 2023"
            description="Bachelor of Technology in Computer Science"
            onClick={() => setSelectedItem({
              title: "Lakshmi Narain College of Technology",
              subtitle: "CGPA: 8.91",
              year: "July 2019 - June 2023",
              location: "Bhopal, Madhya Pradesh",
              description: `Bachelor of Technology in Computer Science.
                            Subjects: Database Management Systems, Data Structures, Algorithms, Operating Systems, Computer Networks, Software Engineering, Web Development, and more.`
            })}
          />
          <TimelineItem
            title="Accenture"
            subtitle="Fullstack Developer"
            location="Pune, Maharashtra"
            year="July 2023 - March 2025"
            description="Bachelor of Technology in Computer Science"
            onClick={() => setSelectedItem({
              title: "Accenture",
              subtitle: "Fullstack Developer",
              year: "July 2023 - March 2025",
              location: "Pune, Maharashtra",
              techstack: "React, Node, Express, MongoDB, HTML, CSS, JavaScript",
              description: `
                        Developed a responsive internal dashboard using Reactjs for the frontend, improving user interaction by 30% through enhanced UI/UX design. 
                        Coded and optimized the frontend, ensuring a 25% faster load time and smoother navigation experience for team members. 
                        Integrated backend APIs built with Expressjs, facilitating seamless communication between frontend and backend`
            })}
          />
          <TimelineItem
            title="Carwale"
            subtitle="Associate Software Engineer Intern"
            location="Remote | Navi Mumbai, Maharashtra"  
            year="Sep 2022 - March 2023"
            description=""
            onClick={() => setSelectedItem({
              title: "Carwale",
              subtitle: "Associate Software Engineer Intern",
              year: "Sep 2022 - March 2023",
              location: "Remote | Navi Mumbai, Maharashtra",
              description: `Developed a full-stack internal Quarterly Evaluation dashboard using ASPNET, CSHTML, jQuery, and SQL in the MVC pattern, utilized by over 400+ employees across the company.
                            Collaborated with a cross-functional team on the design, development and API integration.
                            Designed high-level architectural flows and implemented low-level functionalities, improving system scalability and reducing technical debt by 25%.
                            Contributed to an Agile (Scrum) environment, achieving on-time delivery of features in 80% of sprints, ensuring continuous iteration and improvement`
            })}
          />
          <TimelineItem
            title="Umpteen Innovations"
            subtitle="Frontend Developer Intern"
            location="Bhopal, Madhya Pradesh"
            year="Feb 2022 - May 2022"
            description=""
            onClick={() => setSelectedItem({
              title: "Umpteen Innovations",
              subtitle: "Frontend Developer Intern",
              year: "Feb 2022 - May 2022",
              location: "Bhopal, Madhya Pradesh",
              description: `Built front-end web applications, while communicating with the client and understanding his needs.
                            Developed and designed components in React as per requirement.`
            })}
          />
          {/* Add other TimelineItems */}
        </motion.div>
      )}
    </div>
  );
}


// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import {TypewriterText} from '../common/TypewriterText';
// import {TimelineItem} from '../common/TimelineItem';

// interface AboutPageProps {
//   direction: number;
// }

// export default function AboutPage({ direction }: AboutPageProps) {
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     if (direction === 1) setStep(0);
//   }, [direction]);

//   return (
//     <div className="w-full max-w-2xl">
//       {/* Title Section */}
//       <motion.div 
//         className="text-center mb-8"
//         initial={{ y: 20 }}
//         animate={{ y: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         <TypewriterText 
//           text="About Me" 
//           onComplete={() => setStep(1)}
//           className="text-5xl font-bold mb-8"
//         />
//       </motion.div>

//       {/* Content Sections */}
//       {step >= 1 && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//           <TypewriterText
//             text="Hi! I am Mana Khare"
//             delay={0.5}
//             onComplete={() => setStep(2)}
//             className="text-3xl font-semibold mb-4 text-center"
//           />
//         </motion.div>
//       )}

//       {step >= 2 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-lg mb-8 text-center px-16"
//         >
//           <TypewriterText
//             text="I am a full stack developer. I enjoy the process of designing and building applications and watching it all come together. I have worked in both a service and product company and have seen the best of both worlds. I have worked with MERN stack, React.js, Node.js, Docker, Redis, Kafka, Postgresql, Express.js and MongoDB, HTML, CSS, JavaScript, and am currently getting to know AI deeply. Here is all that you need to know about me."
//             delay={0.5}
//             onComplete={() => setStep(3)}
//           />
//         </motion.div>
//       )}    

//       {step >= 3 && (
//         <div className="flex flex-col justify-start items-start ml-24">
//           <TimelineItem
//             title="Lakshmi Narain College of Technology"
//             subtitle="CGPA: 8.91"
//             location="Bhopal, Madhya Pradesh"
//             year="July 2019 - June 2023"
//             description="Bachelor of Technology in Computer Science"
//             delay={0}
//             className=""
//           />
//           <TimelineItem
//             title="Umpteen Innovations"
//             subtitle="Frontend Developer Intern"
//             location='Bhopal, Madhya Pradesh'
//             year="July 2019 - June 2023"
//             description="Bachelor of Technology in Computer Science"
//             delay={0}
//             className=""
//           />
//           <TimelineItem
//             title="Umpteen Innovations"
//             subtitle="Frontend Developer Intern"
//             location='Bhopal, Madhya Pradesh'
//             year="July 2019 - June 2023"
//             description="Bachelor of Technology in Computer Science"
//             delay={0}
//             className=""
//           />
//           <TimelineItem
//             title="Umpteen Innovations"
//             subtitle="Frontend Developer Intern"
//             location='Bhopal, Madhya Pradesh'
//             year="July 2019 - June 2023"
//             description="Bachelor of Technology in Computer Science"
//             delay={0}
//             className=""
//           />
//           {/* Add other TimelineItems */}
//         </div>
//       )}
//     </div>
//   );
// }