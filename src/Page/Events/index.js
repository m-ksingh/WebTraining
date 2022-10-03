import React from 'react'
import "../../Component/Css/Events.css"
import e1 from "../../Assets/Image/g1 (1).jpeg"
import e2 from "../../Assets/Image/g1 (2).jpeg"
import e3 from "../../Assets/Image/g1 (3).jpeg"
import e4 from "../../Assets/Image/g1 (4).jpeg"

const EventsGallery = () => {
  return (
    <div className='alchemyoffers'>
        <h1 class="mt-5 pt-5 text-center " style={{color:"white"}}>Alchemy Events</h1>
        <h6 class=" text-center "><i   style={{marginTop:"40px" , color:"white"}}>“Photographs open doors into the past, but they also allow a look into the future.”</i></h6>
        <div class="grid">
    <div class="item bac1" ></div>
    
    <div class="item bac2" ></div>
    
    <div class="item bac3" ></div>
    
    <div class="item bac4" ></div>
    
    <div class="item bac4"></div>
  </div>
        </div>
  )
}

export default EventsGallery