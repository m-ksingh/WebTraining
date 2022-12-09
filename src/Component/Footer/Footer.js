import React, {useState} from 'react'
import alchemylogo from "../../Assets/Image/Alchemy Solutions - Logo.png";
import pdf from "../../Assets/Image/abc.pdf";
import "../Css/Footer.css"
import { Helmet } from 'react-helmet';

function Footers() {
  const [isShown, setIsShown] = useState(true);
  const [isShowndubai, setIsShowndubai] = useState(false);
  const [isShownsingapur, setIsShownsingapur] = useState(false);
  const [isShownus, setIsShownus] = useState(false);

  const handleClick = event => {
  
    setIsShown(current => !current);
    setIsShowndubai(false)
    setIsShownsingapur(false)
    setIsShownus(false)


  };

  const handleClickus = event => {

    setIsShownus(current => !current);
    setIsShown(false)
    setIsShownsingapur(false)
    setIsShowndubai(false)
   
  };
  const handleClickdubai = event => {
    
    setIsShowndubai(current => !current);
    setIsShown(false)
    setIsShownsingapur(false)
    setIsShownus(false)
 
  };
  const handleClicksingapur = event => {

    setIsShownsingapur(current => !current);
    setIsShown(false)
    setIsShowndubai(false)
    setIsShownus(false)
   
  };
  return (
    
    <div>
      <footer class="text-center text-lg-start bg-color text-muted pb-5 ">
        <section
          class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div >
            <a href="https://www.facebook.com/profile.php?id=100063712260777" target="_blank" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
          
            <a href="https://www.linkedin.com/company/alchemy-solutions-pvt-ltd/" target="_blank" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
           
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <img src={alchemylogo} height="40" alt="alchemy solution" />
                <p>
                <a href="/testimonial">Testimonial</a>
          
                </p>
                <p>
                <a href="/hire-Train-Deploy">Hire train & Deploy</a>
          
                </p>
                <p><a href="/cloud-Lab">Cloud labs</a></p>
               <p><a href={pdf} target="_blank">Courses</a></p>
              </div>
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Location
                </h6>
                <p>
              
                  <div onMouseEnter={handleClick}  class="text-reset" style={{cursor:"pointer"}}>Bangalore</div>
                </p>
                <p>
                  <div onMouseEnter={handleClickus}  class="text-reset" style={{cursor:"pointer"}} >US</div>
                </p>
                <p>
                  <div onMouseEnter={handleClickdubai}   class="text-reset" style={{cursor:"pointer"}}>Dubai </div>
                </p>
                <p>
                  <div onMouseEnter={handleClicksingapur} class="text-reset" style={{cursor:"pointer"}}>Singapore </div>
                </p>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                  Mailing Address
                </h6>
                {/* <p>
                  <i class="fas fa-phone me-3"></i>
                  9901031200 , 9844108533
                </p> */}
              <p>
                  <i class="fas fa-envelope me-3"></i>
                  training@alchemysolutions.net
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  jaya@alchemysolutions.net
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  gyanendra@alchemysolutions.net
                </p>

               
              </div>



              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Contact Info
                </h6>
                
                  {isShown && (
        <p className='address'><i class="fas fa-home me-3"></i> 984, Crown Towers 80ft Road, Koramangala 4th Block,
        S T Bed Area, Bengaluru, Karnataka 560034</p>
      )}

{isShownus && (
        <p className='address'>ALCHEMY SOFTWARE SOLUTIONS LLC
        <br/>
        <hr/>
        <i class="fas fa-home me-3"></i> 1000 N, West Street, Suite 1200
         
        Wilmington, Delaware 19801, USA</p>
      )}
              {isShowndubai && (
           
        <p className='address'> ALC SOFTWARE SOLUTIONS
        <br/>
        <hr/>
        <i class="fas fa-home me-3"></i>Office No. 25, Iris Bay Tower, 21st Floor office, # (2105-2108), Business Bay,Dubai, UAE</p>
      )}
              {isShownsingapur && (
        <p className='address'>ALCHEMY SOLUTIONS PTE LTD.<br/>
        <hr/>
        <i class="fas fa-home me-3"></i>10, ANSON ROAD,
        # 10-11, INTERNATIONAL PLAZA
        SINGAPORE 079903</p>
      )}
               
              </div>

             
            </div>
          </div>
        </section>
        <hr/>
        <div class="text-center p-4" style={{ backgroundcolor: "#ECECEC" }}>
          © 2022 Copyright:
          <a class="text-reset fw-bold" href="">Alchemy Solutions</a>
        </div>
      </footer>
    </div>
  )
}

export default Footers
