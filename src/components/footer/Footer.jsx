import React from 'react'
import './Footer.css'

//icons 
import {FaGithub,FaLinkedin}  from 'react-icons/fa'  


function Footer() {

  return (
    <section className='footerContainer' >
      <div  className='footer-content' > 
        <h2>  Saddam  </h2>
        <h3> copyright &#169; 2022 </h3>
        <div className='foter-icon' >  
        <FaGithub size='2.5rem' color='#fff' />
        <FaLinkedin  size='2.5rem' color='#fff' />
        </div>
      </div>
    </section>
  )
}

export default Footer
