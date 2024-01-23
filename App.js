import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paris from './components/Paris';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import BlogPage from './components/BlogPage';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Services from './components/Services';
import Packages from './components/Packages';
import Pages from './components/Pages';
import Destination from './components/Destination';
import About_us from './components/About_us';
import PackagesData from './components/PackagesData';
import Booking from './components/Booking';
import Flight from './components/Flight';
import Train from './components/Train';
import Payment from './components/Payment';
import Hotel from './components/Hotel';
import TravelGuides from './components/TravelGuides';
import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
function App()
{
  return(
<div>
  <div className="app">

  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about_us'element={<About_us/>}/>
    <Route path='/services'element={<Services/>}/>
    <Route path='/packages'element={<Packages/>}/>
    <Route path='/pages'element={<Pages/>}/>
    <Route path='/register'element={<Register/>}/>
    <Route path='/blogpage'element={<BlogPage/>}/>
    <Route path='/paris'element={<Paris/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/destination'element={<Destination/>}/>
    <Route path='/travelguide'element={<TravelGuides/>}/>
    
    <Route path='/flight'element={<Flight/>}/>
    <Route path='/booking'element={<Booking/>}/>
    <Route path='/payment'element={<Payment/>}/>
    <Route path='/train'element={<Train/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/reservation'element={<Reservation/>}/>
  
    <Route path='/footer'element={<Footer/>}/>
  
    </Routes>
    </BrowserRouter>
    
    </div>
</div>
  );
}
export default App;

