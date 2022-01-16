import React from 'react' 

import '../Header/Header.css'   

import { Routes, Route ,  Link , } from "react-router-dom";

import Home from '../page/Home/Home'
import Project from '../page/Project'
import Resume from '../page/Resume' 

const Header = () => {
    return ( 
        <div>

        <nav>
        <h2> Saddam <span> maratouq </span>  </h2>  
        <ul> 
            <li> <Link to ="/Home"> Home </Link> </li>
            <li> <Link to ="/Project"> Project  </Link> </li>
            <li> <Link to ="/Resume">  Resume </Link> </li>
        </ul>
        </nav> 
        <Routes> 
             <Route exact path="/" element ={ <Home/>} />  
            <Route path="/Home" element={<Home/>} exact />
            <Route path="/Project" element={ <Project/> }  exact/>
            <Route path="/Resume" element={<Resume/>} exact />    

            </Routes> 
        </div>

    )
}

export default Header
