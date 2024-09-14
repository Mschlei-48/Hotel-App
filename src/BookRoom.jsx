import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './BookRoom.css'

function BookRoom(){
    const navigate=useNavigate()
    return(
        <div className="Book-Room-Main-Content">
          {/* NavBar */}
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
      {/* RoomImages */}
      <div className="bookroom-img-container" style={{backgroundColor:"white"}}>
                <div>
                    <img src="./src/assets/room1.jpeg" alt="No Image to Display" id="bookroom-img"/>
                </div>
                <div className="bookimgs-room">
                  <div>
                  <img src="./src/assets/bathroom.jpg" className="bookroom-imgs"/>
                  </div>
                    <div>
                    <img src="./src/assets/view1.jpg" className="bookroom-imgs"/>
                    </div>
                    
                </div>
      </div>
      </div>
    )
}
export default BookRoom;