import {useState} from 'react'
import "./CodeVerification.css"
import {useNavigate} from 'react-router-dom'

function CodeVerification(){
    const navigate=useNavigate()
    return(
        <div  className="code-verification-main-content">
            <button id="forgot-password-back-button" onClick={()=>navigate("/forgot-password")}><span>⬅</span>Back</button>
            <br></br>
            <img src="./src/assets/Logo.png" id="logo"/>
            <div className="verify-code-content">
            <h1 style={{lineHeight:"0%",fontFamily:"Doppio One"}}>OTP Verification</h1>
            <p style={{lineHeight:"58%",fontFamily:"Doppio One",fontSize:"48"}}>Enter the verification code sent to your email address.</p>
            </div>
            <input className="code-input" type="number"></input>
            <input className="code-input" type="number"></input>
            <input className="code-input" type="number"></input>
            <input className="code-input" type="number"></input>
            <input className="code-input" type="number"></input>
            <br></br>
            <br></br>
            <button className="verify-code-button" onClick={()=>navigate("/reset-password")} style={{fontSize:"20px",fontFamily:"Doppio One",textAlign:"center"}}>Verify</button>
            <p style={{fontFamily:"Doppio One",fontSize:"48"}}>Did no receive code? <a>Resend</a></p>
        </div>
    )
}
export default CodeVerification;