import React from 'react'

function AboutMe(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    {mobileCheck ? 
        <>
        <div className='flex flex-col items-center p-10 m-5 rounded-lg lightBlue'>
          <h2>About Me!</h2>
          <p>I'm 23 years old, and I'm a very curious person who is always seeking new things to learn. I enjoy reading about history and challenging myself every day to grow a little bit more. I'm a very diligent and consistent individual, which has helped me develop skills and achieve accomplishments in various areas. I consider myself an outgoing and sociable person, accustomed to working in teams and collaborating with others to achieve common goals.</p>  
        </div>
        </>
      : <h2>PC</h2> }
    </>

  )
}

export default AboutMe