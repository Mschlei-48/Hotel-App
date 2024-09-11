import {useState} from "react"
import "./Register.css"
import {useNavigate} from 'react-router-dom'


function Register(){
    const navigate=useNavigate()
    return(
        <div className="main-content">
            <div className="form">
            <img src="./src/assets/Logo.png" id="logo"/>  
            <h1>Create your account</h1>
                <br></br>
                <input name="email" type="email" placeholder="Enter Email Address"></input>
                <br></br>
                <input name="password" type="password" placeholder="Enter Password"></input>
                <br></br>
                <input name="conf-password" type="password" placeholder="Confirm Password"></input>
                <br></br>
                <button className="submit-button" style={{fontSize:"25px",fontFamily:"Doppio One",textAlign:"center"}}>Register</button>
                <p style={{fontWeight:"bold"}}>Already have an account? <a onClick={()=>navigate("login")} style={{cursor:"pointer"}}>Login</a></p>
            </div>
        </div>
    )
}
export default Register;