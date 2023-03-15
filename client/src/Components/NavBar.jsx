import React, { useEffect, useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {HiX} from 'react-icons/hi'
import logo from '../assets/pyramid.png'

function NavBar() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mobileQuery.matches);

    const handleMobileCheck = (event) => {
      setIsMobile(event.matches);
    };

    mobileQuery.addListener(handleMobileCheck);

    return () => {
      mobileQuery.removeListener(handleMobileCheck);
    };
  }, [])


  const [menu, setMenu] = useState(false)

  const OpenMenu = () => { 
    setMenu(true)
  }

  const CloseMenu = () => {
    setMenu(false)
  }

  

  return (
    <div className='flex flex-row justify-between m-4'>

      <div >
        <img src={logo} alt="" />
      </div>

      {isMobile ? 
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