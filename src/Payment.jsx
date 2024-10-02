import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import "./Payment.css";


function Payment() {
    const navigate=useNavigate()
    const location=useLocation()
    
    const room=location.state.state
    console.log("Room:",room)

    const [cardHolderName,setCardHolderName]=useState("")
    const [cardNumber,setCardNumber]=useState("")
    const [cardExpiry,setCardExpiry]=useState("")
    const [cvc,setCvc]=useState("")


    // Chnage seconds and milliseconds to format Wed, 12/09/24
    function formatFirebaseTimestamp(seconds, nanoseconds) {
      const timestamp = seconds * 1000 + Math.floor(nanoseconds / 1000000);
      const date = new Date(timestamp);
      const options = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
      return date.toLocaleDateString('en-US', options).replace(',', '');
  }


  const handleNavData=(()=>{

    room.cardHolderName=cardHolderName;
    room.cardNUmber=cardNumber;
    room.cardExpiry=cardExpiry;
    room.cvc=cvc;
    navigate("/reservations",{
      state:{
        room
      }
    })
  })
  return (
    <div className="payment-main-content">
      {/* NavBar */}
      <div className="nav-bar">
        <div className="nav-bar-content">
          <img id="home-logo" src="./src/assets/Logo2.png" />
          <ul className="nav-ul">
            <li className="nav-li">
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
                onClick={() => navigate("/home")}
              >
                Home
              </button>
            </li>
            <li className="nav-li">
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
                onClick={() => navigate("/rooms")}
              >
                Rooms
              </button>
            </li>
            <li className="nav-li">
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
              >
                Reservations
              </button>
            </li>
            <li className="nav-li">
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
                onClick={()=>navigate("/about-us")}>
                About Us
              </button>
            </li>
            <li className="nav-li">
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
              >
                Contact Us
              </button>
            </li>
            <li>
            <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
                onClick={()=>handleProfileNav()}
              >
                Profile
              </button>
            </li>
            <li className="nav-li">
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
                onClick={() => navigate("/login")}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <h1 className="h1-text" style={{ color: "white" }}>
        Complete Booking!!
        </h1>
      </div>

      {/* Bookimg Deatails and Paymant Form */}
      <div className="booking-details-and-payment-form">
        <div className="payment-booking-details">
        <h2>Booking Details</h2>
          <div
            className="Payment-Booking-Details"
          >
            <div className="Payment-Booking-Details-Col-1">
              <h4>Facilities</h4>
              <p><span>📶</span>{room.Wifi? (<span>Free Wifi</span>):(<span>No Wifi</span>)}</p>
                    <p><span>📺</span>{room.Television? (<span>Television</span>):(<span>No Television</span>)}</p>
                    <p><span>🐕</span>{room.petFriendly? (<span>Pet-Friendly</span>):(<span>No Pets</span>)}</p>
                    <p><span>🏊‍♀️</span>{room.indoorPool? (<span>Indoor Pool</span>):(<span>No Pool</span>)}</p>
                    <p><span>💪</span>Indoor Gym</p>
                    <p><span>🚿</span>{room.numberOfBathrooms}bathroom(s)</p>
                    <p><span>🧑‍🤝‍🧑</span>{room.numberOfBeds} bed(s)</p>
            </div>
            <div className="Payment-Booking-Details-Col-2">
              <h4>Cancellation Fee</h4>
              <p>R153.32</p>
              <h4>Room Availabilty:</h4>
              <p>Check-in {room.roomCheckIn.formattedDate}</p>
              <p>Check-out {room.roomCheckOut.formattedDate}</p>
              <h4>Price per night:</h4>
              <p>R{room.price}</p>
            </div>
          </div>
        </div>
        <div className="payment-details">
          <h2>Payment Details</h2>
          <h4>Card Type</h4>
          <div className="card-type-img">
            <img
                className="cards"
                src="./src/assets/mastercard.jpg"
                alt="No Image to Display"
            />
            <img
                className="cards"
                src="./src/assets/visacard.jpg"
                alt="No Image to Display"
            />
          </div>

          <div className="payment-form">
            <h4>Card holder's name</h4>
            <input className="payment-input" type="text" onChange={(event)=>setCardHolderName(event.target.value)}></input>
            <h4>Card number</h4>
            <input className="payment-input" type="text" onChange={(event)=>setCardNumber(event.target.value)}></input>
            <div>
              <h4>Expiry date</h4>
              <input className="payment-input"type="text" placeholder="MM/YY" onChange={(event)=>setCardExpiry(event.target.value)}></input>
              <h4>CVC</h4>
              <input className="payment-input" type="text" onChange={(event)=>setCvc(event.target.value)}></input>
            </div>
          </div>
          <div>
            <br></br>
            <button className="complete-booking-button" onClick={()=>handleNavData()}>
              <span>🔒</span>Complete Booking
            </button>
          </div>
        </div>
      </div>
      <div className="footer-main-content">
        <div className="footer">
          <div>
            <img
              src="./src/assets/Logo2.png"
              alt="No image to display"
              style={{ width: "50%", lineHeight: "0%" }}
            />
          </div>
          <br></br>
          <div className="details">
            <ul
              style={{
                color: "white",
                columns: "3",
                textAlign: "start",
                listStyle: "none",
                padding: "0",
                marginTop: "8%",
              }}
            >
              <li style={{ fontSize: "16px", fontWeight: "bold" }}>
                Physical Address
              </li>
              <br></br>
              <li>1911 Daliwe Location</li>
              <li>Cathcart</li>
              <li>5310</li>
              <li>South Africa</li>

              <li style={{ fontSize: "16px", fontWeight: "bold" }}>
                Postal Address
              </li>
              <br></br>
              <li>1911 Daliwe Location</li>
              <li>Cathcart</li>
              <li>5310</li>
              <li>South Africa</li>

              <li style={{ fontSize: "16px", fontWeight: "bold" }}>
                Contact Details
              </li>
              <br></br>
              <li>
                <span style={{ color: "white" }}>☏</span>+27 73 894 7110
              </li>
              <li>
                <span>✉️</span>mishimakade48@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "black",
            paddingTop: "2%",
            paddingBottom: "1%",
            width: "98.7vw",
          }}
        >
          <p style={{ color: "white", fontSize: "12px" }}>
            &copy; 2024 Serene Hotel, 1911 Cathcart
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
