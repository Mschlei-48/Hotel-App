import {useState} from 'react'
import "./Register.css"
import {useNavigate,useLocation} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { signIn } from './authReducer/auth'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase/firebaseConfig.js'


function Login(){
    const auth=getAuth(app)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const dispatch=useDispatch()
    // const users =useSelector(state=>state.user);
    // console.log("Login users:",users)
    
    const handleLogin=async (e)=>{
        await signInWithEmailAndPassword(auth,email,password).
        then(()=>{
            alert("User signed in successfully")
            dispatch(signIn({"email":email,"passsword":password}))
            // localStorage.setItem("user",{"email":email,"password":password})
            if(email==="admin@gmail.com"){
                navigate("/admin")
            }
            else{
                navigate("/home")
            }

        }).
        catch((error)=>{
            console.log("Error is:",error.message)
            if(error.message.includes("invalid-email")){
                alert("User not registered, please register")
            }
        })
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
                
                <p style={{fontWeight:"bold",display: "flex", justifyContent: "center", alignItems: "center"}}>Do not have an account? <a  style={{cursor:"pointer",marginLeft:"5px",marginBottom:"7px"}} onClick={()=>navigate("/")}>Register</a></p>
            </div>
            </div>
        </div>
    )
}
export default Login;