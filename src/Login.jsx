import {useState} from 'react'
import "./Register.css"
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signIn } from './authReducer/auth'
// import loginUser from './src/firebase/firebaseAuth.js'
// import app from './src/firebase/firebaseConfig'

function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()

    
    const handleLogin=async (e)=>{
            dispatch(signIn(email,password)).then(()=>{
                alert("Logged In Successfully")
                navigate("/");
            }).catch((error)=>{
                console.log("Error is:",error.message)
            });
            
            // alert("User logged in successfully");
        }
    
    return(
        <div className="main-content">
            <div>
            <div className="form">
            <img src="./src/assets/Logo.png"  id="logo"/> 
            <div className="greeting">
            <h1 id="greet1" style={{lineHeight:"0"}} >Hello,</h1>
            <h1 id="greet2" style={{lineHeight:"0"}}>Welcome Back</h1>
            </div> 
                <br></br>
                <input name="email" type="email" placeholder="Enter Email Address" onChange={(event)=>setEmail(event.target.value)}></input>
                <br></br>
                <input name="password" type="password" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}></input>
                <a style={{marginLeft:"40%",cursor:"pointer"}} onClick={()=>navigate("/forgot-password")}>Forgot password?</a>
                <br></br>
                <button className="submit-button" style={{fontSize:"25px",fontFamily:"Doppio One",textAlign:"center"}} onClick={()=>handleLogin()}>Login</button>
                
                <p style={{fontWeight:"bold"}}>Do not have an account? <a  style={{cursor:"pointer"}}>Register</a></p>
            </div>
            </div>
        </div>
    )
}
export default Login;