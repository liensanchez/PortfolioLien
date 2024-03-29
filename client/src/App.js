import NavBar from './Components/NavBar';
import Presentation from './Components/Presentation';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Footer from './Components/Footer'; 
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mobileQuery.matches);

    const handleMobileCheck = (event) => {
      setIsMobile(event.matches);
    };

    mobileQuery.addListener(handleMobileCheck);

    return () => {
      mobileQuery.removeListener(handleMobileCheck);
    };
  }, [])

  return (

    <>
    {isMobile ?
      <div className='flex flex-col'> 
        <NavBar props={isMobile} />
        <Presentation props={isMobile}/>
        <AboutMe props={isMobile}/>
        <Projects props={isMobile}/>
        <Skills props={isMobile}/>
        <Contact props={isMobile}/>
        <Footer props={isMobile}/>  
      </div>   
         :
      <div className='flex flex-wrap'> 
        <NavBar props={isMobile} />
        <Presentation props={isMobile}/>
        <AboutMe props={isMobile}/>
        <Projects props={isMobile}/>
          <div className='flex justify-center ml-7'>
            <Skills props={isMobile}/>
            <Contact props={isMobile}/>
          </div>
        <Footer props={isMobile}/>  
       </div>   
         }

    </>
 
  );
}

export default App;
