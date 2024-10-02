import {configureStore,combineReducers} from '@reduxjs/toolkit'
import authSlice from '../authReducer/auth'
import dbSlice from '../authReducer/dbSlice'
import AdminSlice from '../authReducer/AdminSlice'
import BookingSlice from '../authReducer/BookingSlice'
import bookRoomSlice from '../authReducer/bookRoomSlice'
import  profSlice  from '../authReducer/profileSlice'



const rootReducer=combineReducers({
    authentication:authSlice,
    db:dbSlice,
    admin:AdminSlice,
    booking:BookingSlice,
    book:bookRoomSlice,
    prof:profSlice,
})

export const store=configureStore({
    reducer:rootReducer
})