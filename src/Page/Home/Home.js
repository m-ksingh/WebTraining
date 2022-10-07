import React, { useState, useEffect } from 'react';
import "../../Component/Css/Home.css";
import axios from "axios";
import award from "../../Assets/Image/Capture.JPG";
import emc from "../../Assets/Image/emc (2).png";
import abb from "../../Assets/Image/Group 349.png";
import anz from "../../Assets/Image/Group 348.png";
import info from "../../Assets/Image/Logo-03.png";
import mindtree from "../../Assets/Image/Logo-01.png";
import tesco from "../../Assets/Image/Logo-02.png";

import infras from "../../Assets/Image/infrainfommm.png"
// import ibm from "../../Assets/Image/ibm.png";
import microsoft from "../../Assets/Image/microsoft.png";
import citrix from "../../Assets/Image/citrix.png";
import redhat from "../../Assets/Image/redhat.png";
// import oracle from "../../Assets/Image/oracle.png";
// import bmc from "../../Assets/Image/bmc.png";
// import suse from "../../Assets/Image/suse.png";
import techdata from "../../Assets/Image/techdata.png";
import DevelopmentUrl from "../../data/api";
import { Link } from "react-router-dom";

import Contactus from '../Contactus';

import awsclient from"../../Assets/Image/awsclient.png"
import ibmm from"../../Assets/Image/ibmm.png"

import vmvare from"../../Assets/Image/vmvare.png"


//import  clintile

import ct1 from "../../Assets/Clintile/Png-01.png"
import ct2 from "../../Assets/Clintile/Png-02.png"
import ct3 from "../../Assets/Clintile/Png-03.png"
import ct4 from "../../Assets/Clintile/Png-04.png"
import ct5 from "../../Assets/Clintile/Png-05.png"
import ct6 from "../../Assets/Clintile/Png-06.png"
import ct7 from "../../Assets/Clintile/Png-07.png"
import ct8 from "../../Assets/Clintile/Png-08.png"
import ct9 from "../../Assets/Clintile/Png-09.png"
import ct10 from "../../Assets/Clintile/Png-10.png"
import ct11 from "../../Assets/Clintile/Png-11.png"
import ct12 from "../../Assets/Clintile/Png-12.png"
import ct13 from "../../Assets/Clintile/Png-13.png"
import ct14 from "../../Assets/Clintile/Png-14.png"
import ct15 from "../../Assets/Clintile/Png-15.png"
import ct16 from "../../Assets/Clintile/Png-16.png"
import ct17 from "../../Assets/Clintile/Png-17.png"
import ct18 from "../../Assets/Clintile/Png-18.png"
import ct19 from "../../Assets/Clintile/Png-19.png"
import ct20 from "../../Assets/Clintile/Png-20.png"

import ct21 from "../../Assets/Clintile/Png-21.png"
import ct22 from "../../Assets/Clintile/Png-22.png"
import ct23 from "../../Assets/Clintile/Png-23.png"
import ct24 from "../../Assets/Clintile/Png-24.png"
import ct25 from "../../Assets/Clintile/Png-25.png"
import ct26 from "../../Assets/Clintile/Png-26.png"
import ct27 from "../../Assets/Clintile/Png-27.png"
import ct28 from "../../Assets/Clintile/Png-28.png"
import ct29 from "../../Assets/Clintile/Png-29.png"
import ct30 from "../../Assets/Clintile/Png-30.png"
import ct31 from "../../Assets/Clintile/Png-31.png"
import ct32 from "../../Assets/Clintile/Png-32.png"
import ct33 from "../../Assets/Clintile/Png-33.png"
import ct34 from "../../Assets/Clintile/Png-34.png"
import ct35 from "../../Assets/Clintile/Png-35.png"
import ct36 from "../../Assets/Clintile/Png-36.png"
import ct37 from "../../Assets/Clintile/Png-37.png"
import ct38 from "../../Assets/Clintile/Png-38.png"
import ct39 from "../../Assets/Clintile/Png-39.png"
import ct40 from "../../Assets/Clintile/Png-40.png"
import ct41 from "../../Assets/Clintile/Png-41.png"
import ct42 from "../../Assets/Clintile/Png-42.png"
import ct43 from "../../Assets/Clintile/Png-43.png"
import ct44 from "../../Assets/Clintile/Png-44.png"









function Home() {
  const [courseList, setCourseList] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get(DevelopmentUrl + '/courses')
      .then(res => {
        setCourseList(res.data);
        setCourseName('');
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))
  }, [])

  const onChangeHandler = (courseName) => {

    let filterCourseByName = []
    if (courseName.length > 0) {
      filterCourseByName = courseList.filter(list => {
        const regex = new RegExp(`${courseName}`, "gi");
        return list.title.match(regex)
      })
    }
    setSuggestions(filterCourseByName)
    setCourseName(courseName)
  }

  return (
    <>
      <div class="p-5  bg-image header">
        <div class="mask" style={{ backgroundcolor: " rgba(0, 0, 0, 0.6)" }}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3 text-center">Learn from one of India's Biggest IT Training Provider</h1>
              
              <div class="search">
                
                <input type="text" className='form-control' placeholder="Search From 500 + Courses"
                  onChange={e => onChangeHandler(e.target.value)}
                  value={courseName}
                />
                <button class="btn btn-primary">  <i class="fa fa-search"></i></button>
                {suggestions.length > 0 && courseName.length > 0 ?  suggestions.map((suggestion, i) =>
                    <div key={i} style={{ background: "white", padding: "5px 5px 5px 25px  " }}>
                        <Link to='/Courses'
                            state={{ from: suggestion }} >{suggestion.title}</Link>
                    </div>
                ): <div style={{padding: "5px 5px 5px 25px ", color:"#EFA47F"}}>{suggestions.length === 0 && courseName.length > 0 ? <p >Oops !! No Courses found. &nbsp;&#128528;</p> : ''}</div>
                }
              </div>
             
            </div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className='text-center pb-1' style={{ background: "#E7EEF0" }} >
        <h4 class=" weare pt-5 ">Who Are We ?</h4>

        <p className='Training ' >Alchemy Solutions is a globally focused IT company with strong capabilities in
Training and H.R Consultancy. Alchemy Solutions is based in Bangalore, India,
and has a dedicated team of professionals with diverse technical skill sets. This
number is steadily growing to help us achieve our vision and goals.</p>
      <p className="Training">Alchemy Solutions is your source for reliable and productive consultancy.
Stringent quality standards, exceptional resource capabilities and a consistent
record of delivering solutions to clients on schedule, drive the company’s
focus.</p>
      
      </div>
      <hr/>
      <div className='text-center pb-1' style={{ background: "#E7EEF0" }} >
        <h4 class=" WeareTraining pt-4 ">Alchemy Credentials</h4>

        <p className='infratext'  >&#x2022; An EICC (Electronic Industry Citizenship Coalition) Audited Company</p>

        <p className='infratext' >&#x2022; Crisil Rated Company</p>

        <p className='infratext ' >&#x2022; WeConnect Certification.</p>
      </div>
      <hr/>
{/* 
      <div className=' text-center alchemyoff pb-4'  >
        <h6 class=" alchemy py-3 ">Alchemy offers world-class training to its customers in the following areas:</h6>
        <img class="img-fluid" src ={alchemy} alt ="alchemy"/>
        </div> */}

      <div class="aboutus-section ">
        <div class="container">
          <div class="row">
            {/* <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Me</h2>
                        <p class="aboutus-text">Hello! My name is Mayank Singh and I enjoy creating things that live on the internet. My interest in web development started back in 2016 </p>
                        <p class="aboutus-text">Fast-forward to today, and I’ve had the privilege of working at  a start-up, a huge corporation, My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                      
                    </div>
                </div> */}
               
                  <h4 class="weare " style={{textAlign:"center", marginTop:"-40px"}}>Awards</h4>
            <div class="col-md-6 col-sm-6 col-xs-12 ">
            
              <div class="aboutus-banner" >
                <img src={award} alt="profile"  class="profile" style={{ borderRadius: "20px", }} />
              </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 mt-5 ">
              <div class="feature">
                <div class="feature-box">
                  <div class="clearfix">
                    <div class="iconset">
                      <span >
                        <img src={anz} alt="icon" height="25" />
                      </span>
                    </div>
                    <div class="feature-content">
                      <h4 class="aboutus-title">2019</h4>
                      <p class="aboutus-text">ANZ Bengaluru
                        Preferred Learning Partner
                        (2018 - 2019)</p>


                    </div>
                  </div>
                </div>
                <div class="feature-box">
                  <div class="clearfix">
                    <div class="iconset">
                      <span >
                        <img src={citrix} alt="icon" height="40" />
                      </span>
                    </div>
                    <div class="feature-content">
                      <h4 class="aboutus-title">2018 </h4>
                      <p class="aboutus-text">Citrix
                        Rising Star of theYear (2018).</p>
                    </div>
                  </div>
                </div>
                <div class="feature-box">
                  <div class="clearfix">
                    <div class="iconset">
                      <span >
                        <img src={redhat} alt="icon" height="40" />
                      </span>
                    </div>
                    <div class="feature-content">
                      <h4 class="aboutus-title">2017</h4>
                      <p class="aboutus-text"> Red Hat
                        Growth In Revenue (2017 - 2018)
                        Red Hat
                        Growth In Booking (2017 - 2018)</p>
                    </div>
                  </div>
                </div>
               
                <div class="feature-box">
                  <div class="clearfix">
                    <div class="iconset">
                      <span >
                        <img src="https://1000logos.net/wp-content/uploads/2021/09/HCL-Logo.png" alt="icon" height="40" />
                      </span>
                    </div>
                    <div class="feature-content">
                      <h4 class="aboutus-title">2014</h4>
                      <p class="aboutus-text"> HCL
                        Star Partner (2014) | CMSB
                        Best Fastest Growing Outsourcing Company (2014)</p>
                   


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center ' style={{ background: "#E7EEF0" }} >
    
        
    <img class="img-fluid" src ={infras}  alt="Testimonial"   width="60%"/>

</div>

      {/* client */}

      <div className='text-center'   >
        <h4 class="my-2 pb-4 weare ">CLIENTELE</h4>
      </div>

      <div class="slider contactusmain">
        <div class="slide-track">
          <div class="slide">
            <img src={ct1} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct2} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct3} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct4} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct5} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct6} height="70" width="250" alt="" />
          </div>

          <div class="slide">
            <img src={ct7} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct8} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct29} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct10} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct11} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct12} height="70" width="250" alt="" />
          </div>

          <div class="slide">
            <img src={ct13} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct14} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct15} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct16} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct17} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct18} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct19} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct20} height="70" width="250" alt="" />
          </div>



          <div class="slide">
            <img src={ct21} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct22} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct23} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct24} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct25} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct26} height="70" width="250" alt="" />
          </div>

          <div class="slide">
            <img src={ct27} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct28} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct29} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct30} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct31} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct32} height="70" width="250" alt="" />
          </div>

          <div class="slide">
            <img src={ct33} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct34} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={ct35} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct36} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct37} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct38} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct39} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={ct40} height="70" width="250" alt="" />
          </div>
        </div>
      </div>

      <div className='text-center pb-2 client' >
        <h4 class=" pt-2 ">TRAINING PARTNERSHIPS</h4>

        <div className="Contain">
        <div class="row no-gutters">
        
        <div class=" logos">
          <table cellpadding="0" cellspacing="0" >
            <tbody>
              <tr>
              <td><img class="lazy" src={microsoft} alt="Wallmart Logo"/></td>
              <td><img class="lazy" src={techdata} alt="Deloitte Logo"/></td>
              <td><img class="lazy" src={citrix} alt="Accenture Logo"/></td>
              <td><img class="lazy" src={redhat} alt="Infosys Logo"/></td>
              </tr>
{/* <tr>
<td><img class="lazy" src={emc} alt="GE Logo"/></td>
              <td><img class="lazy" src={abb} alt="Vmware Logo"/></td>
              <td><img class="lazy" src={anz} alt="Target Logo"/></td>
              <td><img class="lazy" src={tesco} alt="Mercedes-Benz Logo"/></td>
</tr> */}
           
            <tr>
            <td><img class="lazy" src={awsclient} alt="GE Logo"/></td>
              <td><img class="lazy" src={ibmm} alt="Vmware Logo"/></td>
             
              <td><img class="lazy" src={vmvare} alt="Mercedes-Benz Logo"/></td>
              </tr>
           
          
          
          </tbody></table>
        </div>
      </div>
        </div>
      </div>

      <Contactus/>
    </>
  )
}

export default Home

