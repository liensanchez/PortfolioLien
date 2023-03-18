import React from 'react'
import '../App.css';



function Presentation(isMobile) {

  let mobileCheck = isMobile.props


  return (
    <>
    {mobileCheck ? 
      <>
      <div className='flex flex-col z-0  w-screen' id='presentation'> 
          <div className='flex flex-col items-center my-40'>
            <h1>Lien Sanchez</h1>
            <h2>Full Stack Developer</h2>
          </div>
      <div className='h-screen w-screen' id='onTopPresentation'></div>
       </div>

      </>
      : <h2>PC</h2> }
    </>

  )
}


export default Presentation

