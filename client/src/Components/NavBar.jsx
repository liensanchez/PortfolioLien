import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {HiX} from 'react-icons/hi'
import logo from '../assets/pyramid.png'


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
     <div className='fixed flex flex-row justify-between z-50 w-screen p-2 golden'>

      <div className='flex flex-row items-center'>
        <img src={logo} alt="" />
      </div>

      {mobileCheck ? 
          <div className='flex flex-row items-center' >
            {menu ? '' : <HiMenu onClick={OpenMenu}/>}
            {menu && <div className='flex flex-col items-center p-10' >
                <a href='#aboutme' className='p-3' onClick={CloseMenu}>About Me</a>
                <a href='#projects' className='p-3' onClick={CloseMenu}>Projects</a>
                <a href='#skills' className='p-3' onClick={CloseMenu}>Skills</a>
                <a href='#contact' className='p-3' onClick={CloseMenu}>Contact</a> 
              </div>}              
            {menu ? <HiX onClick={CloseMenu}/> : ''}
          </div> 
    
        :

          <div className='flex flex-row'>
            <a href='#aboutme' className='p-3' onClick={CloseMenu}>About Me</a>
            <a href='#projects' className='p-3' onClick={CloseMenu}>Projects</a>
            <a href='#skills' className='p-3' onClick={CloseMenu}>Skills</a>
            <a href='#contact' className='p-3' onClick={CloseMenu}>Contact</a> 
          </div>
      }


    </div> 
  )
}

export default NavBar