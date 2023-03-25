import React, { useState } from 'react'
import dogsIndex from '../assets/img/dogsIndex.jpeg'
import dogstHome from '../assets/img/dogsHome.jpeg'
import dogsDetail from '../assets/img/dogsDetail.jpeg'
import henryIndex from '../assets/img/henryIndex.png'
import henryStore from '../assets/img/henryStore.png'
import henryPlan from '../assets/img/henryPlan.png'
import henryChat from '../assets/img/henryChat.png'
import github from '../assets/img/logos/github.png'
import voyHenryLogo from'../assets/img/logos/voyHENRY_logo.png'
import dogsLogo from'../assets/img/logos/dogs_logo.png'



function Projects(isMobile) {

  let mobileCheck = isMobile.props


  const dogImages = [ dogsIndex, dogstHome, dogsDetail]

  const [currentDogIndex, setCurrentDogIndex] = useState(0);

  const nextImgDog = () => {
    setCurrentDogIndex((currentDogIndex + 1) % dogImages.length);
  }

  const prevImgDog = () => {
    setCurrentDogIndex((currentDogIndex - 1 + dogImages.length) % dogImages.length);
  }


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
      <div className='flex flex-col items-center p-2 m-5 rounded-lg lightBlue'>
        <div className='flex flex-col items-center overflow-hidden'>
          <h3 className='font-mono text-2xl font-bold py-2'>Voy Henry!</h3>
          <div className='overflow-hidden'>
            <img src={voyImages[currentVoyIndex]} alt="index"/>
              <div className='flex justify-around'>
                <button
                  onClick={() => prevImgVoy()}
                  className='w-1/2 yellow'>Prev</button>
                <button
                  onClick={() => nextImgVoy() }
                  className='w-1/2 yellow'>Next</button>
              </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-mono text-lg font-bold py-4'>Back-End Developer (Back-End Lead)</h2>
            <ul className='p-2'>
              <li>Managed a team of 3 developers and led calls to ensure project success.</li>
              <li>Developed query and params filters, CRUD operations, and eCommerce functionalities to enhance the user experience.</li>
              <li>Built a real-time chat feature using the latest technologies to enable seamless communication between users.</li>
              <li>Designed and implemented models and databases with Sequelize to efficiently store and retrieve data.</li>
              <li>Collaborated with front-end developers to ensure the back-end and front-end functionalities were seamlessly integrated.</li>
              <li>Participated in code reviews and testing to ensure high-quality code was delivered to clients.</li>
            </ul>
            <div className='flex justify-center flex-wrap p-2'> 
              <div className='flex flex-col items-center p-5'>
                <a href="https://github.com/Gbw699/PF-VoyHenry">
                  <img src={github} alt="" className='h-10 w-15'/>
                </a>
                <a href="https://github.com/Gbw699/PF-VoyHenry">Repository</a>
              </div>
              <div className='flex flex-col items-center p-5'>
                <a href="https://pf-voy-henry.vercel.app/">
                  <img src={voyHenryLogo} alt="" className='h-10 w-15'/>
                </a>
                <a href="https://pf-voy-henry.vercel.app/">Website</a>
              </div>
            </div>
          </div>

          <h3 className='font-mono text-2xl font-bold py-2'>Project Dogs</h3>
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
          <div className='flex flex-col items-center'>
            <h2 className='font-mono text-lg font-bold py-4'>Full-Stack Solo Project </h2>
            <ul className='p-2'>
              <li>Developed query and params filters to enable efficient search and filtering of data.</li>
              <li>Designed and implemented models and databases using Sequelize to store and retrieve data.</li>
              <li>Built the front-end of the application using React, Redux, and CSS to create a user-friendly interface.</li>
              <li>Developed the back-end using Node.js to handle server-side logic and communication with the database.</li>
              <li>Participated in code reviews and testing to ensure high-quality code was delivered.</li>
              <li>Implemented responsive design to ensure the application was accessible across devices.</li>
              <li>Deployed the application to fly.io, vercel for public use.</li>
            </ul>
            <div className='flex justify-center flex-wrap p-2'> 
              <div className='flex flex-col items-center p-5'>
                <a href="https://github.com/liensanchez/Project-Dogs-deploy">
                  <img src={github} alt="" className='h-10 w-15'/>
                </a>
                <a href="https://github.com/liensanchez/Project-Dogs-deploy">Repository</a>
              </div>
              <div className='flex flex-col items-center p-5'>
                <a href="https://project-dogs-deploy.vercel.app/">
                  <img src={dogsLogo} alt="" className='h-10 w-15'/>
                </a>
                <a href="https://project-dogs-deploy.vercel.app/">Website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>

      : 
      <>
      <div id='projects' className=' my-5'></div>
      <div className='flex flex-wrap p-2 m-5 rounded-lg lightBlue'>
        <div className='flex flex-wrap justify-around overflow-hidden'>

          <div className='w-5/12 flex flex-col items-center'>
            <h3 className='font-mono text-2xl font-bold py-2'>Voy Henry!</h3>
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
            <div className='flex flex-col items-center'>
              <h2 className='font-mono text-lg font-bold py-4'>Back-End Developer (Back-End Lead)</h2>
              <ul className='p-2'>
                <li>Managed a team of 3 developers and led calls to ensure project success.</li>
                <li>Developed query and params filters, CRUD operations, and eCommerce functionalities to enhance the user experience.</li>
                <li>Built a real-time chat feature using the latest technologies to enable seamless communication between users.</li>
                <li>Designed and implemented models and databases with Sequelize to efficiently store and retrieve data.</li>
                <li>Collaborated with front-end developers to ensure the back-end and front-end functionalities were seamlessly integrated.</li>
                <li>Participated in code reviews and testing to ensure high-quality code was delivered to clients.</li>
              </ul>
              <div className='flex justify-center flex-wrap p-2'> 
                <div className='flex flex-col items-center p-5'>
                  <a href="https://github.com/Gbw699/PF-VoyHenry">
                    <img src={github} alt="" className='h-20 w-25'/>
                  </a>
                  <a href="https://github.com/Gbw699/PF-VoyHenry">Repository</a>
                </div>
                <div className='flex flex-col items-center p-5'>
                  <a href="https://pf-voy-henry.vercel.app/">
                    <img src={voyHenryLogo} alt="" className='h-20 w-25'/>
                  </a>
                  <a href="https://pf-voy-henry.vercel.app/">Website</a>
                </div>
              </div>
            </div>
          </div>

          <div className='w-5/12 flex flex-col items-center'>
            <h3 className='font-mono text-2xl font-bold py-2'>Project Dogs</h3>
            <div className='overflow-hidden'>
              <img src={dogImages[currentVoyIndex]} alt="index" className='py-2'/>
                <div className='flex justify-around'>
                  <button
                    onClick={() => prevImgVoy()}
                    className='w-1/2 yellow'>Prev</button>
                  <button
                    onClick={() => nextImgVoy() }
                    className='w-1/2 yellow'>Next</button>
                </div>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font-mono text-lg font-bold py-4'>Full-Stack Solo Project </h2>
              <ul className='py-5'>
                <li>Developed query and params filters to enable efficient search and filtering of data.</li>
                <li>Designed and implemented models and databases using Sequelize to store and retrieve data.</li>
                <li>Built the front-end of the application using React, Redux, and CSS to create a user-friendly interface.</li>
                <li>Developed the back-end using Node.js to handle server-side logic and communication with the database.</li>
                <li>Participated in code reviews and testing to ensure high-quality code was delivered.</li>
                <li>Implemented responsive design to ensure the application was accessible across devices.</li>
                <li>Deployed the application to fly.io, vercel for public use.</li>
              </ul>
              <div className='flex justify-center flex-wrap p-2'> 
                <div className='flex flex-col items-center p-5'>
                  <a href="https://github.com/liensanchez/Project-Dogs-deploy">
                    <img src={github} alt="" className='h-20 w-25'/>
                  </a>
                  <a href="https://github.com/liensanchez/Project-Dogs-deploy">Repository</a>
                </div>
                <div className='flex flex-col items-center p-5'>
                  <a href="https://project-dogs-deploy.vercel.app/">
                    <img src={dogsLogo} alt="" className='h-20 w-25'/>
                  </a>
                  <a href="https://project-dogs-deploy.vercel.app/">Website</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </>
      }
    </>

    
  )
}

export default Projects
