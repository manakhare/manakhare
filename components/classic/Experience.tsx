import { motion } from 'framer-motion'
import React from 'react'

function Experience() {
  return (
    <div className='w-full mt-10'>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='w-full flex justify-center items-center py-10'>
            <div className='text-5xl uppercase text-amber-900 font-serif font-bold tracking-wider w-3/4 flex justify-center'>
                Experience
            </div>
        </motion.div>
        <div  className='w-full border-4 rounded-md border-amber-800 grid grid-cols-8 items-start my-5 py-6 gap-5'>
            <div className='col-span-3 w-full h-full flex justify-center items-center py-10'>
                <div className='text-4xl tracking-wider font-bold font-serif text-amber-900 uppercase'>Accenture</div>
            </div>
            <div className='col-span-5 w-full h-full flex justify-start items-center py-10 px-10'>
                <ul className='list-disc ml-10 space-y-2'>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                </ul>
            </div>
        </div>
        <div  className='w-full border-4 rounded-md border-amber-800 grid grid-cols-8 items-start my-5 py-6 gap-5'>
            <div className='col-span-3 w-full h-full flex justify-center items-center py-10'>
                <div className='text-4xl tracking-wider font-bold font-serif'>Accenture</div>
            </div>
            <div className='col-span-5 w-full h-full flex justify-start items-center py-10 px-10'>
                <ul className='list-disc ml-10 space-y-2'>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                </ul>
            </div>
        </div>
        <div  className='w-full border-4 rounded-md border-amber-800 grid grid-cols-8 items-start my-5 py-6 gap-5'>
            <div className='col-span-3 w-full h-full flex justify-center items-center py-10'>
                <div className='text-4xl tracking-wider font-bold font-serif'>Accenture</div>
            </div>
            <div className='col-span-5 w-full h-full flex justify-start items-center py-10 px-10'>
                <ul className='list-disc ml-10 space-y-2'>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                    <li>Point</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience