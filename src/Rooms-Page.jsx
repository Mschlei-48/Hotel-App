import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rooms.css";

function Rooms() {
  const navigate = useNavigate();
  return (
    <div className="rooms-main-content">
      <div className="nav-bar">
        <div className="nav-bar-content">
          <img
            src="./src/assets/Logo2.png"
            style={{
              height: "125%",
              color: "white",
              opacity: "1",
              filter: "contrast(300%)",
            }}
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
        <h1 style={{ color: "white" }}>Get the best deals at Serene Hotel!!</h1>
        <div className="dates-and-guests">
          <div
            className="check-in-container"
            style={{ boderRight: "5px solid black" }}
          >
            <label for="check-in" className="filter-label">
              Check in
            </label>
            <br></br>
            <input
              type="date"
              name="check-in"
              className="check-in-out-input"
            ></input>
          </div>
          <div
            className="check-out-container"
            style={{ boderRight: "5px solid black" }}
          >
            <label for="check-out" className="filter-label">
              Check out
            </label>
            <br></br>
            <input
              type="date"
              name="check-in"
              className="check-in-out-input"
            ></input>
          </div>

          <div className="guest_container">
            <div>
              <label className="filter-label">Guests</label>
              <br></br>
              <select className="select-rooms-guests">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>

          <div className="type-rooms_container">
            <div>
              <label className="filter-label">RoomType</label>
              <br></br>
              <select className="select-rooms-guests">
                <option>Family Queen Room</option>
                <option>Single Room</option>
                <option>King Room</option>
                <option>Triple Room</option>
                <option>Suite</option>
                <option>Quad Room</option>
              </select>
            </div>
          </div>

          <div classsName="rooms-container">
            <div>
              <label className="filter-label">Rooms</label>
              <br></br>
              <select className="select-rooms-guests">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* Filter Content */}
      <div className="rooms-filter">
        <div>
      {/* <br></br> */}
      <div className="filter-content">
        <h2>Your perfect stay-cation start here!!</h2>
        <div className="filter-sort-content">
          <div className="filter">
            <button className="filter-buttons">Pet friendly</button>
            <button className="filter-buttons" style={{ marginLeft: "16px" }}>
              Indoor Pool
            </button>
          </div>
          <div className="sort">
            <label style={{ fontWeight: "bold" }}>Sort By: </label>
            <select
              style={{
                width: "7vw",
                height: "100%",
                borderRadius: "10%",
                fontWeight: "bold",
              }}
            >
              <option>Ratings</option>
              <option>Price</option>
            </select>
          </div>
        </div>
        {/* Rooms Content */}
        <br></br>
        <div className="Rooms">
          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
          </div>

          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
          </div>

          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
          </div>

          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
          </div>
          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
          </div>
          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
            <span className="stars">⭐</span>
          </div>

          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
          </div>
          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
          </div>
          <div className="room-cards">
            <img src="./src/assets/room1.jpeg" className="room-images" />
            <h4>Triple Room</h4>
            <p>
              <span>🚿</span>Three bathrooms
            </p>
            <p>
              <span>📶</span>Unlimited Wifi
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>3 people
            </p>
            <h4>R450</h4>
            <span className="stars">⭐</span>
          </div>
        </div>
      </div>
      </div>
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
        <div>
          <p style={{ color: "white", fontSize: "12px" }}>
            &copy; 2024 Serene Hotel, 1911 Cathcart
          </p>
        </div>
      </div>
    </div>
  );
}
export default Rooms;
