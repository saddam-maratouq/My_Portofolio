import React from 'react' 
import '../Home/home.css'  
import {FaGithub}  from 'react-icons/fa'  
import {FaLinkedin}  from 'react-icons/fa'  
import heroImg from '../../../images/main.png'

// ruter 






const FirstSection = () => {
    return (
        <section className='home' id='Main-page'>  
     

        <div className="container"> 
         <div className="content">
             <h3>  Hello there,  🤝 I'm  </h3> <br /> <br />
             <h1> Saddam <span> maratouq</span> </h1> <br /> <br /> 
             <h2> I'm <span> Frontend  </span> develober   </h2>  
             <a href="" className="btn"> Download CV </a> 
             <br /> <br /> 
            <div className='icon' >      
       
             <a href=" https://github.com/saddam-maratouq?tab=repositories" target='_blank' >   <FaGithub size='3em'/>  </a>  
             <a href="https://www.linkedin.com/in/saddam-maratouq-51838a206/"  target='_blank'>      <FaLinkedin size='3em'/>  </a>  

            </div>  

         <div className="hero">  
             <img src={heroImg}  alt="hero image" />
           </div>
            
         </div> 
        </div>  

       
    </section>
    )
}

export default FirstSection
