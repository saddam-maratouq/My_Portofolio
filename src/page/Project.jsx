import React from 'react'
import './project/Project.css' 
    

//Data
import { CardData } from '../../Data/CardData' 


//components
import ProjectCard from './project/ProjectCard'
import Creditcard from '../components/Credit card/Creditcard'


  

const Project = () => {
    return (
<section className='projects'> 
    <h1 className='title'> My RECENT WORK  </h1> 
    <div className="contentainer">

      {  CardData.map(project => (
            <div  key={project.id} >  
            <ProjectCard  project={project} /> 
            </div>
      )) } 
    
 
    </div> 

    <Creditcard/>  

</section>  

    )
}

export default Project
