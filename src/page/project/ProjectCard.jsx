import React from 'react'
import './projectCard.css'

//icons  
import {FaGithubAlt}  from 'react-icons/fa'  

import { SiNetlify } from "react-icons/si"; 


const ProjectCard = ({ project }) => {

    const {  title,Image,github, netlify  }  = project; 
  return (
    <> 
    <div className="projects-cards">
    <div className="projects-img">
    <img src={Image}  alt=" catStore " />
    </div> 

    <div className="project-info">
            <h2  className='projectTitle'>  {title}  </h2> 
            <a href={netlify} target='_blank' >  
             <SiNetlify size='2em' color='white' /> </a> 
            <a href={github} target='_blank' > 
             <FaGithubAlt size='2em'  color='white' />   </a> 

    </div>
</div>  




 </>
  )
}

export default ProjectCard