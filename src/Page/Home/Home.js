import React, { useEffect, useState } from 'react';
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
import Scrollindicator from '../../Component/Scrollindicator/Scrollindicator';

function Home() { 
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
{/* <div class="icon-bar">
  <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a> 
  <a href="#" class="twitter"><i class="fab fa-twitter"></i></a> 
  <a href="#" class="google"><i class="fab fa-google"></i></a> 
  <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
  <a href="#" class="youtube"><i class="fab fa-youtube"></i></a> 
</div> */}

        <div class="p-5  bg-image header">
    <div class="mask" style={{backgroundcolor:" rgba(0, 0, 0, 0.6)"}}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3 text-center">Learn from one of India's Biggest IT Training Provider</h1>

        

<div class="search">

  <input type="text" class="form-control" placeholder="Search From 500 + Courses"
  onChange ={e =>onChangeHandler(e.target.value)}
  value={text}
  />
 
  <button class="btn btn-primary">  <i class="fa fa-search"></i></button>
  
</div>

<h6 class="mb-3 mt-4 text-center">Big Data | Cloud Computing | Cloud Computing | AI/ML</h6>
{suggestions && suggestions.map((suggestion,i)=>
    <div key={i} >{suggestion.first_name}</div>
  )}

          {/* <a class="btn btn-outline-light btn-lg" href="#!" role="button"
          >Call to action</a
          > */}
        </div>
      </div>
    </div>
  </div>

{/* body */}
<div className='text-center pb-5'style={{background:"#E7EEF0"}} >
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
			<img src={emc} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={anz} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={abb} height="100" width="250" alt="" />
		</div>
    <div class="slide">
			<img src={mindtree} height="100" width="250" alt="" />
		</div>
    <div class="slide">
			<img src={info} height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src={tesco} height="100" width="250" alt="" />
		</div>
	
	
		<div class="slide">
			<img src="https://alchemysolutions.net/wp-content/uploads/2019/09/LT.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Vodafone.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Siemens.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Cognizant.jpg" height="100" width="250" alt="" />
		</div>
		<div class="slide">
			<img src="https://alchemysolutions.net/wp-content/uploads/2019/09/Accenture.jpg" height="100" width="250" alt="" />
		</div>
		
	</div>
</div>

{/* trainingpartner */}

<div className='text-center pt-5 pb-5 mt-5' style={{background:"#E7EEF0"}} >
<h4 class="my-3  weare ">TRAINING PARTNERS</h4>



<div class="container pt-5">
<div class="row">
  <div class="col-sm">  
    <img src={ibm} alt =""  width="397" height="258" />
  </div>
  <div class="col-sm">  
    <img src={microsoft} alt ="" width="397" height="258" />
  </div>
  <div class="col-sm">  
    <img src={citrix} alt =""  width="397" height="258" />
  </div>

</div>
<div class="row">
  <div class="col-sm">  
    <img src={oracle} alt =""  width="397" height="258"/>
  </div>
  <div class="col-sm">  
    <img src={bmc} alt =""  width="397" height="258" />
  </div>
  <div class="col-sm">  
    <img src={suse} alt =""   width="397" height="258"  />
  </div>

</div>
<div class="row">
  <div class="col-sm">  
  <div class="col-sm">  
    <img src={redhat} alt =""  width="397" height="258" />
  </div>
  </div>
  <div class="col-sm">  
    <img src={techdata} alt =""  width="397" height="258" />
  </div>
  <div class="col-sm">

  </div>

</div>
</div>
</div>

  </>
  )
}

export default Home

