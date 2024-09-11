import {useState} from 'react'
import "./ForgotPassword.css"
import {useNavigate} from 'react-router-dom'

function ForgotPassword(){
    const navigate=useNavigate()
    return(
        <div className="forgot-password-main-content">
            <div id="logo--button-content">
                <button id="forgot-password-back-button" onClick={()=>navigate("/login")}><span>⬅</span>Back</button>
                <br></br>
                <img src="./src/assets/Logo.png" id="logo"/>
            </div>
            <div id="forgot-password-form">
                <h1 style={{lineHeight:"0%"}}>Forgot Password?</h1>
                <p style={{lineHeight:"0%",fontFamily:"Dhyana",fontSize:"48"}}>Dont worry, it happens. Enter the email address linked to</p> 
                <p style={{lineHeight:"0%",fontFamily:"Dhyana",fontSize:"48"}}>your account below, and a codes will be sent.</p>

                <label for="email"><h2>Email</h2></label>
                <input placeholder="Enter Email Address" name="email" id="forgot-password-input"></input>
                <br></br>
            </div>
            <button id="send-code-button" onClick={()=>navigate("/verify-code")} style={{fontSize:"20px",fontFamily:"Doppio One",textAlign:"center"}}>Send Code</button>
        </div>
    )
}
export default ForgotPassword;