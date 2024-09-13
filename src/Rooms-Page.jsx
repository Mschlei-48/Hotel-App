import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rooms.css";

function Rooms() {
  const navigate = useNavigate();
  return (
    <div>
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

          <div
            className="guest_container"
            style={{ display: "flex", gap: "22%" }}
          >
            <div>
              <span className="emoji">👥</span>
            </div>
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

          <div
            className="type-rooms_container"
            style={{ display: "flex", gap: "22%" }}
          >
            <div>
              <span className="emoji">🚪</span>
            </div>
            <div>
              <label className="filter-label">RoomType</label>
              <br></br>
              <select className="select-rooms-guests">
                <option>Famlily Queen Room</option>
                <option>Singl Room</option>
                <option>Kig Room</option>
                <option>Triple Room</option>
                <option>Suite</option>
                <option>Quad Room</option>
              </select>
            </div>
          </div>

          <div
            classsName="rooms-container"
            style={{ display: "flex", gap: "22%" }}
          >
            <span className="emoji">🛏</span>
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
    </div>
  );
}
export default Rooms;
