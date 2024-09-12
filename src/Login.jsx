import {useState} from 'react'
import "./Register.css"
import {useNavigate} from 'react-router-dom'

function Login(){
    const navigate=useNavigate()
    return(
        <div className="main-content">
            <div className="form">
            <img src="./src/assets/Logo.png"  id="logo"/> 
            <div className="greeting">
            {/* <p style={{fontWeight:"bold"}}>Serene: Escape, Relax, Rejuvenate.</p> */}
            <h1 style={{lineHeight:"0"}} >Hello,</h1>
            <h1 style={{lineHeight:"0"}}>Welcome Back</h1>
            </div> 
                <br></br>
                <input name="email" type="email" placeholder="Enter Email Address"></input>
                <br></br>
                <input name="password" type="password" placeholder="Enter Password"></input>
                <a style={{marginLeft:"40%",cursor:"pointer"}} onClick={()=>navigate("/forgot-password")}>Forgot password?</a>
                <br></br>
                <button className="submit-button" style={{fontSize:"25px",fontFamily:"Doppio One",textAlign:"center"}} onClick={()=>navigate("/home")}>Login</button>
                
                <p style={{fontWeight:"bold"}}>Do not have an account? <a onClick={()=>navigate("/")} style={{cursor:"pointer"}}>Register</a></p>
            </div>
        </div>
    )
}
export default Login;