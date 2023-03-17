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
      <div className='flex'>
        <h3>Skills</h3>
        <img src={jsimg} alt="" />
        <p>Javascript</p>
        <img src={reactimg} alt="" />
        <p>React</p>
        <img src={reduximg} alt="" />
        <p>Redux</p>
        <img src={sequelizeimg} alt="" />
        <p>Sequelize</p>
        <img src={nodeimg} alt="" />
        <p>Express</p> 
        <img src={passportimg} alt="" />
        <p>Passport</p>
        <img src={nodemailerimg} alt="" />
        <p>Mailer</p>
        <img src={mercadopagoimg} alt="" />
        <p>MercadoPago</p>
        <img src={socketimg} alt="" />
        <p>Socket.io</p>
      </div>
      </>

      :
      <h2>Pc</h2>
    }
    </>


  )
}

export default Skills