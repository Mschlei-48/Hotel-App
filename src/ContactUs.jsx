import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-us-main-content">
        {/* Nav Bar */}
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
          <h2 style={{ fontFamily: "Doppio One", color: "white" }}>
            Reach Out To Us
          </h2>
        </h1>
      </div>
                {/* Contact us content */}

    <div>
        
    </div>

    </div>
  );
}
export default ContactUs;
