import React ,{useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"
import "../../Component/Css/Training.css"

const Training = () => {
    const [users,setUsers]= useState([])
    const [text , setText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    useEffect(() =>{
        const loadUsers = async()=>{
            const response= await axios.get('https://reqres.in/api/users?page=2')
            console.log(response.data)
            setUsers(response.data.data)
        }
        loadUsers()

    }, [])
    const onChangeHandler = (text) =>{
        let matches =[]
       if(text.length > 0) {
        matches = users.filter(user =>{
            const regex = new RegExp(`${text}`,"gi");
            return user. email.match(regex)
        })
       }
       console.log(matches)
        setSuggestions(matches)
        setText(text)
    }
  return (
    <>
            <div class="p-5 bg-image TrainingBanner">
    <div class="mask" >
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white responsivesearch">
          <h1 class="mb-3 text-center">Training Catalogue</h1>
          <div class="search">

  <input type="text" class="form-control" placeholder="Search From 500 + Courses"
  onChange ={e =>onChangeHandler(e.target.value)}
  value={text}
  />
 
  <button class="btn btn-primary">  <i class="fa fa-search"></i></button>
  
</div>

<h6 class="mb-3 mt-4 text-center">Big Data | Cloud Computing | DevOps | AI/ML</h6>
{suggestions && suggestions.map((suggestion,i)=>
    <div key={i} >{suggestion.first_name}</div>
  )}
          </div>
          </div>

    </div>
    </div>

    <div className='text-center pb-5' >
<h4 class=" weare pt-5 ">We are Experts at</h4>

<p className='weareparagraph pb-3' >Modern Technology, Professional Training, Great Experience, Innovative Ideas, Online Monitoring, Optimization tools</p>
<div style={{display:"flex"}}>
    
<div className='col-sm-3'>

</div>
<div className='col-sm-3'>
<button class="btn btntraining   my-2 my-sm-0 mx-1">Request a Call back</button>
</div>

   <div className='col-sm-3'>
    <Link to="/Calendar">
   <button class="btn btntraining  my-2 my-sm-0">Training Calendar</button></Link>
   </div>
   <div className='col-sm-3'>

</div>
</div>
</div>
<div className=' pb-5 mb-5'style={{background:"#E7EEF0", }} >
<h4 class=" weare pt-5 pb-5 text-center ">Course By Categories</h4>


<ul class="nav nav-tabs p-2 mx-5 tabss" id="myTab" role="tablist" style={{height:"auto" , width:"auto" , background:"white", border:"1px solid #1A576A", borderRadius:"10px"}}>
                <li class="nav-item active  " role="presentation">
                    <button class="nav-link active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" >Featured Courses</button>
                
                </li> 
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="profile" aria-selected="false">Certification Courses</button>
                </li>
               
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#FAQ" type="button" role="tab" aria-controls="contact" aria-selected="false">Courses Offered Partners</button>
                </li>
            </ul>
            <div class="tab-content content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

            

<div class="row" style={{backgroundColor:"white"}}>
  <div class="column" style={{borderRight:"1px solid #1A576A"}} >
<div >

<h6 className='headingpragraph'>Platforms</h6>
<p className='tab1pargraph'>AI, Machine Learning & IoT<br/>
Cloud Computing<br/>
Big Data & Analytics <br/>
Azure<br/>
DevOps & ITSM<br/>
Blockchain and Cybersecurity<br/>
Web & Mobile <br/>
Programming & Testing <br/>
Dot Net<br/>
</p>
</div>

  </div>
  <div class="column" style={{backgroundcolor:"#bbb"}}>
  <h6 className='headingpragraph'>Courses by Certification</h6>
<p className='tab1pargraph'>Deep Learning with TensorFlow<br/>
Deep Learning with Python<br/>
Introduction to Artificial Intelligence & Machine Learning<br/>
Machine Learning with Phython<br/>

</p>
<div className='col-sm-12'>
    <Link to="/#">
   <button class="btn btntraining  my-2 my-sm-0">Explore More Offerings</button></Link>
   </div>

  </div>
  
</div>

                </div>





                <div class="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="profile-tab">
                <div class="row" style={{backgroundColor:"white"}}>
  <div class="column" style={{borderRight:"1px solid #1A576A"}} >
<div >

<h6 className='headingpragraph'>Platforms</h6>
<p className='tab1pargraph'>Salesforce<br/>
Microsoft<br/>
ITIL <br/>
Google Cloud Platform<br/>
ISTQB<br/>
PeopleCert<br/>
Amazon Web Services<br/>
PMP <br/>
Cisco<br/>
WMware<br/>
Agile and Agile Safe<br/>
</p>
</div>

  </div>
  <div class="column" style={{backgroundcolor:"#bbb"}}>
  <h6 className='headingpragraph'>Courses by Certification</h6>
<p className='tab1pargraph'>Salesforce Certified Administrator (SU20)<br/>
Salesforce Certified Platform Developer II<br/>
Salesforce Certified Administrator<br/>
Field Service Lightning Consultant<br/>
Salesforce Certified Administrator (SU20)<br/>
Salesforce Sharing and Visibility Designer<br/>
Salesforce Certified Data Architecture & Management Designer<br/>

</p>
<div className='col-sm-12'>
    <Link to="/#">
   <button class="btn btntraining  my-2 my-sm-0">Explore More Offerings</button></Link>
   </div>

  </div>
  
</div>

                
                
                </div>
               
                <div class="tab-pane fade" id="FAQ" role="tabpanel" aria-labelledby="contact-tab">

                <div class="row" style={{backgroundColor:"white"}}>
  <div class="column" style={{borderRight:"1px solid #1A576A"}} >
<div >

<h6 className='headingpragraph'>Platforms</h6>
<p className='tab1pargraph'>SAP<br/>
Siemens<br/>
Amazon Web Services (AWS) <br/>
Google Cloud Platform (GCP)<br/>
IBM<br/>
Oracle<br/>
Red Hat<br/>
Microsoft <br/>
Dell EMC<br/>
MuleSoft<br/>

</p>
</div>

  </div>
  <div class="column" style={{backgroundcolor:"#bbb"}}>
  <h6 className='headingpragraph'>Courses by Certification</h6>
<p className='tab1pargraph'>Billing & Revenue Innovation Management (BR230)<br/>
SAP Billing & Revenue Innovation Management: Subscription Order Management (BR234)<br/>
System Administration II of SAP S/4HANA and SAP Business Suite (ADM103)<br/>
SAP Fiori - System Administration (UX200)<br/>
SAP Analytics Cloud: Analytics Designer (SACAD1)<br/>


</p>
<div className='col-sm-12'>
    <Link to="/#">
   <button class="btn btntraining  my-2 my-sm-0">Explore More Offerings</button></Link>
   </div>

  </div>
  
</div>
                </div>
            </div>

            </div>
            <hr/>
    </>
  )
}

export default Training