import React,{useState} from 'react';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Footers from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Page404 from './Component/Page404/Page404';

import CloudLab from './Page/CloudLab';
import Contentdevlopment from './Page/Contentdevlopment/Contentdevlopment';
import Course from './Page/Course/index';
import SearchCourse from './Page/Course/SearchCources';
import EventsGallery from './Page/Events';
import Partnerevent from './Page/Events/Partnerevent';
import Home from './Page/Home/Home';
import Aws from './Page/OEM/Aws';
import Citrix from './Page/OEM/Citrix';
import Ibmoem from './Page/OEM/Ibm';
import Informatica from './Page/OEM/Informatica';
import Infra from './Page/OEM/ItInfra/Infra';
import Microsoft from './Page/OEM/Microsoft';
import Oemoffering from './Page/OEM/Oemoffering';
import Redhat from './Page/OEM/Redhat';
import Vmware from './Page/OEM/Vmware';
import OpenHouse from './Page/Opnhouse/OpenHouse';
import Training from './Page/Training/Training';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <div >
      {!loading && (
    <Router>
    <Navbar/>

      <Routes> 
         <Route  path='/' element ={<Home/>}/>
        {/* <Route  path='/certification' element ={<Certification/>}/> */}
        <Route  path='/Courses' element ={<SearchCourse/>}/>
        <Route  path='/oem/:oemtitle' element ={<Oemoffering/>}/>
        <Route  path='/certificate/:certificatetitle' element ={<Course/>}/>
        <Route  path='/hire-Train-Deploy' element ={<Training/>}/>
        <Route path ="/cloud-Lab" element = {<CloudLab/>}/>
        <Route  path='/content-Development' element ={<Contentdevlopment/>}/>
        <Route path ="/event" element ={<EventsGallery/>}/>
        <Route path ="/event-partner" element ={<Partnerevent/>}/>
        <Route path ="/open-house" element ={<OpenHouse/>}/>
        <Route path ="/oem/ibm" element ={<Ibmoem/>}/>
        <Route path ="/oem/microsoft" element ={<Microsoft/>}/>
        <Route path ="/oem/redhat" element ={<Redhat/>}/>
        <Route path ="/oem/citrix" element ={<Citrix/>}/>
        <Route path ="/oem/aws" element ={<Aws/>}/>
        <Route path ="/oem/vmware" element ={<Vmware/>}/>
        <Route path ="/oem/informatica" element ={<Informatica/>}/>
        <Route path ="/infra" element ={<Infra/>}/>
        <Route path="/*" element ={<Page404/>}/>
      </Routes>
      <Footers/>
    </Router>
      )}
    </div>
  );
}

export default App;
