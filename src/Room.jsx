import { useState } from "react";
import "./Room.css";
import {useNavigate} from 'react-router-dom'

function Room() {
    const navigate=useNavigate()
  return (
    <div className="room-main-content">
        <div className="nav-bar">
        <div className="nav-bar-content">
          <img
          id="home-logo"
            src="./src/assets/Logo2.png"
          />
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
        <h1 className="h1-text" style={{ color: "white" }}>Get the best deals at Serene Hotel!!</h1>
      </div>
        

      {/* Room Content (Images)*/}
      <div className="room-img-container" style={{backgroundColor:"white"}}>
                <div>
                    <img src="./src/assets/room1.jpeg" alt="No Image to Display" id="room-img"/>
                </div>
                <div className="imgs-room">
                  <div>
                  <img src="./src/assets/bathroom.jpg" className="room-imgs"/>
                  </div>
                    <div>
                    <img src="./src/assets/view1.jpg" className="room-imgs"/>
                    </div>
                    
                </div>
      </div>
      {/* Room Content (Information)*/}
      <div className="room-info-container">
        <div className="about-the-room-container">
                <h2>About the Room</h2>
                <p>
                A queen room typically features a spacious queen-sized bed with
                 plush bedding, offering a perfect balance of comfort and elegance. 
                </p>
                <p>
                The room is designed with modern or classic decor, often including stylish 
                furniture like a work desk, a cozy chair, and a wardrobe. Amenities may 
                include a flat-screen TV, complimentary Wi-Fi, a minibar, and a coffee maker 
                for added convenience.
                </p>
                <p>
                The en-suite bathroom is equipped with premium toiletries, a shower or bathtub,
                 and fresh towels. Large windows or a balcony may provide natural light and 
                 scenic views, enhancing the overall experience.
                </p>
                </div>
                <hr></hr>
                <div className="facilities-container">
                  <div style={{width:"50%"}}>
                    <h2>Facilities</h2>
                    <p><span>📶</span>Free Wifi</p>
                    <p><span>📺</span>Television</p>
                    <p><span>🐕</span>Pet-Friendly</p>
                    <p><span>🏊‍♀️</span>Indoor Pool</p>
                    <p><span>💪</span>Indoor Gym</p>
                    </div>
                    <div style={{width:"50%"}}>
                        <h2 style={{width:"100%",display:"flex",alignItems:"start",justifyContent:"start"}}>Room Availabilty:</h2>
                        <h5 style={{width:"100%",display:"flex",alignItems:"start",justifyContent:"start",marginLeft:"6%"}}>From-Wed, 2/09/2024</h5>
                        <h5 style={{width:"100%",display:"flex",alignItems:"start",justifyContent:"start",marginLeft:"6%"}}>To-Thur, 3/09/2024</h5>
                        <h2 style={{width:"100%",display:"flex",alignItems:"start",justifyContent:"start"}}>Price per night:</h2>
                        <h5 style={{width:"100%",display:"flex",alignItems:"start",justifyContent:"start",marginLeft:"6%"}}>R450</h5>
                    </div>
                </div>
      </div>
        {/* Room Content (Boomk Button)*/}
      <div className="book-room-container" >
                <button className="book-room-button-container" style={{backgroundColor:"#03327C",color:"white"}} onClick={()=>navigate("/book-room")}>Book Room</button>
      </div>

      {/* Footer */}
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

export default Room;
