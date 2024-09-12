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


function App() {
  return (
    <>
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
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
