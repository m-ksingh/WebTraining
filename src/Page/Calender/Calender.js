import React from 'react'
import MachineLearninAi from '../../Component/Carousel/CourseCarousel'
import "../../Component/Css/Calender.css"

const Calender = () => {
  return (
    <>
       <div class="p-5  bg-image calenderbanner">
    <div class="mask" style={{backgroundcolor:" rgba(0, 0, 0, 0.6)"}}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white  ">
          <h1 class="mb-3 text-center">Designed to Deliver Results</h1>
          <div class="search">

  <input type="text" class="form-control" placeholder="Search From 500 + Courses"
 
  />
 
  <button class="btn btn-primary">  <i class="fa fa-search"></i></button>
  
</div>

<h6 class="mb-3 mt-4 text-center">Share your training needs and let us do the hard work</h6>
          </div>
          </div>

    </div>
    </div>

    {/* filter section */}

  <div className=' pt-3 pb-3 mb-5' style={{backgroundColor:"#E8EEF0" , borderBottomRightRadius:"10px", borderBottomLeftRadius:"10px"}}>
  



  <div class="container">
  <div class="row">
    <div class="col-sm">
    <div class="card  " style={{width: "18rem", border:"1px solid #1A576A",borderRadius:"10px"}}>
  <div class="card-body">
    <h5 class="card-title">Month and Date</h5>
    <input type="month"/>

  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card " style={{width: "18rem",border:"1px solid #1A576A",borderRadius:"10px"}}>
  <div class="card-body">
    <h5 class="card-title">Mode of Training</h5>
   
    <form style={{display:"flex"}} >
        <label style={{marginLeft:"10px"}}>
            <input type="checkbox"/> 
         &nbsp; &nbsp; Virtual
        </label>
  
        <label style={{marginLeft:"25px" }}>
            <input type="checkbox" /> 
            &nbsp; &nbsp;  Class Room
        </label>
    </form> 
   
    

  </div>
</div>
    </div>
    <div class="col-sm">
    <div class="card  " style={{width: "22rem" , border:"1px solid #1A576A", borderRadius:"10px"}}>
  <div class="card-body">
    <h5 class="card-title">Mode of Training
    
    </h5>
    <form style={{display:"flex"}} >
        <label style={{marginLeft:"5px"}}>
            <input type="checkbox"/> 
         &nbsp; &nbsp; Morning
        </label>
  
        <label style={{marginLeft:"18px" }}>
            <input type="checkbox" /> 
            &nbsp; &nbsp; Evening
        </label>
        
        <label style={{marginLeft:"18px" }}>
            <input type="checkbox" /> 
            &nbsp; &nbsp;  All Day
        </label>
    </form> 
    <form style={{display:"flex"}} >
        <label style={{marginLeft:"5px"}}>
            <input type="checkbox"/> 
         &nbsp; &nbsp; weekday
        </label>
  
        <label style={{marginLeft:"18px" }}>
            <input type="checkbox" /> 
            &nbsp; &nbsp; Weekend
        </label>
        
        
      
    </form> 
   

  </div>
</div>
    </div>
  </div>
</div>
</div>
 
 {/* About To ThE sESSION */}

 <div className='text-center'>
<h4 class=" aboutsession ">Need to know more about the sessions?</h4>
<button className='request' type='submit'>Request a Call back</button>
</div>

{/* ai machine learning */}
<div className='text-center'>
<h4 className="coursename ">AI, Machine Learning & IoT</h4>
<button className='request' type='submit'>TensorFlow Training</button>
<MachineLearninAi/>
</div>
    </>
  )
}

export default Calender