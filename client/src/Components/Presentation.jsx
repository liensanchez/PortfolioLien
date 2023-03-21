import React from 'react'
import Lien from '../assets/img/LienOpenHead.png'
import {motion} from 'framer-motion'

function Presentation(isMobile) {

  let mobileCheck = isMobile.props

/*   let start = window.innerWidth/2*/

  let half = window.innerWidth/2 

  return (
    <>
    {mobileCheck ? 
      <>     
      <div className='flex flex-col bg-blue-400 mt-10'> 
        <div className='flex flex-col items-center mt-4'>
          <h1>Lien Sanchez</h1>
          <h2>Full Stack Developer</h2>
        </div> 

        <div className='flex flex-col items-center'>
        <motion.h2 
          initial={{x:-100}}
          animate={{x: 100,
                    rotate:90,
                    y:500,
                    scale: 0}}
          transition={{ ease: "easeOut", duration: 5 }}
          className='z-0 -mt-10'
            >test</motion.h2>
          <img src={Lien} alt="" className='z-10 '/>
        </div>
      </div>
      </>
      : <h2>PC</h2> }


    </>

  )
}


export default Presentation

