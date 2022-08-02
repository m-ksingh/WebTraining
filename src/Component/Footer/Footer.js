import React from 'react'
import alchemylogo from "../../Assets/Image/Alchemy Solutions - Logo.png";
import "../Css/Footer.css"

function Footers() {
  return (
    <div>
      <footer class="text-center text-lg-start bg-color text-muted pb-5 ">
        <section
          class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                <img src={alchemylogo} height="40" alt="alchemy solution" />
                <p>
                  <a href="/certification" class="text-reset">Certifications</a>
                </p>
              </div>
              <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Location
                </h6>
                <p>
                  <a href="#" class="text-reset">Bangalore</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Chennai</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Mumbai</a>
                </p>
                <p>
                  <a href="#" class="text-reset">Hyderabad</a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  Contact Info
                </h6>
                <p className='address'><i class="fas fa-home me-3"></i> 984, Crown Towers 80ft Road, Koramangala 4th Block,
                  S T Bed Area, Bengaluru, Karnataka 560034</p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  training@alchemysolutions.net
                </p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4" style={{ backgroundcolor: "#ECECEC" }}>
          © 2022 Copyright:
          <a class="text-reset fw-bold" href="">Alchemy Solutions</a>
        </div>
      </footer>
    </div>
  )
}

export default Footers