import React from 'react' 
import '../Home/home.css'  
import {FaGithub,FaLinkedin}  from 'react-icons/fa'  
import heroImg from '../../../images/main.png'
// import Typical from 'react-typical'
import { ReactTypical } from '@deadcoder0904/react-typical'

// ruter 






const FirstSection = () => {
    return (
        <section className='home' id='Main-page'>  
     

        <div className="container"> 
         <div className="content">
             <h3>  Hello there,  🤝  </h3> <br /> <br />
             <h1> I'm SADDAM </h1> <br /> <br /> 

             <h2> I'm a  {''}
             
              <ReactTypical 
              loop={Infinity}
              wrapper="span"
              steps={[
                  'Frontend developer 💻 ', 1500,
                  'Mobile developer 📱 ', 1500,
              ]}      

             /> 
              </h2>   
            <div className='butoonContent' >  
             <a href="https://drive.google.com/file/d/1P2mtqSL4-LF5fO2p14KlzGAfqe3kzkWX/view" download target='_blank'  className="btn"> Download CV </a> 
             <a href="#"  target='_blank'  className="btn"> Hire me  </a> 
             </div>
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
