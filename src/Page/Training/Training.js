import React from 'react'
import "../../Component/Css/Training.css"
import hireTrain from "../../Assets/Image/Website Image-01.webp"
import htdp1 from "../../Assets/Image/htdddd.png"
import htd from "../../Assets/Image/htd.png";
import infograph from "../../Assets/Image/Infographics-02.png";

const Training = () => {
 
  return (
    <>
    
      <div class="p-5  bg-image TrainingBanner">
        <div class="mask" >

         

          
        </div>
      </div>


      <div className='text-center pb-5' style={{ background: "#E7EEF0" }} >
        <h4 class=" WeareTraining pt-4 ">TRAINING METHODOLOGY</h4>

        <p className='Training ' >&#x2022; At Alchemy, we are aware that the best way to serve the needs of both our clients and applicants is through a genuine consultative approach. While providing comprehensive, shrewd, value-added recruitment and consulting services, we collaborate with our clients to fully understand their organisational difficulties and commercial objectives. Our service models are in fact created to be as adaptable and agile as possible by utilising our knowledge of the vastness of the technical landscape across all of our clients.</p>

        <p className='Training ' >&#x2022; A joint effort between Alchemy and our clients results in the development of an end-to-end, personalised training plan for specialised technology. In our approach, we work to understand the technical needs and working environment of our clients. The end result is not only a tailored training programme, but also a tailored recruitment strategy to assist our clients in finding the best candidates across seniority, local language proficiency requirements, and cultural fit.</p>

        <p className='Training ' >&#x2022; Our delivery strategy for the Hire. Train. Deploy programme works in tandem with our dedication to being customer-centric, ensuring that every action we take is intended to enhance both the learning curve of our recruits and their good interaction with us.</p>
      </div>
      <div className='text-center ' >
      
        <h4 class=" pt-1  ">
          <img class="img-fluid" src ={hireTrain} alt="hire" />
        </h4>
     </div>


      <div className='text-center pb-2 ' >
        <h4 class=" pt-2  ">
          <img class="img-fluid" src ={htd} alt="Hire & Train" />
        </h4>
        {/* <h4 class=" pt-3 pb-3 htdmethod ">HTD PROGRAM</h4> */}
    <div class="container mt-3  ">
    <div class="row ">
    <div class="col-sm ">
    <div class="card ">
      {/* <img src={htd} class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title" style={{color:"#EFA47F"}}>Hire</h5>
        <p class="card-text">After completing their classroom training, the trainees will begin their on-the-job training. During this time, a senior consultant from our firm will assist the trainee with any technical questions they may have.</p>
      </div>
    </div>
  </div>
  
  <div class="col-sm mb-4 ">
    <div class="card">
      {/* <img src={htd} class="card-img-top" alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title" style={{color:"#EFA47F"}}>Train</h5>
        <p class="card-text">The chosen candidates will receive training for 4-6 weeks. According to the needs of the client or the project, this training is tailored.
Guidance and mentoring throughout the programme.

</p>
<p></p>

      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card ">
      {/* <img src ={htd}class="card-img-top " alt="..."/> */}
      <div class="card-body">
        <h5 class="card-title" style={{color:"#EFA47F"}}>Deploy</h5>
        <p class="card-text">Our recruitment team conducts various levels of interviews with Alchemy and the customer to find and hire local grads and mid-level experienced professionals.
      
        </p>
        <p></p>
      
      </div>
    </div>
  </div>
 
</div>
    </div>
</div>

<div className='text-center  bc' >
<h4 class=" pt-3   ">HTD Process</h4>
        <h4 class=" pt-1  ">
          <img class="img-fluid" src ={infograph}  alt="Testimonial" />
        </h4>
     </div>


      {/* <div className=' pb-3 mb-1 bb'  >
        <h6 class=" weare pt-5 pb-5 text-center ">Trainer Pool Strength & Capabilities</h6>
        <div class="container">
          <div class="row">
            <div class="col mb-4">
              <div class="card">
                <div class="card-header  cards-button">
                  EMERGING SKILLS
                </div>

                <div class="card-body trainig-scroll" >
                <h5 class="card-title">Big Data : </h5>
                  <p class="card-text">
                  Hadoop, HortonWorks, Cloudera, MongoDB, Couchbase, Cassandra, Solr, 
Mongo DB, Elastic Search, Apache Spark, Data Science, KAFKA, Data Analytics
                  </p>
                  <hr/>
                  <h5 class="card-title">BUSINESS
INTELLIGENCE : </h5>
                  <p class="card-text">
                  Tableau, Informatica, BI, Teradata, Qlikview, Pentaho, IBM Cognos
                  </p>
                  <hr/>

                  <h5 class="card-title">DEVOPS : </h5>
                  <p class="card-text">
                  Using Puppet &Chef, Ansibleworks, Jenkins, GIT HUB etc
                  </p>
                  <hr/>

                  <h5 class="card-title">CLOUD : </h5>
                  <p class="card-text">
                  Amazon, Azure, Openstack, Salesforce, IBM Bluemix
                  </p>
                  <hr/>
                  <h5 class="card-title">SOA : </h5>
                  <p class="card-text">
                  Mule,Fuse,Architec
                  </p>
                  <hr/>
                  <h5 class="card-title">App.Server: </h5> 

                  <p class="card-text">
                  JBoss, MQ Messaging, Oracle Weblogic
                  </p>
                  <hr/>
                  <h5 class="card-title">App.Server: </h5> 

                  <p class="card-text">
                  JBoss, MQ Messaging, Oracle Weblogic
                  </p>
                  <hr/>
                  <h5 class="card-title">MOM :  </h5> 

                  <p class="card-text">
                  Camel,Jenkins,Active MQ
                  </p>
                  <hr/>
                  <h5 class="card-title">JS: 
 </h5> 

                  <p class="card-text">
                  Node JS, REACTJS, Angular
                  </p>
                  <hr/>
                  <h5 class="card-title">SAP Hybris |
Service Now |
Extended Reality (AR &VR)   </h5> 

                
                  <hr/>
                  
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <div class="card-header cards-button">
                  Freshers across the Globe
                </div>

                <div class="card-body trainig-scroll" >
                <h5 class="card-title">Languages 
and Tools : </h5>
                  <p class="card-text">
                  C, C++, VC++, ATL/COM, JAVA, VB, ASP, PL/SQL, .Net
                  </p>
                  <hr/>
                  <h5 class="card-title">Software 
Frameworks : </h5>
                  <p class="card-text">
                  J2EE, .NET, Struts, Hibernate, Eclipse, Open source
                  </p>
                  <hr/>

                  <h5 class="card-title">Architecture : </h5>
                  <p class="card-text">
                  Web Services, iLog jRules, Service Oriented Architecture, 
Datawarehousing Architecture
                  </p>
                  <hr/>

                  <h5 class="card-title">Middleware/App 
Servers : </h5>
                  <p class="card-text">
                  Web Sphere, Web logic, BizTalk, SharePoint, MQ Series, 
Web Methods
                  </p>
                  <hr/>
                  <h5 class="card-title">ERP/CRM : </h5>
                  <p class="card-text">
                  SAP, ETL, PeopleSoft, Oracle Applications, Siebel
                  </p>
                  <hr/>
                  <h5 class="card-title">Data warehousing/
Reporting : </h5> 

                  <p class="card-text">
                  Teradata, Informatica, Oracle, SQL Server, Cognos, Actuate
                  </p>
                  <hr/>
                  <h5 class="card-title">Database 
Administration : </h5> 

                  <p class="card-text">
                  Oracle, SQL Server, DB2, Informix, Veritas NetBackup
                  </p>
                  <hr/>
                  <h5 class="card-title">Administration :  </h5> 

                  <p class="card-text">
                  UNIX-AIX, HP, Solaris; LINUX; Siteminder; Business 
Continuity Processes (BCP)
                  </p>
                  <hr/>
                  <h5 class="card-title">Quality 
Assurance : 
 </h5> 

                  <p class="card-text">
                  Mercury and Rational Technologies 

                  </p>
                  <hr/>
                

                  
                </div>
              </div>
            </div>
          </div>
        </div>




      </div> */}

      <div className='text-center  bb' >
      <h4 class=" pt-3 pb-3  ">Overview - Highlights</h4>
        <h4 class=" pt-1  ">
          <img class="img-fluid" src ={htdp1}  alt="Testimonial" />
        </h4>
     </div>
      <hr />
    </>
  )
}

export default Training