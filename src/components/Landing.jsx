import React from 'react'
import {motion} from 'framer-motion'

const Landing = () => {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full px-4 pt-[35vh] sm:pt-[25vh] md:pt-[10vh] lg:pt-[8vh] h-screen'>
      <div>
        <motion.h1 initial={{y:0, opacity:0}} animate={{opacity:1}} transition={{duration:2, delay:1}} className='font-headingFont text-[9vw] uppercase tracking-tighter'>Uttam Chouhan</motion.h1>
      </div>
      <div className='flex gap-5 justify-end relative'>
        <motion.h1 initial={{opacity:0, x:0}} animate={{opacity:1, x:[0,-80,0]}} transition={{duration:2, delay:1, ease:"easeInOut"}} className='font-textFont text-[8vw] uppercase tracking-tighter text-end font-bold'>Full Stack<br/>Developement</motion.h1>
        <motion.div initial={{width:0}} animate={{width:"4vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='p-3 bg-zinc-900'></motion.div>
      </div>
    </div>
  )
}

export default Landing
