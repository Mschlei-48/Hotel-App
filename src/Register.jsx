import {useState} from "react"
import "./Register.css"
import {useNavigate} from 'react-router-dom'
// import { registerUser } from './firebase/firebaseAuth';
// import auth from './firebase/firebaseConfig';
import {useSelector,useDispatch} from 'react-redux'
import { signUp } from "./authReducer/auth"


function Register(){
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const dispatch=useDispatch()
    const handleRegister=(()=>{
        if(password===confirmPassword){
            dispatch(signUp(email,password))
            navigate("/login")
        }
        else if(password!==confirmPassword){
            alert("Password do not match")
        }
    })
    
    console.log("Pass:",password)
    console.log("Conf Pass:",confirmPassword)

    // const handleRegister=async()=>{
    //     try{
    //             await registerUser(email,password);
    //             alert("User Registered Successfully!");
    //             navigate("/login")
    //     }
    //     catch(e){
    //         console.error(e.message)
    //     }
    // };


    return(
        <div className="main-content">
            <div className="form">
            <img src="./src/assets/Logo.png" id="logo"/>  
            <h1>Create your account</h1>
                <br></br>
                <input name="email" type="email" placeholder="Enter Email Address" onChange={(event)=>setEmail(event.target.value)}></input>
                <br></br>
                <input name="password" type="password" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}></input>
                <br></br>
                <input name="conf-password" type="password" placeholder="Confirm Password" onChange={(event)=>setConfirmPassword(event.target.value)}></input>
                <br></br>
                <button className="submit-button" style={{fontSize:"25px",fontFamily:"Doppio One",textAlign:"center"}} onClick={()=>handleRegister()}>Register</button>
                <p style={{fontWeight:"bold"}}>Already have an account? <a  style={{cursor:"pointer"}} onClick={()=>navigate("/login")}>Login</a></p>
            </div>
        </div>
    )
}
export default Register;