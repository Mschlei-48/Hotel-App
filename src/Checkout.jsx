import React, { useState } from 'react';
import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate,useLocation } from "react-router-dom";
import {doc,setDoc,addDoc,collection} from "firebase/firestore"
import { db } from "./firebase/firebaseConfig";
import {AddToFireStrore} from './authReducer/BookingSlice.js'
import { useDispatch, useSelector } from "react-redux";




const Checkout = () => {
    // Push data to firestore after the person checks out
    // Add data to firestore
    // const AddToFireStrore=async (room)=>{
    //     await addDoc(collection(db,"Bookings"),{
    //     "Firstname":room.firstName,
    //     "Lastname":room.lastName,
    //     "Email":room.email,
    //     "Number":room.number,
    //     "Price":room.price,
    //     "roomCheckIn":room.roomCheckIn,
    //     "roomCheckOut":room.roomCheckOut,
    //     "specialRequests":room.specialRequest,
    //     "roomType":room.typeOfRoom,
    //     "Paid":"Yes"
    //     })
    // }
    const dispatchs=useDispatch()
    const {data,loading,error}=useSelector((state)=>state.booking)

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "146.06",
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            console.log(details)
            alert(`Transaction completed by ${name}`);
            room.paymentDetails=details
            AddToFireStrore(room,dispatchs)

        });
    }

    const location=useLocation()
    
    const room=location.state.state
    console.log("Checkout Info:",room)
    return (
        
        <div className="checkout">
            <div id="inside-div">
                <h1>Payment Details</h1>
            {isPending ? <p>LOADING...</p> : (
                <div>
                <label style={{lineHeight:"5rem"}}>Choose currency: </label>
                    <select value={currency} onChange={onCurrencyChange} style={{width:"40%",padding:"2%",fontWeight:"bold"}}>
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                    </select>
                    <PayPalButtons 
                        style={{ layout: "vertical",width:"10%"}}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </div>
            )}
            </div>
            {loading===true? (<h1>Loading...</h1>):(<></>)}
             {error&&(<h1>{error}</h1>)}
        </div>
    );
}

export default Checkout;