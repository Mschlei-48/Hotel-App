import {configureStore,combineReducers} from '@reduxjs/toolkit'
import authSlice from '../authReducer/auth'
import dbSlice from '../authReducer/dbSlice'


const rootReducer=combineReducers({
    authentication:authSlice,
    db:dbSlice,
})

export const store=configureStore({
    reducer:rootReducer
})