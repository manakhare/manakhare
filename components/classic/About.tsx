"use client"
import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'

const FULL_TEXT = `I am a full stack developer.
I enjoy the process of designing and building applications and watching it all come together.
I have worked in both a service and product company and have seen the best of both worlds.
I have worked with MERN stack, React.js, Node.js, Docker, Redis, Kafka, Postgresql, Express.js and MongoDB, HTML, CSS, JavaScript, and am currently getting to know AI deeply.
Here is all that you need to know about me.`;

function About() {
    return (
        <div className='bg-amber-100'>
            <div className='w-full justify-center items-center flex flex-col pt-10'>
                <div className='w-[10%] h-50 border-4 border-amber-900 shadow-sm flex justify-center items-center py-10 rounded-full bg-[url(/Cropped.png)] bg-cover bg-scale  bg-center bg-no-repeat'>
                    {/* <Image src='/Cropped.png' height={50} width={50} alt='image'/> */}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className='px-32 mx-32 py-5 tracking-wide font-serif text-lg text-amber-900 text-center'
            >
                {FULL_TEXT}
            </motion.div>
        </div>
    )
}

export default About