import React from 'react'
import jsimg from '../assets/img/logos/js.png'
import reactimg from '../assets/img/logos/react.png'
import reduximg from '../assets/img/logos/redux.png'
import sequelizeimg from '../assets/img/logos/sequelize.png'
import nodeimg from '../assets/img/logos/node.png'
import passportimg from '../assets/img/logos/passport.png'
import nodemailerimg from '../assets/img/logos/nodemailer.png'
import mercadopagoimg from '../assets/img/logos/mercadopago.png'
import socketimg from '../assets/img/logos/socket.png'



function Skills(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
    
    {mobileCheck ? 
      <>
      <div id='skills'></div>
      <div className='flex flex-col items-center lightBlue p-2 m-5 rounded-lg'>
        <h3>Skills</h3>
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-col items-center p-3'>
            <img src={jsimg} alt="" className='h-10 w-10'/>
            <p>Javascript</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={reactimg} alt="" className='h-10 w-10'/>
            <p>React</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={reduximg} alt="" className='h-10 w-10'/>
            <p>Redux</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={sequelizeimg} alt="" className='h-10 w-10'/>
            <p>Sequelize</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={nodeimg} alt="" className='h-10 w-10'/>
            <p>Express</p> 
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={passportimg} alt="" className='h-10 w-10'/>
            <p>Passport</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={nodemailerimg} alt="" className='h-10 w-10'/>
            <p>Mailer</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={socketimg} alt="" className='h-10 w-10'/>
            <p>Socket.io</p>
          </div>
          <div className='flex flex-col items-center p-3'>
            <img src={mercadopagoimg} alt="" className='h-10 w-10'/>
            <p>MercadoPago</p>
          </div>
        </div>  
      </div>
      </>

      :
      <h2>Pc</h2>
    }
    </>


  )
}

export default Skills