import React from 'react'

function Contact(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
      <>
      <div id='contact'></div>
      <div className='my-10 p-2 m-5 rounded-lg lightBlue'>
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
        </div>
        <p>Via mail at:</p>
          <p>liensilviosanchez@gmail.com</p>
          <p>At LinkedIn:</p>
          <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
          <p>At GitHub:</p>
          <a href="https://github.com/liensanchez">Lien!</a>
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