import React from 'react'
import { motion } from "framer-motion"

function Presentation(isMobile) {

  let mobileCheck = isMobile.props


  return (
    <div className='flex justify-center flex-col bg-red-400 z-0'>
      <div className='flex flex-col items-center'>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}>Lien Sanchez</motion.h1>
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >Full Stack Developer</motion.h2>

      </div>
    </div>
  )
}

export default Presentation