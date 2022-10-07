import React from 'react'
import ceo from "../../Assets/Image/final print women entrepreneur 1024_1.jpg"
import womenemp from "../../Assets/Image/womenemp.jpg"
import appcer from "../../Assets/Image/appreciationcert.jpg"

import appcerbooking from "../../Assets/Image/appcertbooking.jpg"
import c1 from "../../Assets/Image/c1.jpg"
import c2 from "../../Assets/Image/c2.JPG"
import c3 from "../../Assets/Image/c3.jpg"
import c4 from "../../Assets/Image/c4.jpg"
import Thanks from "../../Assets/Image/Thankyoumessage.jpeg"
import "./Testimonal.css"
const Testimonial= () => {
  return (
    <>


        <div class="  p-5 bg-image testimonialheader " style={{background:"rgb(231, 238, 240)"}} >
        <div class="mask" >

         

          
        </div>
      </div>
<div className='pb-5' style={{background:"rgb(231, 238, 240)"}} >
<div className='container ' >
<div className='row'>

<img src={ceo} class="img-fluid" alt="ceo"/>
</div>
{/* <div className='col'>
<img src={womenemp} class="img-fluid" alt="ceo"/>
</div> */}
</div>
</div>

<div className='contentback pb-4 '>
      <h4 class=" text-center WeareTraining pt-3 pb-2">Citrix Appreciation</h4>
      <div class="container">
 
  <div class="row">
    <div class="col">
    <div class="card" >
  <img class="card-img-top img-thumbnail" src={c1} alt="Card image cap" />
 
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img class="card-img-top img-thumbnail" src={c4} alt="Card image cap" />
  <img src={c2} alt='img' className="img-fluid" 
     />
 
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img class="card-img-top img-thumbnail" src={c3} alt="Card image cap" />
  
</div>
    </div>
   
  </div>
</div>
</div>

<div className=' pb-4 ' style={{background:"rgb(231, 238, 240)"}}>
      <h4 class=" text-center WeareTraining pt-3 pb-2">Red Hat Appreciation</h4>
      <div class="container">
 
  <div class="row">
   
    <div class="col">
    <div class="card" >
  <img class="card-img-top img-thumbnail" src={appcer} alt="Card image cap" height="250px"/>
 
</div>
    </div>
    <div class="col">
    <div class="card" >
  <img class="card-img-top img-thumbnail" src={appcerbooking} alt="Card image cap" height="250px"/>
  
</div>
    </div>
   
  </div>
</div>
</div>





<div style={{background:"rgb(231, 238, 240)"}}>
<div class="container ">
    
    <div class="row">
      <div class="col " >
     
      <img src={Thanks} alt='img' className="img-fluid" width="100%" height="400"/>
          
      </div>
      <div class="col ">
  
          <img src={womenemp} alt='img' className="img-fluid" width="100%"/>
      </div>
    </div>
  </div>
</div>
         <hr/>     
    </>
  )
}

export default Testimonial