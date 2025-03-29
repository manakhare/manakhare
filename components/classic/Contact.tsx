import { motion, MotionConfig } from 'framer-motion';
import React from 'react'
import { FaGoogle, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const contactMethods = [
  {
    name: 'Email',
    icon: <FaGoogle />,
    url: 'mailto:manakhare5@gmail.com',
    text: 'manakhare5@gmail.com'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/manakhare',
    text: 'https://linkedin.com/in/manakhare'
  },
  {
    name: 'GitHub',
    icon: <FaGithub />,
    url: 'https://github.com/manakhare',
    text: 'https://github.com/manakhare'
  },
  // {
  //   name: 'LeetCode',
  //   icon: <SiLeetcode />,
  //   url: 'https://leetcode.com/manakhare5',
  //   text: 'https://leetcode.com/manakhare5'
  // }
  {
    name: 'Twitter',
    icon: <FaTwitter />,
    url: 'https://x.com/manakhare',
    text: 'https://x.com/manakhare'
  }
];

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-5 mt-5 p-10 mb-10 bg-amber-800 rounded-md py-15'>
        <div className='text-5xl text-amber-50 font-serif font-bold w-3/4 flex justify-center uppercase'>Contact me</div>
        <div className='flex flex-row gap-10 mt-5'>
          {contactMethods.map((method, index) => (
            <motion.a 
              className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full cursor-pointer hover:bg-amber-50 hover:text-amber-800 transition-colors duration-300'
              key={index}
              href={method.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {method.icon}
            </motion.a>
          ))}
            {/* <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full cursor-pointer hover:bg-amber-50 hover:text-amber-800 transition-colors duration-300'>
              <FaGoogle />
            </div>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full cursor-pointer hover:bg-amber-50 hover:text-amber-800 transition-colors duration-300'>
              <FaGithub />
            </div>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full cursor-pointer hover:bg-amber-50 hover:text-amber-800 transition-colors duration-300'>
              <FaLinkedin />
            </div>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full cursor-pointer hover:bg-amber-50 hover:text-amber-800 transition-colors duration-300'>
              <FaTwitter />
            </div> */}
        </div>
    </div>
  )
}

export default Contact