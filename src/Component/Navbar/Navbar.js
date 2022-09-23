
import React from 'react';
import "../Css/Navbar.css";
import { Link } from "react-router-dom"
import alchemylogo from "../../Assets/Image/Alchemy Logo New-01 (1).png";
import pdf from "../../Assets/Image/abc.pdf";
import { Helmet } from "react-helmet";
import navLinks from "../Css/Navbar.css";
function Navbar() {
  return (
    <div>
      {/* <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler" style={{color:"#707070", backgroundColor:"#E7EEF0"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link class="navbar-brand" to="/">
      <img src={alchemylogo} alt="Alchemy Solutions" height="40" class="d-inline-block align-text-top"/>
 
    </Link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
     
          <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="/certification">Certifications</Link>
          </li>
 
          <li class="nav-item">
            <Link class="nav-link"  to="/about">About</Link>
          </li>

         
        
        </ul>
        
    <Link to ="">
      <button class="btn  my-2 my-sm-0" style={{boxShadow:"none"}}>Contact Us</button>
      </Link>

      </div>
    </div>
  </nav> */}

      <Helmet>
        <meta charSet="utf-8" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />



      </Helmet>
      {/* <nav>
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo" > <a href='/'><img src={alchemylogo} alt="Alchemy Solutions" height="60"  /></a></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name"> <a href='/'><img src={alchemylogo} alt="Alchemy Solutions" height="40" /></a></span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          
          
          <li><a href="">Hire train & Deploy</a></li>
          <li><a href="">Cloud labs</a></li>



          <li>
            <a href="">Certification</a>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
              <li><a href="">GCP</a></li>
              <li><a href="">RedHat</a></li>
              <li><a href="">Cisco</a></li>
              <li><a href="">AWS</a></li>
              <li><a href="">IBM</a></li>
              <li><a href="">SAP</a></li>
              <li><a href="">Big Data & Analytics</a></li>
              <li><a href="">DevOps</a></li>
              <li><a href="">CompTia</a></li>
            </ul>
          </li>



          <li>
            <a href="#">OEM Offerings</a>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="htmlCss-sub-menu sub-menu">
              <li><a href="">IBM</a></li>
              <li><a href="">Microsoft</a></li>
              <li><a href="">RedHat</a></li>
              <li><a href="">Citrix</a></li>
              <li><a href="">AWS</a></li>
              <li class="more">
                <span><a href="#">More</a>
                <i class='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
                <ul class="more-sub-menu sub-menu">
                  <li><a href="">Vmware</a></li>
                  <li><a href="">Informatica</a></li>
                  
                </ul>
              </li>
            </ul>
          </li>
       

          <li>
            <a href="#">Services</a>
            <i class='bx bxs-chevron-down js-arrow arrow '></i>
            <ul class="js-sub-menu sub-menu">
            <li><a href="">Open houses</a></li>
<li><a href="">Content Development</a></li>

<li><a href="">IT contract staffing</a></li>
<li><a href="">Infrastructure </a></li>

            </ul>
          </li>

        
          
        </ul>
      </div>
      
    </div>
  </nav> */}
      <header>
        <a href="/" class="logo"><img src={alchemylogo} alt="Alchemy Solutions" height="60" /></a>
        <input type="checkbox" id="menu-bar" />
        <label for="menu-bar" style={{marginTop:"5px"}}>
          <svg
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="arcs"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </label>
        <nav class="navbar">
          <ul>
            <li><a href="/hire-Train-Deploy"><i class="fa fa-user px-1" aria-hidden="true"></i>Hire train & Deploy</a></li>
            <li><a href="/cloud-Lab"><i class="fa fa-cloud px-1" aria-hidden="true"></i>Cloud labs</a></li>


            <li>
              <a href=""><i class="fa fa-certificate px-1" aria-hidden="true"></i>Certification <i class='bx bxs-chevron-down js-arrow arrow '></i></a>
            
             <ul className='scroll-bar'>
                <li><a href="">GCP</a></li>
                <li><a href="">RedHat</a></li>
                <li><a href="">Cisco</a></li>
                <li><a href="">AWS</a></li>
                <li><a href="">IBM</a></li>
                <li><a href="">SAP</a></li>
                <li><a href="">Big Data & Analytics</a></li>
                <li><a href="">DevOps</a></li>
                <li><a href="">CompTia</a></li>
              </ul>
             
            </li>

            <li>
              <a href=""><i class="fa fa-th px-1" aria-hidden="true"></i>OEM Offerings <i class='bx bxs-chevron-down js-arrow arrow '></i></a>
              <ul >
                <li><a href="">IBM</a></li>
                <li><a href="">Microsoft</a></li>
                <li><a href="">RedHat</a></li>
                <li><a href="">Citrix</a></li>
                <li><a href="">AWS</a></li>
                <li>
                  <a href="">More  <i class='bx bxs-chevron-right arrow more-arrow'></i></a>
                  <ul>
                    <li><a href="">Vmware</a></li>
                    <li><a href="">Informatica</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href=""><i class="fa fa-th-large px-1" aria-hidden="true"></i>Services <i class='bx bxs-chevron-down js-arrow arrow '></i></a>
              <ul >
                <li><a href="">Open houses</a></li>
                <li><a href="">Content Development</a></li>

                <li><a href="">IT contract staffing</a></li>
                <li><a href="">Infrastructure </a></li>
              </ul>
            </li>

          </ul>
        </nav>
      </header>




    </div>
  )
}

export default Navbar