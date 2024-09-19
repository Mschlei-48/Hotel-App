import {createSlice} from '@reduxjs/toolkit'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,updatePassword,sendEmailVerification} from 'firebase/auth'
import app from '../firebase/firebaseConfig'
import {useNavigate} from 'react-router-dom'

const auth=getAuth(app)

export const authSlice=createSlice({
    name:"auth", 
    initialState:{
        user:{
            email:"",
            password:"",
        isLoggedIn:false
        }
    },
    reducers:{
        signUp:(state,action)=>{
            // console.log(action.payload)
            state.user.email=action.payload.email
            state.user.password=action.payload.password
        },
        signIn:(state,action)=>{
            state.user.email=action.payload.email
            state.user.password=action.payload.email
        }
    }
})

export const {signUp,signIn}=authSlice.actions;
export default authSlice.reducer