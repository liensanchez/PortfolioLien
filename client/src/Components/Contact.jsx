import React from 'react'

function Contact(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
      <>
      <div id='contact'></div>
      <div>
        <h2>Contact Me</h2>
        <p>Via mail:</p>
        <p>liensilviosanchez@gmail.com</p>
        <p>Via LinkedIn:</p>
        <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
      </div>
      </>
    : <h2>PC</h2> }    
    </>

  )
}

export default Contact