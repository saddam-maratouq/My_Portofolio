import React from 'react'
import './Footer.css'

//icons 
import {FaGithub,FaLinkedin}  from 'react-icons/fa'  


function Footer() {

  return (
    <section className='footerContainer' >
    <div className="container">
      <div  className='footer-content  d-md-flex justify-content-around ' > 
        <h2>  Saddam  </h2>
        <h3> copyright &#169; 2022 </h3>
        <div className='foter-icon ' >  
        <FaGithub className='mx-5' size='2.5rem' color='#fff' />
        <FaLinkedin className='mx-5'  size='2.5rem' color='#fff' />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Footer
