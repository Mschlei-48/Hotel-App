import { useState } from "react";
import "./Room.css";
import {useNavigate} from 'react-router-dom'

function Room() {
    const navigate=useNavigate()
  return (
    <div className="room-main-content">
        <div className="Nav-Bar">
            <h1>Nav Bar</h1>
        </div>

      {/* Room Content (Images)*/}
      <div className="room-img-container" style={{backgroundColor:"black"}}>
                <div>
                    <img src="./src/assets/room1.jpeg" alt="No Image to Display" id="room-img"/>
                </div>
                <div>
                    <img src="./src/assets/bathroom.jpg" className="room-imgs"/>
                    <img src="./src/assets/view1.jpg" className="room-imgs"/>
                </div>
      </div>
      {/* Room Content (Information)*/}
      <div className="room-info-container" style={{backgroundColor:"yellow"}}>
        <div>
                <h3>About the Room</h3>
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
                <div>
                    <h3>Facilities</h3>
                    <p>Free Wifi</p>
                    <p>Television</p>
                    <p>Pet-Friendly</p>
                    <p>Indoor Swimming</p>
                    <p>Indoor Gym</p>
                </div>
      </div>
        {/* Room Content (Boomk Button)*/}
      <div className="book-room-button-container" style={{backgroundColor:"green"}}>
                <button>Book Room</button>
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
