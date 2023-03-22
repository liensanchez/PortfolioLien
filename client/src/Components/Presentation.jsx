import React, { useEffect, useState } from 'react'
import Lien from '../assets/img/LienOpenHead.png'
import {motion} from 'framer-motion'

function Presentation(isMobile) {

  let mobileCheck = isMobile.props

  const [index, setIndex] = useState(0);
  const technologies = ['Javascript', 'React', 'Node.js', 'Redux', 'Sequelize', 'SQL', 'CSS', 'Tailwind', 'GO'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (index < technologies.length - 1) {
        setIndex(index + 1);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [index, technologies.length]);

  return (
    <>
    {mobileCheck ? 
      <>     
      <div className='flex flex-col bg-blue-400 mt-10'> 
        <div className='flex flex-col items-center mt-4'>
          <h1>Lien Sanchez</h1>
          <h2>Full Stack Developer con:</h2>
        </div> 
        <div className='flex flex-col items-center'>
          {technologies.slice(0, index + 1).map((technology, index) => (
            <motion.h2 
            initial={{x: 0}}
            animate={{x: 0,
                      rotate:90,
                      y:500,
                      scale: 0}}
            transition={{ ease: "easeOut",
                          duration: 9,
                          repeat: Infinity  }}
            className='absolute'
            key={index}>
              {technology}
            </motion.h2>
          ))}
          <img src={Lien} alt="" className='z-10 '/>
        </div>
      </div>
      </>
      : <h2>PC</h2> }


    </>

  )
}


export default Presentation

