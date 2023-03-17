import React from 'react'

function Contact(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
        <div>Contact</div>
    : <h2>PC</h2> }    
    </>

  )
}

export default Contact