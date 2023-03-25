import React from 'react'
import linkedin from '../assets/img/logos/linkedin.png'
import gmail from '../assets/img/logos/gmail.png'
import github from '../assets/img/logos/github.png'
import { useForm, ValidationError } from '@formspree/react';

function Contact(isMobile) {

  let mobileCheck = isMobile.props

  const [state, handleSubmit] = useForm("xyyadolg");
  if (state.succeeded) {
      return (      
      <div className='my-10 p-2 m-5 rounded-lg lightBlue'>
      <div className='flex flex-col items-center p-2'>
        <h2 className='font-mono text-2xl font-bold'>Contact Me</h2>
        <p>Thanks for contacting me! I'll be in touch soon. In the meantime, please feel free to check out my portfolio to see some of my previous work.</p>
      </div>

      <div className='flex justify-center flex-wrap p-2'>
        <div className='flex flex-col items-center p-5'>
          <a href="https://www.linkedin.com/in/liensanchez/">
            <img src={linkedin} alt="" className='h-10 w-10'/>
          </a>
          <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
        </div>
        <div className='flex flex-col items-center p-5'>
          <a href="https://github.com/liensanchez">
            <img src={github} alt="" className='h-10 w-15'/>
          </a>
          <a href="https://github.com/liensanchez">Lien!</a>
        </div>
        <div className='flex flex-col items-center p-5'>
          <img src={gmail} alt="" className='h-10 w-10'/>
          <p>liensilviosanchez@gmail.com</p>           
        </div>
      </div>

    </div>)}

  return (
    <>
    {mobileCheck ? 
      <>
      <div id='contact'></div>
      <div className='my-10 p-2 m-5 rounded-lg lightBlue'>
        <div className='flex flex-col items-center p-2'>
          <h2 className='font-mono text-2xl font-bold'>Contact Me</h2>

          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <label htmlFor="email">
              Email Address:
            </label>
            <input
              id="email"
              type="email" 
              name="email"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">
              Your message:
            </label>
            <textarea
              id="message"
              name="message"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <div className='p-2'>
              <button type="submit" disabled={state.submitting} className='yellow rounded-md p-1'>
                Submit
              </button>
            </div>  
          </form>
        </div>

        <div className='flex justify-center flex-wrap p-2'>
          <div className='flex flex-col items-center p-5'>
            <a href="https://www.linkedin.com/in/liensanchez/">
              <img src={linkedin} alt="" className='h-10 w-10'/>
            </a>
            <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
          </div>
          <div className='flex flex-col items-center p-5'>
            <a href="https://github.com/liensanchez">
              <img src={github} alt="" className='h-10 w-15'/>
            </a>
            <a href="https://github.com/liensanchez">Lien!</a>
          </div>
          <div className='flex flex-col items-center p-5'>
            <img src={gmail} alt="" className='h-10 w-10'/>
            <p>liensilviosanchez@gmail.com</p>           
          </div>
        </div>

      </div>
      </>
    : 
      <>
      <div id='contact'></div>
      <div className='my-10 p-2 m-5 rounded-lg lightBlue'>
        <div className='flex flex-col items-center p-2'>
          <h2>Contact Me</h2>
          <p>Via mail at:</p>
          <p>liensilviosanchez@gmail.com</p>
          <p>At LinkedIn:</p>
          <a href="https://www.linkedin.com/in/liensanchez/">Lien Sanchez</a>
          <p>At GitHub:</p>
          <a href="https://github.com/liensanchez">Lien!</a>
        </div>
      </div>
      </> }    
    </>

  )
}

export default Contact