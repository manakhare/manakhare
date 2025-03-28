import React from 'react'
import { FaGoogle, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <div className='w-full flex items-center justify-center flex-col gap-5 mt-5 p-10 mb-10 bg-amber-800 rounded-md'>
        <div className='text-4xl text-amber-50 font-serif font-bold border-b-4 w-3/4 flex justify-center border-amber-50 '>Contact me</div>
        <div className='flex flex-row gap-10 mt-5'>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full'><FaGoogle /></div>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full'><FaGithub /></div>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full'><FaLinkedin /></div>
            <div className='text-3xl text-amber-50 border-4 border-amber-50 p-4 rounded-full'><FaTwitter /></div>
        </div>
    </div>
  )
}

export default Contact