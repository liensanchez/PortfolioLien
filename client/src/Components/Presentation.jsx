import React from 'react'
import { motion } from "framer-motion"
import mountainImg from '../assets/img/mountain.png'
import landscapeImg from '../assets/img/no-mountain.png'



function Presentation(isMobile) {

  let mobileCheck = isMobile.props


  return (
    <>
    {mobileCheck ? 
      <div className='flex justify-center flex-col bg-red-400'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <img src={mountainImg} alt="" />
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}>Lien Sanchez</motion.h1>
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >Full Stack Developer</motion.h2>
          <img src={landscapeImg} alt="" />
        </div>
      </div>
      : <h2>PC</h2> }
    </>

  )
}

export default Presentation