import React from 'react'
import "./infra.css"
import progress from "../../../Assets/Image/infra.jpeg"
import infra from "../../../Assets/Image/infrainfo.png"
import infras from "../../../Assets/Image/infrainfommm.png"
import Contactus from '../../Contactus'
const Infra = () => {
  return (
    <>
  <div class="p-5  bg-image infra-header ">
        <div class="mask" >
        <div class="d-flex justify-content-center align-items-center h-100">
            <div  style={{color:"#458DA8"}}>
              <h1 class="mb-3 text-center">IT Infrastructure</h1>
              <a href='#contact '><button className='contactbutton mt-5'>  Contact us</button></a>
              </div> 
           
        </div>
        </div>
      </div>
      <div className='text-center pb-1' style={{ background: "#E7EEF0" }} >
        <h4 class=" WeareTraining pt-4 ">Alchemy Credentials</h4>

        <p className='infratext'  >&#x2022; An EICC (Electronic Industry Citizenship Coalition) Audited Company</p>

        <p className='infratext' >&#x2022; Crisil Rated Company</p>

        <p className='infratext ' >&#x2022; WeConnect Certification.</p>
      </div>
      <hr/>
      <div className='text-center pb-1' style={{ background: "#E7EEF0" }} >
        <h4 class=" WeareTraining pt-1 ">Facilities Across India</h4>

        <p className='Training ' >Alchemy Provides top of the line infrastructure services to its Customers across India with 2500 seating capacity. Alchemy can accommodate 400 participants in Bangalore, 200 in Chennai, 200 in Hyderabad, 100 in Pune. 100 in Mumbai  etc….  Training Rooms are also provided on Long term Lease basis to Companies for their Freshers Recruitment, Training, Delpoying .</p>
        <hr />
        <div className='text-center ' style={{ background: "#E7EEF0" }} >
    
        
    <img class="img-fluid" src ={infras}  alt="Testimonial"   width="60%"/>

</div>
        <div className='text-center ' >
      
        <h4 class=" pt-3  ">
          <img class="img-fluid" src ={progress}  alt="Testimonial" />
        </h4>
     </div>
      

      <h4 class=" WeareTraining pt-1 ">Connectivity, Hardware and software in classrooms</h4>

        <p className='Training ' ><span style={{fontWeight:"bold"}}>Connectivity</span>: Bandwidth has to be dedicated & uninterrupted 10- 15 MBPS wired</p>
        <p className='Training ' ><span style={{fontWeight:"bold"}}>Hardware Requirements</span>:<br/> &#x2022; 15 or 20 Inches TFT Monitor
         <br/>
         &#x2022; 01 machine for the trainer,Machines Avaialble from 4gB To 32GB
         <br/>
        
         &#x2022; Solaris/Redhat/AIX/Windows Machine if required
<br/>
&#x2022; LCD compatible to IBM Think Pad
<br/>
&#x2022; Pentium 5, 2.66 GHz processor (Min), 4 -32 GB RAM
<br/>

&#x2022; Minimum Free Disk Space - A minimum of 120 GB of free space is required on your C: drive   (partition) after all prerequisite software installation has been completed. 
<br/>
&#x2022; 10 / 100 MB network card 
<br/> 

&#x2022; 8x CD-ROM drive (Minimum) or DVD-ROM 

<br/>


&#x2022; Hardware required for virtual/hybrid training – Digital pad, Webcam, Polycom phone, speaker and microphone
        </p>

        <p className='Training ' ><span style={{fontWeight:"bold"}}>Software Requirements</span>:<br/> &#x2022; Anti virus Software loaded
         <br/>
         &#x2022; Microsoft Windows 2000-2008-2010/Linux/AIX/Solaris/RedHat 
         <br/>
        
         &#x2022; Microsoft Office
<br/>
&#x2022; Internet Explorer
<br/>
&#x2022; 
Software required for virtual/hybrid training – Cisco –WebEx, Citrix-GoTo Training or similar product
All latest service packs to be applied.

        </p>
      </div>

      

     <div className='text-center hello' >
     <h4 class=" pt-1">Our Services</h4>
        <h4 class=" pt-1  ">
          <img class="img-fluid" src ={infra}  alt="Testimonial" width="60%" />
        </h4>
     </div>
     <div id='contact'>
        <Contactus/>
     </div>
    </>
  )
}









export default Infra