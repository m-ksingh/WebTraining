import React from 'react'
import "../../Component/Css/Home.css"
import "../../Component/Css/Certification.css"
import certimg from "../../Assets/Image/cert.png"

function Certification() {
    return (
        <>   <div class="p-5  bg-image bckgroundcertificate">
            <div class="mask" style={{ backgroundcolor: " rgba(0, 0, 0, 0.6)" }}>
          


            <div class="container-fluid"> 
  <div class="row p-5">
  <div class="col-sm-4 p-5 ">
    <img
  src={certimg}
  
  alt="Hollywood Sign on The Hill"
/>
<button type="button" class=" enquirybutton">Enrol Now</button>
    </div>
    <div class="col-sm-8 p-5 text-white ">
        <h4>AWS Certification Training Course for Solutions Architect</h4>
        <p>Our AWS training is the first AWS course certified by NASSCOM and it aligns with industry standards. This AWS Certification course includes SAA-C02 & C01 to help you clear AWS Solutions Architect Certification exam. Learn AWS skills while working on multiple case studies, projects, and master building highly scalable, and fault-tolerant applications.</p>
        
         </div>
    
  </div>
  </div>
</div>



            </div>
    {/* Calender */}
    <div className='text-center'  >
<h4 class="my-3 training">Training Calendar</h4>
</div>
<div className='trainingcalender'>
<div class="row">
  <div class="col-sm-3">
  <div class="card text-white trainingcard mb-3" style={{maxwidth:"18rem" }}>
  <div class="card-header">
   <div style={{display:"flex"}}>
   <span><i class="far fa-calendar"></i></span>
    &nbsp;
     July 11 -21 
     <h6 style={{marginLeft:"80px"}}> <i class="fas fa-circle"></i> &nbsp;online </h6>
   </div>
  
  </div>
  <div class="card-body">
    {/* <h5 class="card-title">Primary card title</h5> */}
    <p class="card-text">
    <div style={{display:"flex"}}>
    <span><i class="far fa-clock"></i></span>&nbsp;
       8:30 AM - 10:30 AM
       <h6 style={{marginLeft:"15px"}}>INR 29,995</h6>
       </div>
        </p>
  </div>
</div>
  </div>
  <div class="col-sm-3">
  <div class="card text-white trainingcard  mb-3" style={{maxwidth:"18rem" }}>
  <div class="card-header">
   <div style={{display:"flex"}}>
   <span><i class="far fa-calendar"></i></span>
    &nbsp; July 11 -21 
     <h6 style={{marginLeft:"80px"}}><i class="fas fa-circle"></i> &nbsp;online </h6>
   </div>
  
  </div>
  <div class="card-body">
    {/* <h5 class="card-title">Primary card title</h5> */}
    <p class="card-text">
    <div style={{display:"flex"}}>
    <span><i class="far fa-clock"></i></span>&nbsp;
       11:30 AM - 1:30 PM
       <h6 style={{marginLeft:"15px"}}>INR 29,995</h6>
       </div>
        </p>
  </div>
</div>
  </div>
  <div class="col-sm-3">
  <div class="card text-white trainingcard  mb-3" style={{maxwidth:"18rem" }}>
  <div class="card-header">
   <div style={{display:"flex"}}>
   <span><i class="far fa-calendar"></i></span>
    &nbsp;
     July 11 -21 
     <h6 style={{marginLeft:"80px"}}> <i class="fas fa-circle"></i> &nbsp;online </h6>
   </div>
  
  </div>
  <div class="card-body">
    {/* <h5 class="card-title">Primary card title</h5> */}
    <p class="card-text">
    <div style={{display:"flex"}}>
<span><i class="far fa-clock"></i></span>&nbsp; 2:30 PM - 4:30 PM
       <h6 style={{marginLeft:"20px"}}>INR 29,995</h6>
       </div>
        </p>
  </div>
</div>
  </div>
  <div class="col-sm-3">
  <div class="card text-white trainingcard  mb-3" style={{maxwidth:"18rem" }}>
  <div class="card-header">
   <div style={{display:"flex"}}>
   <span><i class="far fa-calendar"></i></span>
    &nbsp;
     July 11 -21 
     <h6 style={{marginLeft:"80px"}}> <i class="fas fa-circle"></i> &nbsp;online </h6>
   </div>
  
  </div>
  <div class="card-body">
    {/* <h5 class="card-title">Primary card title</h5> */}
    <p class="card-text">
       <div style={{display:"flex"}}>
       <span><i class="far fa-clock"></i></span>&nbsp;
       5:30 PM - 7:30 PM
       <h6 style={{marginLeft:"20px"}}>INR 29,995</h6>
       </div>
        </p>
  </div>
</div>
  </div>
</div>
</div>


            {/* Tab */}
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#curriculum" type="button" role="tab" aria-controls="profile" aria-selected="false">Curriculum</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#fee" type="button" role="tab" aria-controls="profile" aria-selected="false">Fees</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#FAQ" type="button" role="tab" aria-controls="contact" aria-selected="false">FAQs</button>
                </li>
            </ul>
            <div class="tab-content content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                    <div >


                        <p className='tab1pargraph' >In this comprehensive AWS certification course led by industry experts, you will learn skills such as AWS Elastic Cloud Compute, Simple Storage Service, VPC, Aurora database service, Load Balancing, Auto Scaling, AWS S3, etc. This AWS training will also prepare you for the AWS Solutions Architect certification exam.</p>

                        <h6 className='headingpragraph'>What will you learn in the online AWS training?</h6>
                        <p className='tab1pargraph'>The following are the learning outcomes of this AWS Solutions Architect Associate course:</p>

                        <p className='tab1pargraph'>- Efficient design and deployment of the AWS system <br />
                            - Cost-evaluation and cost-control mechanisms <br />
                            - Elastic Load Balancing on multiple EC2 instances <br />
                            - Data ingress and egress on AWS <br />
                            - Identifying relevant and suitable uses of AWS architecture <br />
                            - Lift and shift mechanism of AWS on-premises applications <br />
                            - Finding the right solutions based on computational, database, and security needs <br />
                            - And of course, be AWS Solutions Architect exam ready! </p>

                        <h6 className='headingpragraph'>What are the advantages of this AWS certification course?</h6>
                        <p className='tab1pargraph'>Our AWS certification and training program is designed to help you master the AWS Cloud from basics and pass the AWS exam on your first try. You can build a successful career in AWS with our well-designed course, which gives you access to our extensive AWS community, lifetime access to course materials with upgrades, and more.</p>

                        <h6 className='headingpragraph'>What are the prerequisites for taking up AWS training and certification?</h6>
                        <p className='tab1pargraph'>Although there are no prerequisites for this AWS Cloud training, basic knowledge of any programming language and prior experience in cloud computing platforms will be beneficial.</p>


                        <h6 className='headingpragraph'>Why should you go for this AWS course?</h6>


                        <p className='tab1pargraph'>- AWS has over 1 million customers from 190 countries - Amazon<br />
                            - AWS is as big as its next four competitors combined - Business Insider <br />
                            - An AWS Certified Solutions Architect can earn US$1,27,884 a year - Glassdoor</p>

                        <h6 className='headingpragraph'>Which jobs can I get with AWS certification?</h6>
                        <p className='tab1pargraph'>You can apply for numerous jobs once you gain an AWS certification, depending on the certification you have opted for. Some of the most sought-after AWS job roles are listed below:</p>

                        <p className='tab1pargraph'>- AWS Certified Solutions Architect <br />
                            - AWS Data Architect<br />
                            - AWS Data Engineer <br />
                            - AWS SysOps Associate<br />
                            - Cloud Security Architect <br />
                            - AWS Certified DevOps Engineer <br />
                            - Cloud DevOps Architect  <br />
                            - AWS Developer <br />
                            - AWS Systems Administrator</p>

                    </div>


                </div>





                <div class="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="profile-tab">
                    <h6 className='headingpragraph'>Module 01 - Introduction to Cloud Computing & AWS</h6>
                    <p className='tab1pargraph'>1.1 - What is Cloud Computing <br />
                        1.2 - Cloud Service & Deployment Models<br />

                        1.3 - How AWS is the leader in the cloud domain<br />
                        1.4 - Various cloud computing products offered by AWS <br />
                        1.5 - Introduction to AWS S3, EC2, VPC, EBS, ELB, AMI <br />
                        1.6 - AWS architecture and the AWS Management Console, virtualization in AWS (Xen hypervisor) <br />
                        1.7 - What is auto-scaling 1.8 - AWS EC2 best practices and cost involved
                    </p>
                    <hr />
                    <h6 className='headingpragraph'>Module 02 - Elastic Compute and Storage Volumes</h6>
                    <p className='tab1pargraph'>2.1 - Introduction to EC2 <br />
                        2.2 - Regions & Availability Zones (AZs)
                        <br />

                        2.3 - Pre-EC2, EC2 instance types<br />
                        2.4 - Comparing Public IP and Elastic IP <br />
                        2.5 - Demonstrating how to launch an AWS EC2 instance<br />
                        2.6 - Introduction to AMIs, Creating and Copying an AMI  <br />
                        2.7 - Introduction to EBS <br />
                        2.8 - EBS volume types <br />
                        2.9 - EBS Snapshots <br />
                        2.10 - Introduction to EFS <br />
                        2.11 - Instance tenancy- Reserved and Spot instances <br />
                        2.12 - Pricing and Design Patterns. <br />
                    </p>

                    <h6 className='headingpragraph'>Hands-on Exercise</h6>
                    <p className='tab1pargraph'>   1. Launching an EC2 instance <br />
                        2. Creating an AMI of the launched instance<br />

                        3. Copying the AMI to another region<br />
                        4. Creating an EBS volume<br />
                        5. Attaching the EBS volume with an instance <br />
                        6. Taking backup of an EBS volume <br />
                        7. Creating an EFS volume and mounting the EFS volume to two instances
                    </p>
                    <hr />

                    <h6 className='headingpragraph'>Module 03 - Load Balancing, Autoscaling, and DNS</h6>

                    <p className='tab1pargraph'> 3.1 - Introduction to Elastic Load Balancer <br />
                        3.2 - Types of ELB – Classic, Network, and Application <br />

                        3.3 - Load balancer architecture<br />
                        3.4 - Cross-zone load balancing <br />
                        3.5 - Introduction to Auto Scaling, vertical and horizontal scaling, the lifecycle of Auto Scaling<br />
                        3.6 - Components of Auto Scaling, scaling options and policy, instance termination   <br />
                        3.7 - Using load balancer with Auto Scaling <br />
                        3.8 - Pre-Route 53 – how DNS works <br />
                        3.9 - Routing policy, Route 53 terminologies, Pricing. <br />

                    </p>
                    <h6 className='headingpragraph'>Hands-on Exercise</h6>
                    <p className='tab1pargraph'>  1. Creating a Classic ELB <br />
                        2. Creating an Application ELB<br />

                        3. Creating an auto-scaling group<br />
                        4. Configuring an auto-scaling group<br />
                        5. Integrating ELB with Auto Scaling <br />
                        6. Redirect traffic from domain name to ELB using Route 53. <br />
                    </p>
                    <hr />

                    <h6 className='headingpragraph'>Module 04 - Virtual Private Cloud</h6>

                    <p className='tab1pargraph'> 4.1 - What is Amazon VPC <br />
                        4.2 - VPC as a networking layer for EC2 <br />

                        4.3 - IP address and CIDR notations<br />
                        4.4 - Components of VPC – network interfaces, route tables, internet gateway, NAT <br />
                        4.5 - Security in VPC – security groups and NACL, types of VPC, what is a subnet, VPC peering with scenarios, VPC endpoints, VPC pricing, and design patterns
                    </p>
                    <h6 className='headingpragraph'>Hands-on Exercise</h6>
                    <p className='tab1pargraph'>1. Creating a VPC and subnets<br />
                        2. Creating a 3 Tier architecture with security groups<br />

                        3. NACL, Internet gateway , and NAT gateway<br />
                        4. Creating a complete VPC architecture.<br />

                    </p>
                    <hr />

                </div>
                <div class="tab-pane fade" id="fee" role="tabpanel" aria-labelledby="contact-tab">
                    hello
                    </div>
                <div class="tab-pane fade" id="FAQ" role="tabpanel" aria-labelledby="contact-tab">

                    <h6 className='headingpragraph'>Why should I join this AWS Architect certification course at Alchemy?</h6>
                    <p className='tab1pargraph'>Our AWS training gives you hands-on experience in working with the top-notch Amazon Web Services platform that is used by some of the biggest corporations in the world. You can master the concepts of AWS cloud infrastructure, and Software as a Service, and learn how to design, plan and scale the AWS platform as per the best practices. This entire course content is in line with the requirements for clearing the AWS Certification Solutions Architect exam. You will be working on real-time AWS projects and step-by-step assignments that have high relevance in the corporate world, and the curriculum is designed by industry experts. Upon the completion of the AWS Cloud certification course, you can apply for some of the best jobs in top MNCs around the world at top salaries. Alchemy offers lifetime access to videos, course materials, 24/7 support, and course material upgrading to the latest version at no extra fee. Hence, it is clearly a one-time investment.</p>


                    <h6 className='headingpragraph'>What are AWS certifications?</h6>
                    <p className='tab1pargraph'>Amazon Web Services certifications are among the most popular IT certifications today. These certifications help to validate your cloud expertise level of Amazon Web Services. IT professionals opt for this certification to showcase their technical knowledge and skills of the cloud. AWS offers a range of certifications for distinct professions, job roles, and position levels.</p>

                    <h6 className='headingpragraph'>Do I need to know how to code?</h6>
                    <p className='tab1pargraph'>No, it is not mandatory to have coding knowledge to start learning AWS. Although, you will need some basic scripting and programming knowledge as you reach the final modules.</p>

                    <h6 className='headingpragraph'>Are AWS certifications difficult?</h6>
                    <p className='tab1pargraph'>The questions included in the AWS certification exams are set to challenge all those taking the exams to apply everything that they know, especially the practical implementations of all the services provided by the cloud provider. The exams are designed in such a way that only those with hands-on experience will be able to crack them without difficulty. Alchemy’s practical approach to learning and hands-on industry-based projects are the best ways to get prepared for the AWS Solutions Architect exams.</p>


                    <h6 className='headingpragraph'>What are the various benefits of AWS certification for corporate and IT professionals?</h6>
                    <p className='tab1pargraph'>AWS certification is a globally recognized way for corporate and IT professionals to validate their technical skills. The certification proves that they have the skills and knowledge required to design, deploy, and operate the applications and infrastructure on AWS. Upskilling will increase employability and validate one’s expertise. Some employers only consider a candidate who has the relevant certifications. Certified individuals can also demand higher salaries. Certification enables IT professionals to explore different career paths. AWS-certified employees are able to troubleshoot problems, complete projects faster, and be more productive. Certified professionals also receive invitations to exclusive events and get access to the AWS-certified LinkedIn community and the AWS Certification lounges at AWS.</p>

                </div>
            </div>

        </>
    )
}

export default Certification