import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Register'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from "./Layout"
import ForgotPassword from './ForgotPassword'
import CodeVerification from "./CodeVerification.jsx"
import ResetPassword from './ResetPassword.jsx'
import Home from './Home.jsx'
import Rooms from "./Rooms-Page.jsx"
import Room from './Room.jsx'
import BookRoom from './BookRoom.jsx'
import Payment from './Payment.jsx'
import Reservations from './Reservations.jsx'
import AboutUs from './AboutUs.jsx'
import ContactUs from './ContactUs.jsx'
import Checkout from './Checkout.jsx'
import Admin from './Admin.jsx'
import Profile from "./Profile.jsx"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



function App() {

  const initialOptions = {
    clientId: "AZEjeI-wI5dhBJs6bpQ6YmYm-kTb7Jctk3iP_UoJVesBxi5Okfsq7ZFKQQQ9ZSHvrf4WI-U6Taf_MG08",
    currency: "USD",
    intent: "capture",
    };

  return (
    <>
    <PayPalScriptProvider options={initialOptions}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="forgot-password" element={<ForgotPassword/>}/>
      <Route path="verify-code" element={<CodeVerification/>}/>
      <Route path="reset-password" element={<ResetPassword/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="rooms" element={<Rooms/>}/>
      <Route path="room" element={<Room/>}/>
      <Route path="book-room" element={<BookRoom/>}/>
      {/* <Route path="payment" element={<Payment/>}/> */}
      <Route path="reservations" element={<Reservations/>}/>
      <Route path="about-us" element={<AboutUs/>}/>
      <Route path="contact-us" element={<ContactUs/>}/>
      <Route path="payment" element={<Checkout/>}/>
      <Route path="admin" element={<Admin/>}/>
      <Route path="profile" element={<Profile/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </PayPalScriptProvider>
    </>
  )
}

export default App
