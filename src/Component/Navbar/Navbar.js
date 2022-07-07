import React from 'react';
import "../Css/Navbar.css";
import {Link} from "react-router-dom"
import alchemylogo from "../../Assets/Image/Alchemy Solutions - Logo.png";

function Navbar() {
  return (
    <div><nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" style={{color:"#707070", backgroundColor:"#E7EEF0"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to="/">
      <img src={alchemylogo} alt="Alchemy Solutions" height="50" class="d-inline-block align-text-top"/>
 
    </Link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="/training">Training</Link>
          </li>
     
          <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="/certification">Certifications</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Calendar">Calendar</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"  to="/about">About</Link>
          </li>

         
        
        </ul>
        
    
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Contact Us</button>

      </div>
    </div>
  </nav></div>
  )
}

export default Navbar