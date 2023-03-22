import React from 'react'
import dogsIndex from '../assets/img/dogsIndex.jpeg'
import dogstHome from '../assets/img/dogsHome.jpeg'
import dogsDetail from '../assets/img/dogsDetail.jpeg'
import henryIndex from '../assets/img/henryIndex.png'
import henryStore from '../assets/img/henryStore.png'
import henryPlan from '../assets/img/henryPlan.png'
import henryChat from '../assets/img/henryChat.png'


function Projects(isMobile) {

  let mobileCheck = isMobile.props

  return (
    <>
      {mobileCheck ? 
      <>
      <div id='projects'></div>
      <div className='flex flex-col items-center p-2 m-5 bg-slate-500 rounded-lg'>

        <div className='flex flex-col items-center'>
          <h3>Project Dogs</h3>
          <img src={dogsIndex} alt="index" />
          <img src={dogstHome} alt="home" />
          <img src={dogsDetail} alt="detail" />
          <a href="https://github.com/liensanchez/Project-Dogs-deploy">Repository</a>
          <a href="https://project-dogs-deploy.vercel.app/">Deploy</a>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Sequelize</p>
          <p>Express</p> 
        </div>

        <div className='flex flex-col items-center'>
          <h3>Voy Henry</h3>
          <img src={henryIndex} alt="index" />
          <img src={henryStore} alt="home" />
          <img src={henryPlan} alt="detail" />
          <img src={henryChat} alt="detail" />
          <a href="https://github.com/Gbw699/PF-VoyHenry">Repository</a>
          <a href="https://pf-voy-henry.vercel.app/">Deploy</a>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Sequelize</p>
          <p>Express</p> 
          <p>Passport</p>
          <p>Mailer</p>
          <p>MercadoPago</p>
          <p>Socket.io</p>
        </div>
      </div>
      </>

      : 
      
      <h1>PC</h1>
      }
    </>

    
  )
}

export default Projects