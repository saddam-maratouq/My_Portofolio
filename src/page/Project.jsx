import React from 'react'
import './project/Project.css' 

//Images     
// import ExpenseTracker from '../../images/Ex.jpg' 
import CatStore from '../../images/pro1C.jpg' 
import DiscoverCity from '../../images/pro2Ci.jpg' 





import { CardData } from '../../Data/CardData' 
import ProjectCard from './project/ProjectCard'


  

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

</section>  

    )
}

export default Project
