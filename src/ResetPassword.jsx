import {useState} from 'react'
import './ResetPassword.css'
import {useNavigate} from 'react-router-dom'

function ResetPassword(){
    const navigate=useNavigate()
    return(
        <div className="reset-password-main-content">
            <button id="forgot-password-back-button" onClick={()=>navigate("/verify-code")}><span>⬅</span>Back</button>
            <br></br>
            <img src="./src/assets/Logo.png" id="logo"/>
            <div className="reset-password-form">
                <h1 style={{lineHeight:"0%",fontFamily:"Doppio One"}}>Create New Password</h1>
                <p style={{fontFamily:"Doppio One",fontSize:"53"}}>Your new password must be unique from the one previously used.</p>
                <label for="new-password"><h2>New Password</h2></label>
                <input placeholder="Enter New Password" name="new-password" className="reset-password-input"></input>
                <label for="conf-new-password"><h2>New Password</h2></label>
                <input placeholder="Confirm New Password" name="conf-new-password" className="reset-password-input"></input>
                <br></br>
                <br></br>
            </div>
            <button id="reset-password-button" onClick={()=>navigate("/login")}>Reset Password</button>
        </div>
    )
}
export default ResetPassword;