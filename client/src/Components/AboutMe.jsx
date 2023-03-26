import React from 'react'
import github from '../assets/img/logos/github.png'
import linkedin from '../assets/img/logos/linkedin.png'

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
          <div className='pt-4 flex flex-col items-center text-xl'>
            <p className='tracking-wide'>I'm 23 years old, and I'm a very curious person who is always seeking new things to learn. I enjoy reading about history and challenging myself every day to grow a little bit more.</p> 
            <p className='tracking-wide'> I'm a very diligent and consistent individual, which has helped me develop skills and achieve accomplishments in various areas. I consider myself an outgoing and sociable person, accustomed to working in teams and collaborating with others to achieve common goals.</p>  
          </div>

          <div className='flex flex-wrap p-5 '>
            <div className='p-2'>
              <p className='font-mono text-2xl font-bold p-2'>How old I am?</p>
              <p className='text-xl'>I'm 23 years old.</p>
            </div>
            <div className='p-2'>
              <p className='font-mono text-2xl font-bold p-2'>Where I'm from?</p>
              <p className='text-xl'>I'm from Mendoza, Argentina.</p>
            </div>
            <div className='p-2'>
              <p className='font-mono text-2xl font-bold p-2'>What languages do you speak?</p>
              <p className='text-xl'>I'm native spanish speaker and proeficcient c2 in English.</p>
            </div>
          </div>

          <div className='flex justify-center flex-wrap p-2'>
            <div className='flex flex-col items-center p-5'>
              <a href="https://www.linkedin.com/in/liensanchez/">
                <img src={linkedin} alt="" className='h-20 w-20'/>
              </a>
              <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
            </div>
            <div className='flex flex-col items-center p-5'>
              <a href="https://github.com/liensanchez">
                <img src={github} alt="" className='h-20 w-25'/>
              </a>
              <a href="https://github.com/liensanchez">Lien!</a>
            </div>
          </div>
        </div>
        </> }
    </>

  )
}

export default AboutMe