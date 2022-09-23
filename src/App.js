import React,{useState} from 'react';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Footers from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Certification from './Page/Certification';
import CloudLab from './Page/CloudLab';
import Course from './Page/Course/index';
import Home from './Page/Home/Home';
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
        <Route  path='/Courses' element ={<Course/>}/>
        <Route  path='/oem/:oemtitle' element ={<Course/>}/>
        <Route  path='/certificate/:certificatetitle' element ={<Course/>}/>
        <Route  path='/hire-Train-Deploy' element ={<Training/>}/>
        <Route path ="/cloud-Lab" element = {<CloudLab/>}/>
      </Routes>
      <Footers/>
    </Router>
      )}
    </div>
  );
}

export default App;
