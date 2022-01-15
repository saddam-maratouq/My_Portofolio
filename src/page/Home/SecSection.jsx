import React from 'react'
import './SecSection.css' 

import AboutImg  from '../../../images/Programming.png' 


const SecSection = () => {
    return (
       <section className='About' >
           
        <div className='codeing-Img'>  <img src={AboutImg} alt="programing man " />  </div> 

        <div className='About-info' >
        <h2> About  <span> me  </span>   </h2> 
        <h1> Frontend developer   </h1>
        <p>  
        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ 
        
        </p>
        </div>
       </section>
    )
}

export default SecSection
