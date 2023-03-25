import React from 'react'

function AboutMe(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
        <>
        <div id='aboutme'></div>
        <div className='flex flex-col items-center p-10 m-5 rounded-lg lightBlue'>
          <p className='font-mono text-2xl font-bold'>About Me!</p>
          <div className='pt-4'>
            <p>I'm 23 years old, and I'm a very curious person who is always seeking new things to learn. I enjoy reading about history and challenging myself every day to grow a little bit more.</p> 
            <p> I'm a very diligent and consistent individual, which has helped me develop skills and achieve accomplishments in various areas. I consider myself an outgoing and sociable person, accustomed to working in teams and collaborating with others to achieve common goals.</p>  
          </div>
         </div>
        </>
      : 
        <>
        <div id='aboutme'></div>
        <div className='flex flex-col items-center p-10 mt-20 rounded-lg lightBlue w-5/12'>
          <p className='font-mono text-2xl font-bold'>About Me!</p>
          <div className='pt-4 flex flex-col items-center'>
            <p>I'm 23 years old, and I'm a very curious person who is always seeking new things to learn. I enjoy reading about history and challenging myself every day to grow a little bit more.</p> 
            <p> I'm a very diligent and consistent individual, which has helped me develop skills and achieve accomplishments in various areas. I consider myself an outgoing and sociable person, accustomed to working in teams and collaborating with others to achieve common goals.</p>  
          </div>
        </div>
        </> }
    </>

  )
}

export default AboutMe