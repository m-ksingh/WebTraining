import React, {  useState } from 'react';
import "../../Component/Css/Home.css";
import axios from "axios";
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
import Scrollindicator from '../../Component/Scrollindicator/Scrollindicator';

function Home() {
  const [courseList, setCourseList] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [status, setStatus] = useState(false);

  const Submit = () => {

    axios.get(DevelopmentUrl + `/courses/searchbytitle/${courseName}`)
      .then(res => {
        console.log(res.data);
        setCourseList(res.data);
        setStatus(true);
        setCourseName('')
      })
      .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))

  }

  // console.log(courseName);
  return (
    <>


      <div class="p-5  bg-image header">
        <div class="mask" style={{ backgroundcolor: " rgba(0, 0, 0, 0.6)" }}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3 text-center">Learn from one of India's Biggest IT Training Provider</h1>



              <div class="search">

                <input type="text" class="form-control" placeholder="Search From 500 + Courses"
                  onChange={e => setCourseName(e.target.value)}
                  value={courseName}
                />

                <button class="btn btn-primary" onClick={Submit}>  <i class="fa fa-search"></i></button>

              </div>

              <h6 class="mb-3 mt-4 text-center">Big Data | Cloud Computing | DevOps | AI/ML</h6>
              {courseList.length > 0 ? courseList.map((suggestion, i) =>
                <div key={i} >
                  <Link to='/Courses'
                    state={{ from: suggestion }}>{suggestion.title}</Link>
                </div>
              ) : status === true ? <p>No Courses Found</p> : ''}

              {/* <a class="btn btn-outline-light btn-lg" href="#!" role="button"
          >Call to action</a  {suggestion.title}
          > */}
            </div>
          </div>
        </div>
      </div>

      {/* body */}
      <div className='text-center pb-5' style={{ background: "#E7EEF0" }} >
        <h4 class=" weare pt-5 ">Who We Are</h4>

        <p className='weareparagraph pb-3' >At Alchemy Solutions, we are driven to nurture and deliver solutions to people-specific problems. From our humble start in 2001 at our Bangalore headquarters, we’ve scaled the industry as India’s fastest growing HR company. Recruitment is not just about aptitude+attitude anymore, the industry demands more. Adapting to this idea, we’re focused on offering our clientele candidates who are also more reliable and a perfect cultural fit to their organisation.</p>

      </div>

      {/* client */}

      <div className='text-center'   >
        <h4 class="my-3 weare ">CLIENTELE</h4>
      </div>

      {/* <div class="container">
  <div class="row">
    <div class="col-sm">
    <img src={emc} alt =""  />
    </div>
    <div class="col-sm">
    <img src={anz} alt =""  />
    </div>
    <div class="col-sm">
    <img src={abb} alt =""  />
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
    <img src={tesco} alt ="" />
    
    </div>
    <div class="col-sm">
    <img src={info} alt =""  />
   
    </div>
    <div class="col-sm">
    <img src={mindtree} alt =""  />
    </div>
  </div>
</div> */}

      <div class="slider">
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



          <div class="slide">
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
          </div>

        </div>
      </div>

      {/* trainingpartner */}

      <div className='text-center pt-5 pb-5 mt-5' style={{ background: "#E7EEF0" }} >
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
          <div class="row">
            <div class="col-sm">
              <img src={oracle} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">
              <img src={bmc} alt="" width="397" height="258" />
            </div>
            <div class="col-sm">
              <img src={suse} alt="" width="397" height="258" />
            </div>

          </div>
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

      {/* contact us */}


      <div className='contactusmain' >
        <form action="#" method="post" className='contactus'>
          <h1 class="text-white text-center">Contact Us</h1>
          <p className='text-center'>Please take a moment to get in touch, we will get back to you shortly.</p>

          <div class="column">
            <label for="the-name">Your Name</label>
            <input type="text" name="name" id="the-name" required />

            <label for="the-email">Email Address</label>
            <input type="email" name="email" id="the-email" required />

            <label for="the-phone">Phone Number</label>
            <input type="text" pattern="[6789][0-9]{9}" title="Please enter valid phone number" name="phone" id="the-phone" required />

            {/* <label for="the-reason">How can we help you?</label>
    <select name="reason" id="the-reason">
    <option value="">Choose one</option>
    <option value="web">I need web design services</option>
    <option value="video">I need you to produce a video</option>
    <option value="3d">I need 3D polygon things</option>
  </select> */}
          </div>
          <div class="column">
            <label for="the-message">Message</label>
            <textarea name="message" id="the-message" required></textarea>
            {/* <label>
    <input type="checkbox" name="newsletter" value="yes"/> Join our mailing list?
    </label> */}
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>

      {/* last  */}


      {/* <div
  class=" footer bg-image d-flex justify-content-center align-items-center"
 
>
  <h1 class="text-white">We Make IT Training Work !!</h1>
</div> */}

    </>
  )
}

export default Home

