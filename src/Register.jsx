import {useState} from "react"
import "./Register.css"
import {useNavigate} from 'react-router-dom'
// import { registerUser } from './firebase/firebaseAuth';
// import auth from './firebase/firebaseConfig';
import {useSelector,useDispatch} from 'react-redux'
import { signUp } from "./authReducer/auth"
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase/firebaseConfig.js'


function Register(){
    
    const auth=getAuth(app)
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    const dispatch=useDispatch()
    const handleRegister=(()=>{
        if(password===confirmPassword){
            createUserWithEmailAndPassword(auth,email,password).
            then(()=>{
                alert("Registered Successfully")
                dispatch(signUp({"email":email,"password":password}))
                navigate("/login")
            })
            .catch((error)=>{
                console.log(error.message)
                if(error.message.includes("invalid-email")){
                    alert("Invalid Email, please enter valid email")
                }
                else if(error.message.includes("weak-password")){
                    alert("Invalid password, password should at last be 6 characters")
                }
            })
        }
        else if(password!==confirmPassword){
            alert("Password do not match")
        }
    })
    
    // const users =useSelector(state=>state.user);
    // console.log(users)
    // // console.log("Pass:",password)
    // // console.log("Conf Pass:",confirmPassword)

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