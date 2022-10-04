import React from 'react'
import pdf from "../../Assets/pdf/VMBATCHES.pdf";
import pdf1 from "../../Assets/pdf/REDHATBATCHES.pdf";
import awspdf from "../../Assets/pdf/awsbatches.pdf";
import OpenHouseprog from "../../Assets/Image/openhouseprogram.jpg";
import { Link } from 'react-router-dom';
import Contactus from '../Contactus';

const OpenHouse = () => {
  return (
    <>

<div class="p-5  bg-image infra-header ">
        <div class="mask" >
        <div class="d-flex justify-content-center align-items-center h-100">
            <div  style={{color:"#458DA8"}}>
              <h1 class="mb-5 mt-5 text-center">Upcoming Open House Batches</h1>
              <marquee  direction="up" scrolldelay="150" height="150px" > 
      <h4 className='text-center'>    <Link to={pdf} target="_blank">VmWare Batches<sup style={{color:"red"}}>New</sup></Link></h4><br/>
           
         <h4 className='text-center'> <Link to={awspdf} target="_blank">AWS Batches<sup style={{color:"red"}}>New</sup></Link></h4><br/> 
         <h4 className='text-center'> <Link to={pdf1} target="_blank">RedHat Batches<sup style={{color:"red"}}>New</sup></Link></h4> <br/>
          
         <h4 className='text-center'>    <Link to={pdf} target="_blank">VmWare Batches<sup style={{color:"red"}}>New</sup></Link></h4><br/>
           
           <h4 className='text-center'> <Link to={awspdf} target="_blank">AWS Batches<sup style={{color:"red"}}>New</sup></Link></h4><br/> 
           <h4 className='text-center'> <Link to={pdf1} target="_blank">RedHat Batches<sup style={{color:"red"}}>New</sup></Link></h4> 
          </marquee>
      

          <h4 className='pb-5 mt-5' >For more details<a href='#contact'><button className='contactbutton'>  Contact us</button></a></h4>
              </div> 
        </div>
        
        </div>
      </div>

          
      <div className='text-center' >
    
    <h4 class=" pt-3  ">
      <img class="img-fluid" src ={OpenHouseprog}  alt="Testimonial" width="35%"/>
    </h4>
 </div>
<div id="contact">
<Contactus/>
</div>
    </>
  )
}

export default OpenHouse