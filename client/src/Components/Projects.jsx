import React, { useState } from 'react'
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

  const dogImages = [ dogsIndex, dogstHome, dogsDetail]

  const [currentDogIndex, setCurrentDogIndex] = useState(0);

  const nextImgDog = () => {
    setCurrentDogIndex((currentDogIndex + 1) % dogImages.length);
  }

  const prevImgDog = () => {
    setCurrentDogIndex((currentDogIndex - 1 + dogImages.length) % dogImages.length);
  }


  const [voyImg, setVoyImg] = useState(henryIndex)

  const voyImages = [henryIndex, henryStore, henryPlan, henryChat]

  const [currentVoyIndex, setCurrentVoyIndex] = useState(0);

  const nextImgVoy = () => {
    setCurrentVoyIndex((currentVoyIndex + 1) % voyImages.length);
  }

  const prevImgVoy = () => {
    setCurrentVoyIndex((currentVoyIndex - 1 + voyImages.length) % voyImages.length);
  }

  return (
    <>
      {mobileCheck ? 
      <>
      <div id='projects' className=' my-5'></div>
      <div className='flex flex-col items-center p-2 m-5 rounded-lg blue'>
        <div className='flex flex-col items-center overflow-hidden'>
          <h3>Project Dogs</h3>
          <div className='overflow-hidden'>
            <img src={dogImages[currentDogIndex]} alt="index" className='py-1'/>
              <div className='flex justify-around'>
                <button
                  onClick={() => prevImgDog()}
                  className='w-1/2 yellow'>Prev</button>
                <button
                  onClick={() => nextImgDog() }
                  className='w-1/2 yellow'>Next</button>
              </div>
          </div>

          <h3>Voy Henry!</h3>
          <div className='overflow-hidden'>
            <img src={voyImages[currentVoyIndex]} alt="index" className='py-1'/>
              <div className='flex justify-around'>
                <button
                  onClick={() => prevImgVoy()}
                  className='w-1/2 yellow'>Prev</button>
                <button
                  onClick={() => nextImgVoy() }
                  className='w-1/2 yellow'>Next</button>
              </div>
          </div>
        </div>
      </div>

      </>

      : 
      <>
      <h1>PC</h1>
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
      </>
      }
    </>

    
  )
}

export default Projects
