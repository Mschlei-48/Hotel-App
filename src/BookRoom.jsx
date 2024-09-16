import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookRoom.css";

function BookRoom() {
  const navigate = useNavigate();
  return (
    <div className="Book-Room-Main-Content">
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
              >
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
          Get the best deals at Serene Hotel!!
        </h1>
      </div>
      {/* RoomImages */}
      {/* <div
        className="bookroom-img-container"
        style={{ backgroundColor: "white" }}
      >
        <div>
          <img
            src="./src/assets/room1.jpeg"
            alt="No Image to Display"
            id="bookroom-img"
          />
        </div>
        <div className="bookimgs-room">
          <div>
            <img src="./src/assets/bathroom.jpg" className="bookroom-imgs" />
          </div>
          <div>
            <img src="./src/assets/view1.jpg" className="bookroom-imgs" />
          </div>
        </div>
      </div> */}

      {/* Booking Details and Booking Form */}
      <div className="Booking-Details-and-Booking-Form">
        <div className="Booking-Details" style={{ backgroundColor: "white" }}>
          <div className="Booking-Details-Col-1">
            <h4>Facilities</h4>
            <p>
              <span>📶</span>Free Wifi
            </p>
            <p>
              <span>📺</span>Television
            </p>
            <p>
              <span>🐕</span>Pet-Friendly
            </p>
            <p>
              <span>🏊‍♀️</span>Indoor Pool
            </p>
            <p>
              <span>💪</span>Indoor Gym
            </p>
            <h4>Stay-length:</h4>
            <p>1 night</p>
            <h4>You selected</h4>
            <p>1 room, 3 guests</p>
          </div>
          <div className="Booking-Details-Col-2">
            <h4 style={{marginTop:"0"}}>Cancellation Fee</h4>
            <p>R153.32</p>
            <h4
            >
              Room Availabilty:
            </h4>
            <p
            >
              From-Wed, 2/09/2024
            </p>
            <p
              
            >
              To-Thur, 3/09/2024
            </p>
            <h4
            >
              Price per night:
            </h4>
            <p

            >
              R450
            </p>
          </div>
        </div>

        <div className="Booking-Form">
          <h2>Enter your details</h2>
          <div className="Booking-Form-Cols">
            <div className="Booking-Form-Col1">
              <label for="name">
                <h4>First Name:</h4>
              </label>
              <input className="booking-input" type="text" name="name"></input>
              <label for="email">
                <h4>Email:</h4>
              </label>
              <input className="booking-input" type="email"></input>
              <label for="requests">
                <h4>Special Requests:</h4>
              </label>
              <textarea name="requests"></textarea>
            </div>
            <div className="Booking-Form-Col2">
              <label for="lastname">
                <h4>Last Name:</h4>
              </label>
              <input className="booking-input" type="text" name="lastname"></input>
              <label for="number">
                <h4>Phone Number:</h4>
              </label>
              <input className="booking-input" type="text" name="number"></input>
              <h4>Free pick-up?</h4>
              <label  className="pick-up-label" for="pickup-yes"><h5 className="pick-up-heading">Yes</h5></label>
              <input type="radio" value="Yes" name="pickup-yes" />
              {/* <br></br> */}
              <label  className="pick-up-label" for="pickup-no"><h5 className="pick-up-heading">No</h5></label>
              <input type="radio" value="No" name="pickup-no"></input>
            </div>
          </div>
          <div className="Rules">
            <h4>Review House Rules</h4>
            <p>
              Your host would like you to agree to the following house rules:
            </p>
            <ul>
              <li>No smoking</li>
              <li>No parties/events</li>
              <li>Quiet hours are between 22:00 and 07:00</li>
              <li>Pets are not allowed</li>
            </ul>
            <p>
              By continuing to the next step, you are agreeing to these house
              rules.
            </p>
          </div>
        </div>
      </div>
      <div className="final-details-container">
        <button className="final-details-button" onClick={()=>navigate("/payment")}>Next: Final Details<span>→</span></button>
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
        <div style={{backgroundColor:"black",paddingTop:"2%",paddingBottom:"1%",width:"98.7vw"}}>
          <p style={{ color: "white", fontSize: "12px" }}>
            &copy; 2024 Serene Hotel, 1911 Cathcart
          </p>
        </div>
      </div>

    </div>
  );
}
export default BookRoom;
