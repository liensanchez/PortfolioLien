import React from 'react'
import '../App.css';
/* import { motion } from "framer-motion" */
import mountainImg from '../assets/img/mountain.png'
import landscapeImg from '../assets/img/no-mountain.png'



function Presentation(isMobile) {

  let mobileCheck = isMobile.props


  return (
    <>
    {mobileCheck ? 
       <div className='flex flex-col my-20'> 
          <div className='flex flex-col items-center'>
            <h1>Lien Sanchez</h1>
            <h2>Full Stack Developer</h2>
          </div>
       </div>
      : <h2>PC</h2> }
    </>

  )
}


export default Presentation

