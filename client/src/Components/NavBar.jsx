import React, { useEffect, useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {HiX} from 'react-icons/hi'
import logo from '../assets/pyramid.png'
import { motion } from "framer-motion"


function NavBar(isMobile) {

  let mobileCheck = isMobile.props

  const [menu, setMenu] = useState(false)

  const OpenMenu = () => { 
    setMenu(true)
  }

  const CloseMenu = () => {
    setMenu(false)
  }
 

  return (
     <div className='flex flex-row justify-between m-4 '>

      <div >
        <img src={logo} alt="" />
      </div>

      {mobileCheck ? 
          <div className='flex flex-row p-1'>
            {menu ? '' : <HiMenu onClick={OpenMenu}/>}
            {menu ? <HiX onClick={CloseMenu}/> : ''}
            {menu && <div className='flex flex-col backdrop-blur-md h-screen'>
                <h3 className='p-3'>Projects</h3>
                <h3 className='p-3'>Skills</h3>
                <h3 className='p-3'>About Me</h3>
                <h3 className='p-3'>Contact</h3> 
              </div>}              

          </div> 
    
        :

          <div className='flex flex-row'>
            <h3 className='item'>Projects</h3>
            <h3 className='item'>Skills</h3>
            <h3 className='item'>About Me</h3>
            <h3 className='item'>Contact</h3>
          </div>
      }


    </div> 
  )
}

export default NavBar