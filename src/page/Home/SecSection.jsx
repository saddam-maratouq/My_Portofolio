import React from 'react'
import './SecSection.css' 

import AboutImg  from '../../../images/Programming-amico.png' 


const SecSection = () => {
    return (
       <section className='About px-3 py-5' >
           
      <div className='container' > 

        <div className='d-md-flex justify-content-between' >
              <div className='codeing-Img'> 
              <img className=' img-fluid d-none d-md-block' src={AboutImg} alt="programing man " /> 
               </div> 
            
              <div className='About-info text-center text-md-start ' >
              <h2> LET ME  <span> INTRODUCE </span> MY SELF  </h2> 
              <h1> Frontend developer   </h1>
              <p>  
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️ 
              </p>
              <p> 
              I am amazing in classics like <span> Javascript .</span> 
              </p>
              <p className='realeted' > 
              My field of Interest's are building new <span>  Web Technologies and Products</span> and also <br/>  
              in areas related to <span>  mobile development</span> . 
              </p> 
            
              <p> 
              Whenever possible, I also apply my passion for developing products with <span>Node.js</span> <br/>
               and  <span>Modern Javascript Library and Frameworks </span> like <span> React.js  </span>
              </p>
              </div>
        </div>
      </div  >
       </section>
    )
}

export default SecSection
