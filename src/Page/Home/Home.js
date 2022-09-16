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


import ibm from "../../Assets/Image/ibm.png";
import microsoft from "../../Assets/Image/microsoft.png";
import citrix from "../../Assets/Image/citrix.png";
import redhat from "../../Assets/Image/redhat.png";
import oracle from "../../Assets/Image/oracle.png";
import bmc from "../../Assets/Image/bmc.png";
import suse from "../../Assets/Image/suse.png";
import techdata from "../../Assets/Image/techdata.png";
import DevelopmentUrl from "../../data/api";
import { Link } from "react-router-dom";

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
                {suggestions && suggestions.map((suggestion, i) =>
                <div key={i} style={{ background: "white", padding: "10px 5px 10px 25px  " }}>
                  <Link to='/Courses'
                    state={{ from: suggestion }} >{suggestion.title}</Link>
                </div>
              )}
              </div>
             
             

              <h6 class="mb-3 mt-4 text-center">Big Data | Cloud Computing | DevOps | AI/ML</h6>
            </div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className='text-center pb-5' style={{ background: "#E7EEF0" }} >
        <h4 class=" weare pt-5 ">Who We Are</h4>

        <p className='weareparagraph pb-3' >At Alchemy Solutions, we are driven to nurture and deliver solutions to people-specific problems. From our humble start in 2001 at our Bangalore headquarters, we’ve scaled the industry as India’s fastest growing HR company. Recruitment is not just about aptitude+attitude anymore, the industry demands more. Adapting to this idea, we’re focused on offering our clientele candidates who are also more reliable and a perfect cultural fit to their organisation.</p>
      </div>



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
                        <img src={anz} alt="icon" height="28" />
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


      {/* client */}

      <div className='text-center'   >
        <h4 class="my-2 weare ">CLIENTELE</h4>
      </div>

      <div class="slider contactusmain">
        <div class="slide-track">
          <div class="slide">
            <img src={info} height="60" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={tesco} height="70" width="280" alt="" />
          </div>
          <div class="slide">
            <img src={emc} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={anz} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={abb} height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src={mindtree} height="90" width="250" alt="" />
          </div>



          {/* <div class="slide">
            <img src="https://alchemysolutions.net/wp-content/uploads/2019/09/LT.jpg" height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Vodafone.jpg" height="70" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Siemens.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Cognizant.jpg" height="100" width="250" alt="" />
          </div>
          <div class="slide">
            <img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Accenture.jpg" height="80" width="250" alt="" />
          </div> */}

        </div>
      </div>

      <div className='trainingpartne-mobile text-center pt-5 pb-5 mt-4'  style={{ background: "#E7EEF0" }} >
        <h4 class="my-3  weare ">TRAINING PARTNERS</h4>
        <div class="container pt-5">
          <div class="row">
            <div class="col-sm">
              <img src={ibm} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">
              <img src={microsoft} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">
              <img src={citrix} alt="" width="397" height="258" />
            </div>

          </div>
          {/* <div class="row">
            <div class="col-sm">
              <img src={oracle} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">
              <img src={bmc} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">
              <img src={suse} alt="" width="397" height="258" />
            </div>

          </div> */}
          <div class="row">
            <div class="col-sm">
              <div class="col-sm">
                <img src={redhat} alt="" width="397" height="258" />
              </div>
            </div>
            <div class="col-sm">
              <img src={techdata} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">

            </div>

          </div>
        </div>
      </div>

      <div className='contactusmain' >
        <form className='contactus'>
          <h1 class="text-white text-center"style={{color:"white"}}>Contact Us</h1>
          <p className='text-center'style={{color:"white"}}>Please take a moment to get in touch, we will get back to you shortly.</p>

          <div class="column">
            <label for="the-name" style={{color:"white",fontSize: "15px",
    fontWeight: "500"}}>Your Name</label>
            <input type="text" name="name" id="the-name" required />

            <label for="the-email"style={{color:"white"}}>Email Address</label>
            <input type="email" name="email" id="the-email" required />

            <label for="the-phone"style={{color:"white"}}>Phone Number</label>
            <input type="text" pattern="[6789][0-9]{9}" title="Please enter valid phone number" name="phone" id="the-phone" required />
          </div>
          <div class="column">
            <label for="the-message"style={{color:"white"}}>Message</label>
            <textarea name="message" id="the-message" required></textarea>
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Home

