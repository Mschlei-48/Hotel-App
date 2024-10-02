import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const initialState = {
  data: {"Email":null,"Number":null,"Name":null,profile:null,"Gender":null,"hobbies":[],"profession":null,"Age":null}
}

export const profSlice = createSlice({
  name: "prof",
  initialState,
  reducers: {
      setData(state, action) {
        console.log("Data in state:",action.payload)
        state.data.Email = action.payload.Email;
        state.data.Number = action.payload.Number;
        state.data.Name = action.payload.Name;
        state.data.profile = action.payload.profile;
        state.data.Gender=action.payload.Gender;
        state.data.hobbies=action.payload.hobbies,
        state.data.profession=action.payload.profession
        state.data.Age=action.payload.Age
      }
  },
})

// Action creators are generated for each case reducer function
export const { setData} = profSlice.actions

export default profSlice.reducer