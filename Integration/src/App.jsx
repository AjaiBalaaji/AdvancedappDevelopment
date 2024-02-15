// import { useState } from 'react'
import './App.css'
// import './Hello'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import NavbarU from './Components/NavbarU';
import Footer from './Components/Footer';
import Events from './Components/Events';
import Adminaddevents from './Components/AdminAddevent';
import AdminviewEvents from './Pages/AdminviewEvents';
import AdminBookings from './Pages/AdminBookings';
import UserBookingevent from './Pages/UserBookingevent';
import HomeUser from './Components/Homeuser';
import UserAllevents from './Pages/UserAllevents'
import LandingPage from './Pages/LandingPage'
import AdminLogin from './Components/AdminLogin'
import MyBookings from './Pages/MyBookings';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
// import Dummy from './Pages/Dummy'

function App() {
  

  return (
    <>
      <div>
         <BrowserRouter>
        
          <Routes>
            <Route path="/Login"element={<Login/>}/>
            <Route path="/Signup"element={<Signup/>}/>
            <Route path="/Home"element={<Home/>}/>
            <Route path="/Events"element={<Events/>}/>
            <Route path="/AdminAddevent"element={<Adminaddevents/>}/>
            <Route path="/AdminviewEvents"element={<AdminviewEvents/>}/>
            <Route path="/AdminBookings"element={<AdminBookings/>}/>
            <Route path="/UserBookingevent"element={<UserBookingevent/>}/>
            <Route path="/HomeUser"element={<HomeUser/>}/>
            <Route path="/UserAllevents"element={<UserAllevents/>}/>
            <Route path="/"element={<LandingPage/>}/>
            <Route path="/AdminLogin"element={<AdminLogin/>}/>
            <Route path="/MyBookings"element={<MyBookings/>}/>
            {/* <Route path="/"element={<Dummy/>}/> */}

          </Routes>
        
        </BrowserRouter> 
        {/* <Dummy/> */}
      </div>
    </>
  )
}

export default App
