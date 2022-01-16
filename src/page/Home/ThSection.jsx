import React from 'react' 
import './Thsec.css' 
  
import   Redux  from '../../../images/Redux.png'  

import { FaNodeJs ,FaHtml5, FaCss3Alt  , FaReact } from "react-icons/fa";



const ThSection = () => {
    return (
      <section className='coding-skils'> 
        <h2 className='title' >  Coding Skills  </h2>  
         <div className="Skills-icon"> 
         <FaNodeJs  size='9em'/> 
          <FaHtml5 size='9em' /> 
          < FaCss3Alt size='9em' /> 
          <FaReact size='9em' /> 
          <img src={Redux} alt="redux icon " />

          </div>
      </section>
    ) 
}

export default ThSection
