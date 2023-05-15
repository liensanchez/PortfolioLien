import React from 'react'
import github from '../assets/img/logos/github.png'
import linkedin from '../assets/img/logos/linkedin.png'
import cv from '../assets/img/logos/cv.png'

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
            <p>I am a skilled full stack developer who is proactive, creative, and always eager to learn. I am currently looking for new job opportunities, particularly remote work that allows me to collaborate with people from around the world. I am proficient in English at the C2 level, which enables me to communicate effectively with clients and colleagues from different backgrounds. If you are looking for a talented and passionate developer, I am the right candidate for you.</p>
          </div>

          <div className='flex justify-center flex-wrap p-2'>
            <div className='flex flex-col items-center p-5'>
              <a href="https://www.linkedin.com/in/liensanchez/">
                <img src={linkedin} alt="" className='h-10 w-10'/>
              </a>
              <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
            </div>
            <div className='flex flex-col items-center p-5'>
              <a href="https://github.com/liensanchez">
                <img src={github} alt="" className='h-10 w-15'/>
              </a>
              <a href="https://github.com/liensanchez">Lien!</a>
            </div>
            <div className='flex flex-col items-center p-5'>
              <a href="https://drive.google.com/file/d/1RChwrF9SuBckKSyNpSNTvmlP13XqpFLF/view?usp=sharing">
                <img src={cv} alt="" className='h-10 w-15'/>
              </a>
              <a href="https://drive.google.com/file/d/1z5b-540WkJnolm0cz6Km9wLUaVEsHiZ4/view">CV</a>
            </div>
          </div>

         </div>
        </>
      : 
        <>
        <div id='aboutme'></div>
        <div className='flex flex-col items-center p-10 mt-20 rounded-lg lightBlue w-5/12'>
          <p className='font-mono text-2xl font-bold'>About Me!</p>
          <div className='pt-4 flex flex-col items-center text-xl'>
            <p>I am a skilled full stack developer who is proactive, creative, and always eager to learn. I am currently looking for new job opportunities, particularly remote work that allows me to collaborate with people from around the world. I am proficient in English at the C2 level, which enables me to communicate effectively with clients and colleagues from different backgrounds. If you are looking for a talented and passionate developer, I am the right candidate for you.</p>
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
            <div className='flex flex-col items-center p-5'>
              <a href="https://drive.google.com/file/d/1RChwrF9SuBckKSyNpSNTvmlP13XqpFLF/view?usp=sharing">
                <img src={cv} alt="" className='h-20 w-25'/>
              </a>
              <a href="https://drive.google.com/file/d/1z5b-540WkJnolm0cz6Km9wLUaVEsHiZ4/view">CV</a>
            </div>
          </div>
        </div>
        </> }
    </>

  )
}

export default AboutMe
