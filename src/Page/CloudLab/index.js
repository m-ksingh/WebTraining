import React from 'react'
import "../../Component/Css/cloudlab.css"
import awsclient from"../../Assets/Image/awsclient.png"
import ibmm from"../../Assets/Image/ibmm.png"
import itil from"../../Assets/Image/itil.png"
import informaticcccc from"../../Assets/Image/informaticcccc.png"
import gc from"../../Assets/Image/gc.png"
import pearson from"../../Assets/Image/pearson.png"
import rededucation from"../../Assets/Image/rededucation.png"
import vmvare from"../../Assets/Image/vmvare.png"


import emc from "../../Assets/Image/emc (2).png";
import abb from "../../Assets/Image/Group 349.png";
import anz from "../../Assets/Image/Group 348.png";
import info from "../../Assets/Image/Logo-03.png";
import mindtree from "../../Assets/Image/Logo-01.png";
import tesco from "../../Assets/Image/Logo-02.png";
import progress from "../../Assets/Image/proress.jpeg"
import cloudlamission from "../../Assets/Image/cloudlabourmision.gif"
function CloudLab() {
  return (
  <>
  <div class="p-5  bg-image clab-header">
        <div class="mask" >
        {/* <form  class="containers">
    <h1>Login</h1>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit" class="btn">Login</button>
  </form>
   */}
        </div>
      </div>
      <div className='text-center pb-5' style={{ background: "#E7EEF0" }} >
        <h4 class=" weare pt-5 ">Who We Are</h4>

        <p className='weareparagraph pb-3' >At Alchemy Solutions, we are driven to nurture and deliver solutions to people-specific problems. From our humble start in 2001 at our Bangalore headquarters, we’ve scaled the industry as India’s fastest growing HR company. Recruitment is not just about aptitude+attitude anymore, the industry demands more. Adapting to this idea, we’re focused on offering our clientele candidates who are also more reliable and a perfect cultural fit to their organisation.</p>
      </div>
      <div className='ourmission py-5'>
      <div class="container ">
    
  <div class="row">
    <div class="col-6 " >
    <h4 class=" ourmissionheading  ">Our Mission</h4>
        <p>
        Enable immersive content experiences that allow consistent and seamless engagement between content creators and customers through a virtual training platform, an online hands-on learning environment.
        </p>
        <h4 class=" ourmissionheading  ">Cloud Labs Services</h4>
        <p>
        CloudLabs is designed for organizations and educational institutes of all sizes to offer an impactful learning experience with zero to minimal management overhead.
        </p>
    
        <h4 class=" ourmissionheading  ">Reduce Labs Costs up to 80%</h4>
        <p>
        CloudLabs platform leverages the public cloud platforms to host labs in a cost effective fashion, which can work for organizations of every size.
        </p>
    </div>
    <div class="col-6 ">

        <img src={cloudlamission} alt='img' className="ourmissionimg" width="100%"/>
    </div>
  </div>
</div>
</div>



<div className=' py-5 ' style={{background: "rgb(231, 238, 240)"}}>
      <div class="container ">
    
  <div class="row">
    <div class="col-7 " >
    <div class="wrappers">
    <h4 class="how-title">CloudLabs reinvents the way how technology experiences are delivered</h4>
    <br/>
    <div class="skill">
        <p>Learner satisfaction</p>
        <div class="skill-bar skill1">
            <span class="skill-count1">100%</span>
        </div>
    </div>
    
    <div class="skill">
        <p>Success rate</p>
        <div class="skill-bar skill3">
            <span class="skill-count3">95%</span>
        </div>
    </div>
    <div class="skill">
        <p>Time saving</p>
        <div class="skill-bar skill2">
            <span class="skill-count2">85%</span>
        </div>
    </div>
</div>
    </div>
    <div class="col-5 ">

        <img src={progress} alt='img' className="ourmissionimg" width="100%" height="300px" style={{boxShadow:"none"}}/>
    </div>
  </div>
</div>
</div>


<div className='text-center pb-2 hello' >
        <h4 class=" pt-2 ">TRAINING PARTNERSHIPS</h4>

        <div className="Contain">
        <div class="row no-gutters">
        
        <div class=" logos">
          <table cellpadding="0" cellspacing="0" >
            <tbody>
              <tr>
              <td><img class="lazy" src={awsclient} alt="Wallmart Logo"/></td>
              <td><img class="lazy" src={ibmm} alt="Deloitte Logo"/></td>
              <td><img class="lazy" src={itil} alt="Accenture Logo"/></td>
              <td><img class="lazy" src={informaticcccc} alt="Infosys Logo"/></td>
              </tr>
<tr>
<td><img class="lazy" src={emc} alt="GE Logo"/></td>
              <td><img class="lazy" src={abb} alt="Vmware Logo"/></td>
              <td><img class="lazy" src={anz} alt="Target Logo"/></td>
              <td><img class="lazy" src={tesco} alt="Mercedes-Benz Logo"/></td>
</tr>
           
            <tr>
            <td><img class="lazy" src={gc} alt="GE Logo"/></td>
              <td><img class="lazy" src={pearson} alt="Vmware Logo"/></td>
              <td><img class="lazy" src={rededucation} alt="Target Logo"/></td>
              <td><img class="lazy" src={vmvare} alt="Mercedes-Benz Logo"/></td>
              </tr>
              <tr>
              <td><img class="lazy" src={mindtree} alt="Wallmart Logo"/></td>
              <td><img class="lazy" src={info} alt="Deloitte Logo"/></td>
              <td><img class="lazy" src={itil} alt="Accenture Logo"/></td>
              <td><img class="lazy" src={informaticcccc} alt="Infosys Logo"/></td>
              
            </tr>
          
          
          </tbody></table>
        </div>
      </div>
        </div>
      </div>
  </>
  )
}

export default CloudLab