import React from 'react' 
import './Thsec.css' 
import GitHubCalendar from 'react-github-calendar';

import { FaNodeJs ,FaHtml5, FaCss3Alt  , FaReact , 
} from "react-icons/fa";

import { SiRedux } from "react-icons/si";

const ThSection = () => {


 
  GitHubCalendar(".calendar", "saddam-maratouq", { responsive: true })
    return (
      <section className='coding-skils'> 
        <h2 className='title' >  Coding Skills  </h2>  
         <div className="Skills-icon"> 
         <FaNodeJs  size='9em'/> 
          <FaHtml5 size='9em' /> 
          < FaCss3Alt size='9em' /> 
          <FaReact size='9em' /> 
          <SiRedux size='9em' />
          </div> 

          <div className='gitTitle' >  
          <h1>  Days I coding </h1>
          </div>
          
          <div className='calender' > 
          <GitHubCalendar
            username="saddam-maratouq"
            width={100}
            height={100}
            showHeader={false}
            fontSize={20}
            blockMargin={5}
            blockSize={20}
           
      />
          </div>

      </section>
    ) 
}

export default ThSection
