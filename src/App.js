
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Footers from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Calender from './Page/Calender/Calender';
import Certification from './Page/Certification';
import Home from './Page/Home/Home';
import Training from './Page/Training/Training';

function App() {
  return (
    <div >
    <Router>
    <Navbar/>

      <Routes>  <Route  path='/' element ={<Home/>}/>
        <Route  path='/certification' element ={<Certification/>}/>
        <Route  path='/training' element ={<Training/>}/>
        <Route  path='/Calendar' element ={<Calender/>}/>
      </Routes>
      <Footers/>
    </Router>
    
    </div>
  );
}

export default App;
