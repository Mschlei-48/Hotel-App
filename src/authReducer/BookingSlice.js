import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, doc,addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


const initialState={
    data:[],
    loading:false,
    error:null
}

export const BookingSlice=createSlice({
    name:"booking",
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

export const { setLoading, setData, setError } = BookingSlice.actions

export default BookingSlice.reducer


export const AddToFireStrore=async (room,dispatch)=>{
    dispatch(setLoading())
    try{
        await addDoc(collection(db, "Bookings"), {
            "Firstname": room.firstName,
            "Lastname": room.lastName,
            "Email": room.email,
            "Number": room.number,
            "Price": room.price,
            "roomCheckIn": room.roomCheckIn,
            "roomCheckOut": room.roomCheckOut,
            "specialRequests": room.specialRequest,
            "roomType": room.typeOfRoom,
            "Paid": "Yes"
            });
        dispatch(setData({
            "Firstname":room.firstName,
            "Lastname":room.lastName,
            "Email":room.email,
            "Number":room.number,
            "Price":room.price,
            "roomCheckIn":room.roomCheckIn,
            "roomCheckOut":room.roomCheckOut,
            "specialRequests":room.specialRequest,
            "roomType":room.typeOfRoom,
            "Paid":"Yes"
            }));
    }
    catch(error){
        dispatch(setError(error.message));
    }

}