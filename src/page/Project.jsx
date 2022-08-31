import React from 'react'
import './project/Project.css' 
    

//Data
import { CardData } from '../../Data/CardData' 


//components
import ProjectCard from './project/ProjectCard'


  

const Project = () => {
    return (
<section className='projects p-5'> 
   <div className='container-fluid'>
     
     <h1 className='title'> My RECENT WORK  </h1> 
     <div className="project-row">
    
       {  CardData.map(project => (
             <div  key={project.id} >  
             <ProjectCard  project={project} /> 
             </div>
       )) } 
     
    
     </div> 
   </div>


</section>  

    )
}

export default Project
