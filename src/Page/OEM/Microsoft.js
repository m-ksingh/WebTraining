import React, { useState } from 'react';
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import DevelopmentUrl from "../../data/api";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../Component/LoadingSpinner/LoadingSpinner";
import "../../Component/Css/Home.css";
import "../../Component/Css/Certification.css";
import instructor from "../../Assets/Image/instructor.png";
import schedule from "../../Assets/Image/timetable.png";
import lifetime from "../../Assets/Image/lifetime.png";
import configuration from "../../Assets/Image/configuration.png";
import ibm from "../../Assets/Image/microsoft.png"
import pdf from "../../Assets/pdf/Microsoft.pdf"

const Microsoft = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [trainingfor1, setTrainingfor1] = useState(false);
    const [trainingfor2, setTrainingfor2] = useState(false);
    const [trainingfor3, setTrainingfor3] = useState(false);
    const [message, setMessage] = useState('');
    const [modalMessage, setModalMessage] = useState("");
    const [err, setErr] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const validate = (name, value) => {
      const phone = /^[0-9]{10}$/;
      const fullname = /^[a-zA-Z\s]*$/;
      const email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
      switch (name) {
        case "fullname":
          if (!value || value.trim() === "") {
            setErr({ fullname: "Full Name is required" });
          } else if (!fullname.test(value)) {
            setErr({ fullname: "Only letters allowed" });
          } else {
            setErr("");
          }
          break;
        case "email":
          if (!value || value.trim() === "") {
            setErr({ email: "Email is required" });
          } else if (!email.test(value)) {
            setErr({ email: "Enter valid email" });
          } else {
            setErr("");
          }
          break;
        case "phone":
          if (!value || value.trim() === "") {
            setErr({ phone: "Phone Number is required" });
          } else if (!phone.test(value)) {
            setErr({ phone: "Enter valid phone number" });
          } else {
            setErr("");
          }
          break;
        case "message":
          if (!value || value.trim() === "") {
            setErr({ message: "Message is required" });
          } else {
            setErr("");
          }
          break;
        default: {
          return "";
        }
      }
    };
  
    const fullnameHandle = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const validateResult = validate(name, value);
      if (!validateResult) {
        setFullname(value);
      }
      setFullname(value);
    }
    const emailHandle = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const validateResult = validate(name, value);
      if (!validateResult) {
        setEmail(value);
      }
    }
    const phonenoHandle = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const validateResult = validate(name, value);
      if (!validateResult) {
        setPhone(value);
      }
    }
    const trainingHandler1 = (e) => {
  
      if (trainingfor1 !== false) {
        setTrainingfor1(false)
      } else {
        setTrainingfor1(e.target.name);
      }
  
    }
    const trainingHandler2 = (e) => {
      if (trainingfor2 !== false) {
        setTrainingfor2(false)
      } else {
        setTrainingfor2(e.target.name);
      }
    }
    const trainingHandler3 = (e) => {
      if (trainingfor3 !== false) {
        setTrainingfor3(false)
      } else {
        setTrainingfor3(e.target.name);
      }
    }
  
    const messageHandle = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const validateResult = validate(name, value);
      if (!validateResult) {
        setMessage(value);
      }
    }
    const EnquiryForm = async (e) => {
  
      e.preventDefault();
      if (fullname.length === 0 || err.fullname != null) {
        setErr({ submit1: "Enter valid Full Name" });
      } else if (email.length === 0 || err.email != null) {
        setErr({ submit2: "Enter Valid Email" });
      } else if (phone.length === 0 || err.phone != null) {
        setErr({ submit3: "Enter valid Phone Number" });
      } else if (trainingfor1 === false && trainingfor2 === false && trainingfor3 === false) {
        setErr({ submit4: "Choose atleast one training category" });
      } else if (message.length === 0 || err.message != null) {
        setErr({ submit5: "Enter valid message" });
      }
  
      else {
        setIsLoading(true);
        const form = {
          fullname: fullname,
          email: email,
          phone: phone,
          trainingfor: {
            individual: trainingfor1,
            group: trainingfor2,
            corporate: trainingfor3
          },
          message: message,
          title: "AWS Certification"
        }
  
        await axios.post(DevelopmentUrl + '/sents', form)
          .then(res => {
            console.log(res.data);
  
            setFullname('');
            setEmail('');
            setPhone('');
            setTrainingfor1(false);
            setTrainingfor2(false);
            setTrainingfor3(false);
            setMessage('');
            setIsLoading(false);
            setModalMessage("We have successfully received your query. We will get back to you in two working days");
  
          })
          .catch(err => console.error("YO YOU GOT AN ERROR IN AXIOS ", err))
      }
  
    }
  return (
    <>
    <div class="p-5  bg-image bckgroundcertificate">
            <div class="mask" >
              <div class="container-fluid">
                <div class="row p-5">
                  <div class="col-sm-4 p-5 ">
                    <img
                      src={ibm}
                      className="imgbanner"
                      alt="course"
                    />
                    <button type="button" class=" enquirybutton" data-toggle="modal" data-target=".bd-example-modal-lg">Enquire Now</button>
                  </div>
                  <div class="col-sm-8 py-5 text-white ">
                    <h4 className='cname'>Microsoft Authorized Training</h4>
                    <p className='pt-4 cname'>As a training company with many resources, Alchemy Solutions has gained Microsoft's Gold Partnership for our continued support of IT training and hardware requirements. Bangalore is the location of our corporate office, and we also have locations in Hyderabad, Chennai, Mumbai, Gurgaon, and Noida. Our dedication to excellence has made us India's leading training vendor, and we also offer our clients top-notch training facilities.
                    </p>
                    <hr />
                  
                   
                  </div>
                </div>
              </div>
            </div>
    
          </div>
          <div className='container my-5 '>
      <div class="card p-5 ">
     <div className='row'>
    <div className='col-9'>
        <h4 >Microsoft OEM Offerings</h4>
    <h6>The Following pdf contains all the Microsoft Certification course details offered.</h6>
    </div>
    <div className='col-3'>
    <button type="button"  style={{textTransform: "none",
    background: "#00BEFF 0% 0% no-repeat padding-box",
    borderRadius: "9px",
    
    color: "white",
    fontFamily: "Poppins" ,
    fontSize: "20px",
    padding:"10px ",
    
    border: "none"}}><a href={pdf} target="_blank">View Details</a></button>
    </div>
    
     </div>
      
    </div>
      </div>
    
          <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h6 class="modal-title" id="exampleModalLabel">Please submit your query, we will get back to you!</h6>
                  <h3 type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setModalMessage('')}>
                    <span aria-hidden="true">&times;</span>
                  </h3>
                </div>
                <div class="modal-body">
                  <form>
                    <div className='row'>
                      <div class="form-group col-sm-4 ">
                        <label for="recipient-name" class="col-form-label">Full Name:</label>
                        <input type="text" class="form-control" id="recipient-name" name="fullname" value={fullname} style={{ background: "#E7EEF0", border: "1px solid #18566B" }} onChange={fullnameHandle} />
                        {err.fullname != null ? (
                          <p style={{ color: "red", fontSize: "11px" }}>{err.fullname}</p>
                        ) : (
                          ""
                        )}
                        {err.submit1 != null ? (
                          <p style={{ color: "red", fontSize: "11px" }}>{err.submit1}</p>
                        ) : ''
                        }
                      </div>
                      <div class="form-group col-sm-4">
                        <label for="recipient-name" class="col-form-label">Email:</label>
                        <input type="text" class="form-control" id="recipient-name" name="email" value={email} style={{ background: "#E7EEF0", border: "1px solid #18566B" }} onChange={emailHandle} />
                        {err.email != null ? (
                          <p style={{ color: "red", fontSize: "11px" }}>{err.email}</p>
                        ) : (
                          ""
                        )}
                        {err.submit2 != null ? (
                          <p style={{ color: "red", fontSize: "11px" }}>{err.submit2}</p>
                        ) : ''
                        }
                      </div>
                      <div class="form-group col-sm-4">
                        <label for="recipient-name" class="col-form-label">Phone Number:</label>
                        <input type="text" class="form-control" id="recipient-name" name="phone" value={phone} style={{ background: "#E7EEF0", border: "1px solid #18566B" }} onChange={phonenoHandle} />
                        {err.phone != null ? (
                          <p style={{ color: "red", fontSize: "11px" }}>{err.phone}</p>
                        ) : (
                          ""
                        )}
                        {err.submit3 != null ? (
                          <p style={{ color: "red", fontSize: "11px" }}>{err.submit3}</p>
                        ) : ''
                        }
                      </div>
                    </div>
                    <div class=" row  " >
                      <div className='col-sm-3'>
                        <label className=' col-form-label'>Training For :</label>
                      </div>
                      <div className='form-group col-sm-3 '>
    
                        <label class="checkbox-inline col-form-label " >
                          <input name="Individual" type="checkbox" checked={trainingfor1} onChange={trainingHandler1} /><span>&nbsp;&nbsp;&nbsp;</span> Individual
                        </label>
                      </div>
                      <div className='form-group col-sm-3'>
                        <label class="checkbox-inline col-form-label">
                          <input name="Group" type="checkbox" checked={trainingfor2} onChange={trainingHandler2} /><span>&nbsp;&nbsp;&nbsp;</span> Group
                        </label>
                      </div>
                      <div className='form-group col-sm-3'>
                        <label class="checkbox-inline col-form-label">
                          <input name="Corporate" type="checkbox" checked={trainingfor3} onChange={trainingHandler3} /> <span>&nbsp;&nbsp;&nbsp;</span> Corporate
                        </label>
                      </div>
                      {err.submit4 !== null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>{err.submit4}</p>
                      ) : ''
                      }
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text" name="message" value={message} style={{ background: "#E7EEF0", border: "1px solid #18566B" }} onChange={messageHandle}></textarea>
                      {err.message != null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>{err.message}</p>
                      ) : (
                        ""
                      )}
                      {err.submit5 != null ? (
                        <p style={{ color: "red", fontSize: "11px" }}>{err.submit5}</p>
                      ) : ''
                      }
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  {isLoading ? <LoadingSpinner /> : <h6 class="modal-title " style={{ color: "#1266f1" }}>{modalMessage}</h6>}
    
                  <button type="button" class="btn " onClick={EnquiryForm} disabled={isLoading}>Submit</button>
    
                </div>
              </div>
            </div>
          </div>
        </>
  )
}

export default Microsoft