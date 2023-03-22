import React, { useState } from 'react'
import {motion} from 'framer-motion'
import dogsIndex from '../assets/img/dogsIndex.jpeg'
import dogstHome from '../assets/img/dogsHome.jpeg'
import dogsDetail from '../assets/img/dogsDetail.jpeg'
import henryIndex from '../assets/img/henryIndex.png'
import henryStore from '../assets/img/henryStore.png'
import henryPlan from '../assets/img/henryPlan.png'
import henryChat from '../assets/img/henryChat.png'


function Projects(isMobile) {

  let mobileCheck = isMobile.props

  const [dogImg, setDogImg] = useState(dogsIndex)

  const [voyImg, setVoyImg] = useState(henryIndex)

  return (
    <>
      {mobileCheck ? 
      <>
      <div id='projects'></div>
      <div className='flex flex-col items-center p-2 m-5 rounded-lg'>

        <div className='flex flex-col items-center'>
          <h3>Project Dogs</h3>
          <div className=''>
            <div className='flex justify-around'>
              <button
                className='bg-blue-400 rounded'
                onClick={() => setDogImg(dogsIndex)}
              >Index</button>
              <button
                className='bg-blue-400 rounded'
                onClick={() => setDogImg(dogstHome)}
              >Home</button>
              <button
                className='bg-blue-400 rounded'
                onClick={() => setDogImg(dogsDetail)}
              >Detail</button>
            </div>

            <img src={dogImg} alt="index" />
          </div>
          <a href="https://github.com/liensanchez/Project-Dogs-deploy">Repository</a>
          <a href="https://project-dogs-deploy.vercel.app/">Deploy</a>
          <p>Javascript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Sequelize</p>
          <p>Express</p> 

          <h3>VoyHenry!</h3>
          <div className=''>
              <div className='flex justify-around'>
                <button
                  className='border-black border-solid border-2 rounded p-1'
                  onClick={() => setVoyImg(henryIndex)}
                >Index</button>
                <button
                  className='border-black border-solid border-2 rounded p-1'
                  onClick={() => setVoyImg(henryStore)}
                >Store</button>
                <button
                  className='border-black border-solid border-2 rounded p-1'
                  onClick={() => setVoyImg(henryPlan)}
                >Plans</button>
                <button
                  className='border-black border-solid border-2 rounded p-1'
                  onClick={() => setVoyImg(henryChat)}
                >Chat</button>
              </div>
            <img src={voyImg} alt="index" className='py-1'/>
          </div> 
        </div>
{/*   <div className='flex flex-col items-center'>
          <h3>Voy Henry</h3>
          <div className='bg-white'>
            <div className='flex justify-between'>
              <button
                onClick={() => setDogImg(henryIndex)}
              >Index</button>
              <button
                onClick={() => setDogImg(henryStore)}
              >Store</button>
              <button
                onClick={() => setDogImg(henryPlan)}
              >Plans</button>
              <button
                onClick={() => setDogImg(henryChat)}
              >Chat</button>
              <img src={voyImg} alt="index" />
            </div>
          </div> 
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
        </div> */}
      </div>
      </>

      : 
      
      <h1>PC</h1>
      }
    </>

    
  )
}

export default Projects
