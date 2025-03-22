'use client';

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { GiSecretBook } from "react-icons/gi";
import { IoIosPaper, IoMdDownload } from "react-icons/io";


export default function Entry() {
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
              <div>As an avid reader, I've crafted my portfolio to reflect that passion – choose between my book-inspired version or the classic for a quicker look!</div>
              {/* <div>There are two ways you can experience my work.</div> */}

              {/* <ul className="list-disc flex flex-col gap-4">
                    <li>
                    <span className="font-semibold">The Bookish Portfolio: </span>Since I'm an avid reader, I’ve designed this version of my portfolio with a book-inspired theme. If you're in the mood for something a little more creative, this is for you!
                    </li>
                    <li>
                    <span className="font-semibold">The Classic Portfolio: </span>If you're short on time and just want to get straight to the essentials, this is the quick and easy option.
                    </li>      
                  </ul> */}
              {/* <div>I am an avid reader, which led me to build my portfolio inspired by books. So if you want to experience something new, then you can go for my bookish-portfolio</div>  
                  <div>And if you are in a hurry, then go for my basic portfolio.</div> */}
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
                  <Link href='/classic'>
                    <div className="py-2 px-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 cursor-pointer">
                      <button className="cursor-pointer flex gap-2 items-center justify-center"><span><IoIosPaper /></span>Classic</button>
                    </div>
                  </Link>
                </div>
                <div className="py-2 px-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 cursor-pointer">
                  <button className="cursor-pointer flex gap-2 items-center justify-center"><span><IoMdDownload /></span>Download</button>
                </div>
              </div>
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}