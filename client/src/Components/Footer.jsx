import React from 'react'

function Footer(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
      <div
        className='h-10 golden flex justify-between p-2'>
          <h2>Lien Sanchez</h2>
          <h2>2023 </h2>
        </div>
    : <h2>PC</h2> }      
    </>

  )
}

export default Footer