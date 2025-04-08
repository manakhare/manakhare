'use client';

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GiSecretBook } from "react-icons/gi";
import { IoIosPaper, IoMdDownload } from "react-icons/io";


export default function Entry() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume_Mana_7April25.pdf';
    link.download = 'Mana_Khare_Resume.pdf';
    link.click();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[url(/background3.jpg)] bg-no-repeat bg-center bg-cover bg-opacity-50">
      <div className="w-[70%] h-full gap-4 lg:w-[70%] lg:h-[70%] flex flex-col justify-center lg:justify-start items-center text-center lg:gap-4">
        <AnimatePresence>
          <motion.h2
            key="projects-heading"
            initial={{ opacity: 0, x: -100, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-3xl lg:mt-16 lg:text-4xl font-bold text-amber-900 w-full flex justify-center items-center font-serif"
          >
            Hey there! I'm Mana Khare.
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence>
          <motion.h2
            key="projects-heading"
            initial={{ opacity: 0, x: -100, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:mt-0 lg:text-3xl font-semibold text-amber-900 w-full flex justify-center items-center font-serif"
          >
            Welcome to my portfolio!
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence>
          <motion.h2
            key="projects-heading"
            initial={{ opacity: 0, x: -100, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-2xl font-normal text-amber-900 w-full flex justify-center items-center font-serif"
          >
            <div className="w-full lg:w-[70%] flex flex-col gap-4">
              {/* <div>As an avid reader, I've crafted my portfolio to reflect that passion – choose between my book-inspired version or the classic for a quicker look!</div> */}
              <div>As an avid reader, I've crafted my portfolio to reflect that passion!</div>
              
            </div>
          </motion.h2>
        </AnimatePresence>



        <div className="mt-4 lg:mt-8">
          <AnimatePresence>
            <motion.h2
              key="projects-heading"
              initial={{ opacity: 0, x: 0, y: -30 }}
              animate={{ opacity: 1, x: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-xl lg:text-2xl font-bold text-amber-900 w-full flex justify-center items-center font-serif"
            >
              <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
                <div className="flex flex-row gap-5 lg:gap-10">
                  <Link href='/bookish'>
                    <div className="py-2 px-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 cursor-pointer">
                      <button className="cursor-pointer flex gap-2 items-center justify-center">
                        <span><GiSecretBook /></span>Bookish</button>
                    </div>
                  </Link>
                  {/* <Link href='/classic'>
                    <div className="py-2 px-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 cursor-pointer">
                      <button className="cursor-pointer flex gap-2 items-center justify-center"><span><IoIosPaper /></span>Classic</button>
                    </div>
                  </Link> */}
                </div>
                <div className="py-2 px-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 cursor-pointer">
                  <button
                    onClick={handleDownload}
                   className="cursor-pointer flex gap-2 items-center justify-center"><span><IoMdDownload /></span>Resume</button>
                </div>
              </div>
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}