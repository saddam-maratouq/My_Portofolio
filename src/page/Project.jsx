import React from 'react'
import './project/Project.css' 

//Images     
import ExpenseTracker from '../../images/Ex.jpg' 
import CatStore from '../../images/pro1C.jpg' 
import DiscoverCity from '../../images/pro2Ci.jpg' 


//icons  
import {FaGithubAlt}  from 'react-icons/fa'  

import { SiNetlify } from "react-icons/si";



  

const Project = () => {
    return (
<section className='projects'> 
    <h1 className='title'> projects </h1> 
    <div className="contentainer">

    <div className="projects-cards">
        <div className="projects-img">
        <img src={CatStore}  alt=" catStore " />
        </div> 

        <div className="project-info">
                <h2>  Cat store  </h2> 
                <a href=" https://cat-store-96.netlify.app/Producet " target='_blank' >  <SiNetlify size='2em' color='white' /> </a> 
                <a href=" https://github.com/saddam-maratouq/Cat_Store " target='_blank' >  <FaGithubAlt size='2em'  color='white' />   </a> 

        </div>
    </div>  

    <div className="projects-cards">
        <div className="projects-img">
        <img src={ExpenseTracker}  alt=" money count  " />
        </div> 

        <div className="project-info">
                <h2>  Expense Tracker </h2> 
                <a href=" https://expense-traker-96.netlify.app/ " target='_blank' >  <SiNetlify size='2em' color='white' /> </a> 
                <a href=" https://github.com/saddam-maratouq/Expense_Tracker " target='_blank' >  <FaGithubAlt size='2em' color='white' />   </a> 

        </div>
    </div> 

    <div className="projects-cards">
        <div className="projects-img">
        <img src={DiscoverCity}  alt="city map " />
        </div> 

        <div className="project-info">
                <h2> Discover City </h2> 
                <a href="https://discover-city-sq.netlify.app/
                   " target='_blank' >  <SiNetlify size='2em' color='white' /> </a> 
                <a href="https://github.com/saddam-maratouq/Discover-city" target='_blank' >  <FaGithubAlt size='2em'  color='white' />   </a> 

        </div>
    </div> 

    
 
    </div> 

</section>  

    )
}

export default Project
