import {createSlice} from '@reduxjs/toolkit'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebaseConfig'
import {useNavigate} from 'react-router-dom'

const auth=getAuth(app)
const navigate=useNavigate()
export const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:{
            email:"",
            password:""
        }
    },
    reducers:{
        signUp:(state,action)=>{
           createUserWithEmailAndPassword(auth,action.payload,action.payload).
            then(()=>{
                alert("Registered Successfully")
            })
            .catch((error)=>{
                console.log(error.message)
            })
        },
        signIn:(state,action)=>{
            signInWithEmailAndPassword(auth, action.payload, action.payload).then(()=>{
                alert("Logged In Successfully")
                navigate("/");
            }).catch((error)=>{
                console.log(error.message)
            });
        }
    }
})
export const {signUp,signIn}=authSlice.actions;

export default authSlice.reducer