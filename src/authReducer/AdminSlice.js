import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const initialState={
    data:[],
    loading:false,
    error:null
}

export const AdminSlice=createSlice({
    name:"admin",
    initialState,
    reducers:{
        setLoading(state){
            state.loading=true;
            state.error=null;
        },
        setError(state,action){
            state.error=action.payload;
            state.loading=false;
        },
        setData(state,action){
            state.data=action.payload;
            state.loading=false;
        }
    }
})

export const { setLoading, setData, setError } = AdminSlice.actions

export default AdminSlice.reducer

