
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Footers from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Certification from './Page/Certification';
import Course from './Page/Course/index';
import Home from './Page/Home/Home';

function App() {
  return (
    <div >
    <Router>
    <Navbar/>

      <Routes>  <Route  path='/' element ={<Home/>}/>
        <Route  path='/certification' element ={<Certification/>}/>
        <Route  path='/Courses' element ={<Course/>}/>
      </Routes>
      <Footers/>
    </Router>
    
    </div>
  );
}

export default App;
