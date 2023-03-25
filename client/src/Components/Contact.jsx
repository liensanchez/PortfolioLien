import React from 'react'
import linkedin from '../assets/img/logos/linkedin.png'
import gmail from '../assets/img/logos/gmail.png'
import github from '../assets/img/logos/github.png'


function Contact(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
      <>
      <div id='contact'></div>
      <div className='my-10 p-2 m-5 rounded-lg blue'>
        <div className='flex flex-col items-center p-2'>
          <h2>Contact Me</h2>
          <form action="" className='flex flex-col items-center'>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Name'/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='example@example.com'/>
            <label htmlFor="">Message</label>
            <input type="textarea" placeholder='Hi! Lien '/>
          </form>
          <div className='p-2'>
            <button className='yellow rounded-md p-1'>Send</button>
          </div>
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
            <img src={gmail} alt="" className='h-10 w-10'/>
            <p>liensilviosanchez@gmail.com</p>           
          </div>
        </div>

      </div>
      </>
    : 
      <>
      <div id='contact'></div>
      <div className='my-10 p-2 m-5 rounded-lg lightBlue'>
        <div className='flex flex-col items-center p-2'>
          <h2>Contact Me</h2>
          <p>Via mail at:</p>
          <p>liensilviosanchez@gmail.com</p>
          <p>At LinkedIn:</p>
          <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
          <p>At GitHub:</p>
          <a href="https://github.com/liensanchez">Lien!</a>
        </div>
      </div>
      </> }    
    </>

  )
}

export default Contact