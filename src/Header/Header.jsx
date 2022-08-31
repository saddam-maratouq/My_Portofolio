import React from "react";

import "../Header/Header.css";

import { Routes, Route, Link } from "react-router-dom";

import Home from "../page/Home/Home";
import Project from "../page/Project";
import Resume from "../page/Resume";

import logo from "../../images/Slog.png";

const Header = () => {
  return (
    <> 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container">
<a className="navbar-brand " to =""> <img className="logo" src= {logo}   alt="logo" />  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div  className="collapse navbar-collapse  " id="navbarSupportedContent">
    <ul className="navbar-nav  ms-auto px-5  mb-2  mb-lg-0"> 
    
    <li className="nav-item">
        <Link className="nav-link" to="/home"> Home  </Link>
      </li> 

      <li className="nav-item">
        <Link className="nav-link" to="/Project"> projects   </Link>
      </li> 

      <li className="nav-item">
        <Link className="nav-link" to="/Resume"> Resume   </Link>  
      </li> 

      <li className="nav-item">
      <i className=" user-icon fa-regular fa-user"></i>
      </li>  

     

     

    </ul> 
  
  </div> 
</div>

</nav> 

      {/* Routes  page  */} 

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} exact />
        <Route path="/Project" element={<Project />} exact /> 
        <Route path="/Resume" element={<Resume />} exact />
      </Routes>
</>
     
  );
};

export default Header;


