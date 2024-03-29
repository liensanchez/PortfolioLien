import React, { useEffect, useState } from 'react'
import Lien from '../assets/img/LienOpenHead.png'
import {motion} from 'framer-motion'
import '../App.css'
import jsimg from '../assets/img/logos/js.png'
import reactimg from '../assets/img/logos/react.png'
import reduximg from '../assets/img/logos/redux.png'
import sequelizeimg from '../assets/img/logos/sequelize.png'
import nodeimg from '../assets/img/logos/node.png'
import passportimg from '../assets/img/logos/passport.png'
import nodemailerimg from '../assets/img/logos/nodemailer.png'
import mercadopagoimg from '../assets/img/logos/mercadopago.png'
import socketimg from '../assets/img/logos/socket.png'
import pgimg from '../assets/img/logos/postgres.png'
import sqlimg from '../assets/img/logos/sql.png'


function Presentation(isMobile) {

  let mobileCheck = isMobile.props

  const [index, setIndex] = useState(0)

  const technologies = [<img src={jsimg} className='h-10 w-10' alt=''/>,
                        <img src={reactimg} className='h-10 w-10' alt=''/>,
                        <img src={reduximg} className='h-10 w-15' alt=''/>,
                        <img src={sequelizeimg} className='h-10 w-10' alt=''/>,
                        <img src={nodeimg} className='h-10 w-15' alt=''/>,
                        <img src={passportimg} className='h-10 w-15' alt=''/>,
                        <img src={nodemailerimg} className='h-10 w-10' alt=''/>,
                        <img src={mercadopagoimg} className='h-10 w-10' alt=''/>,
                        <img src={socketimg} className='h-10 w-10' alt=''/>,
                        <img src={pgimg} className='h-10 w-10' alt=''/>,
                        <img src={sqlimg} className='h-10 w-10' alt=''/>]

  

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
        <div className='flex flex-col mt-10'> 
          <div className='flex flex-col items-center mt-4'>
            <h1 className='font-mono text-2xl font-bold'>Lien Sanchez</h1>
            <h2 className='font-mono text-2xl font-bold'>Full Stack Developer with:</h2>
          </div> 
          <div className='flex flex-col items-center'>
            {technologies.slice(0, index + 1).map((technology, index) => (
              <motion.div 
              initial={{x: 0}}
              animate={{x: 0,
                        rotate:90,
                        y:500,
                        scale: 0}}
              transition={{ ease: "easeOut",
                            duration: 11,
                            repeat: Infinity  }}
              className='absolute'
              key={index}>
                {technology}
              </motion.div>
            ))}
            <img src={Lien} alt="" className='z-10'/>
          </div>
        </div>
      </>
      : 
      <>
        <div className='flex flex-col mt-20 w-6/12'> 
          <div className='flex flex-col items-center mt-4'>
            <h1 className='font-mono text-2xl font-bold'>Lien Sanchez</h1>
            <h2 className='font-mono text-2xl font-bold'>Full Stack Developer with:</h2>
          </div> 
          <div className='flex flex-col items-center'>
            {technologies.slice(0, index + 1).map((technology, index) => (
              <motion.div 
              initial={{x: 0}}
              animate={{x: 0,
                        rotate:90,
                        y:500,
                        scale: 0}}
              transition={{ ease: "easeOut",
                            duration: 11,
                            repeat: Infinity  }}
              className='absolute'
              key={index}>
                {technology}
              </motion.div>
            ))}
            <img src={Lien} alt="" className='z-10'/>
          </div>
        </div>
      </>}
    </>
  )
}


export default Presentation

