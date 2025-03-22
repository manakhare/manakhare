"use client";
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Classic() {
  return (
      <div className='w-screen min-h-screen bg-amber-50 flex flex-col items-center justify-center'>

        <div>
  
            <motion.img 
              src="/Cropped.png"
              alt="Profile"
              className="w-32 h-32 rounded-full mb-8 shadow-xl object-contain bg-amber-200"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            />   
        </div>

      </div>
  )
}
