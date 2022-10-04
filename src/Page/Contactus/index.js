import React from 'react'

const Contactus = () => {
  return (
    <>
<div className='contactusmain' >
        <form className='contactus'>
          <h1 class="text-white text-center"style={{color:"white"}}>Contact Us</h1>
          <p className='text-center'style={{color:"white"}}>Please take a moment to get in touch, we will get back to you shortly.</p>

          <div class="column">
            <label for="the-name" style={{color:"white",fontSize: "15px",
    fontWeight: "500"}}>Your Name</label>
            <input type="text" name="name" id="the-name" required />

            <label for="the-email"style={{color:"white"}}>Email Address</label>
            <input type="email" name="email" id="the-email" required />

            <label for="the-phone"style={{color:"white"}}>Phone Number</label>
            <input type="text" pattern="[6789][0-9]{9}" title="Please enter valid phone number" name="phone" id="the-phone" required />
          </div>
          <div class="column">
            <label for="the-message"style={{color:"white"}}>Message</label>
            <textarea name="message" id="the-message" required></textarea>
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contactus