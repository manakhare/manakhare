import { motion } from 'framer-motion'
import React from 'react'

function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: 0.2 }}
      className='w-full mt-10'>
        <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.5 }}
            // animate={{ opacity: 1, y: 10, scale: 1 }}
            whileInView={{ 
              opacity: 1, 
              y: 10, 
              scale: 1,
              transition: { duration: 1 },
            }}
            viewport={{amount: "some", once: true}}
            transition={{ duration: 0.8 }}
          className='w-full grid grid-cols-8 grid-rows-3 gap-5'>

            <motion.div 
              initial={{ opacity: 0, y: -10, x: -50, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, x: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              className='p-24 cursor-pointer flex justify-center items-center col-span-5 bg-amber-900 font-bold uppercase text-amber-50 text-2xl tracking-wider'>
                Whizz
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              className='p-24 cursor-pointer flex justify-center items-center col-span-3 bg-amber-800 font-bold uppercase text-amber-50 text-2xl'>
                Medium
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              className='p-2 cursor-pointer 4 flex justify-center items-center col-span-2 bg-amber-900 font-bold uppercase text-amber-50 text-2xl'>
                Bookish-portfolio
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='p-24 flex justify-center items-center col-span-4 bg-amber-800 uppercase font-serif font-bold text-amber-50 text-5xl tracking-wider'>
                Projects
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              className='p-24 cursor-pointer flex justify-center items-center col-span-2 bg-amber-900 font-bold uppercase text-amber-50 text-2xl'>
                Expense-tracker
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              className='p-24 cursor-pointer flex justify-center items-center col-span-3 bg-amber-800 font-bold uppercase text-amber-50 text-2xl'>
                Threads
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.5 }}
              whileInView={{opacity: 1, y: 0, scale: 1}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 }}}
              className='p-24 cursor-pointer flex justify-center items-center col-span-5 bg-amber-900 font-bold uppercase text-amber-50 text-2xl'>
                Let us chat
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Projects