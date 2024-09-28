import {useState} from "react"
import "./Register.css"
import {useNavigate} from 'react-router-dom'
// import { registerUser } from './firebase/firebaseAuth';
// import auth from './firebase/firebaseConfig';
import {useSelector,useDispatch} from 'react-redux'
import { signUp } from "./authReducer/auth"
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase/firebaseConfig.js'
import { db } from "./firebase/firebaseConfig";
import {doc,setDoc,addDoc,collection,getDocs} from "firebase/firestore"


function Register(){
    
    const auth=getAuth(app)
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const dispatch=useDispatch()
    const handleRegister=(()=>{
            createUserWithEmailAndPassword(auth,email,password).
            then(()=>{
                alert("Registered Successfully")
                dispatch(signUp({"email":email,"password":password}))
                localStorage.setItem("user", JSON.stringify({"email": email, "password": password,"name":name,"number":number}));
                AddToFireStrore()
                navigate("/home")
            })
            .catch((error)=>{
                console.log(error.message)
                if(error.message.includes("invalid-email")){
                    alert("Invalid Email, please enter valid email")
                }
                else if(error.message.includes("weak-password")){
                    alert("Invalid password, password should at last be 6 characters")
                }
                else if(error.message.includes("email-already-in-use")){
                    alert("Email already in use")
                }
            })
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

    


    const AddToFireStrore=async ()=>{
        try{
            await addDoc(collection(db, "Profile"), {
                "Name": name,
                "Email": email,
                "Number": number,
                });
        }
        catch(error){
            console.error(error.message);
        }
    
    }


    return(
        <div className="main-content">
            <div className="form" style={{height:"80%",width:"35%"}}>
            <img src="./src/assets/Logo.png" id="logo" style={{width:"27%",height:"auto"}}/>  
            <h2>Create your account</h2>
                {/* <br></br> */}
                <input name="email" type="email" placeholder="Enter Email Address" onChange={(event)=>setEmail(event.target.value)}></input>
                {/* <br></br> */}
                <input name="password" type="password" placeholder="Enter Password" onChange={(event)=>setPassword(event.target.value)}></input>
                {/* <br></br> */}
                <input name="name" type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}></input>
                {/* <br></br> */}
                <input name="number" type="text" placeholder="Enter Number" onChange={(event)=>setNumber(event.target.value)}></input>
                {/* <br></br> */}
                <button className="submit-button" style={{fontSize:"25px",fontFamily:"Doppio One",textAlign:"center",height:"10%"}} onClick={()=>handleRegister()}>Register</button>
                <p style={{ fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>
                Already have an account? 
                <a style={{ cursor: "pointer", marginLeft: "5px",marginBottom:"7px" }} onClick={() => { navigate("/login")}}>
                    Login
                </a>
                </p>
            </div>
        </div>
    )
}
export default Register;