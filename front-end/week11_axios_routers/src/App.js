import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Employee from './components/Employee';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <div>
    <h1>Axios and Navigation</h1>
     <BrowserRouter>
     <nav>
       <Link to ="/home">Home</Link> |
       <Link to ="/about">Abou Ust</Link> |
       <Link to ="/contact">Contact Us</Link> |
       <Link to ="/employee">employees</Link>
      
     </nav>
     <Routes>
           <Route path='home' element={<Home/>} />
           <Route path='about' element={<AboutUs />} />
           <Route path ='contact' element={<Contact/>} />
           <Route path='employee' element={<Employee />} />
           <Route path ="/employeedetail/:empid" element={<EmployeeDetail/>}/>
           <Route path = 'more'>
           <Route path ='contact' element={<Contact/>} />
           <Route path='employee' element={<Employee />} />
           </Route>
         
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
