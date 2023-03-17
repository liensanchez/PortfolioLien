import React from 'react'

function AboutMe(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
        <div>AboutMe</div>
      : <h2>PC</h2> }
    </>

  )
}

export default AboutMe