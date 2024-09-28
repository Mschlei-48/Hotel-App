import { createSlice } from "@reduxjs/toolkit";
import {doc,setDoc,addDoc,collection,getDocs} from "firebase/firestore"
import { db } from "../firebase/firebaseConfig";

const initialState={
    data:[],
    loading:false,
    error:null
}

export const bookSlice=createSlice({
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

export const { setLoading, setData, setError } = bookSlice.actions

export default bookSlice.reducer


// export const fetchDataFirestore=async(dispatch)=>{
//     dispatch(setLoading())
//     try{
//         const docSnap = await getDocs(collection(db,"Profile"));
//         if (docSnap.docs.length>0) {
//             const data=docSnap.docs.map((doc)=>({
//                 id: doc.id,
//                 ...doc.data(),
//             }));
//             dispatch(setData(data));
//           console.log("Document data:", docSnap.docs);
//         } else {
//           console.log("No such document!");
//         }
//     }
//     catch(error){
//         dispatch(setError(error.message));
//     }

//   }




export const fetchDataFirestore = async (dispatch, email) => {
    // Ensure email is provided and valid (optional)
    if (!email || !email.trim()) {
      dispatch(setError("Please enter a valid email address."));
      return;
    }
  
    dispatch(setLoading());
  
    try {
      // Create a query to filter by email field (assuming "email" field exists)
      const query = query(collection(db, "Profile"), where("email", "==", email));
      const querySnapshot = await getDocs(query);
  
      if (!querySnapshot.empty) {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        dispatch(setData(data));
      } else {
        console.log("No document found for the provided email address.");
      }
    } catch (error) {
      dispatch(setError(error.message));
      console.error("Error fetching data:", error);
    }
  };