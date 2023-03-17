import React from 'react'

function Footer(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
      <div
        className='h-10 bg-blue-500'>Footer</div>
    : <h2>PC</h2> }      
    </>

  )
}

export default Footer