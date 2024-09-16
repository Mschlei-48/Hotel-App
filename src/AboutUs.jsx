import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="about-us-main-content">
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
        <h2 style={{ fontFamily: "Doppio One",color:"white" }}>
              "Serene Hotel: Where Tranquility Meets Luxury."
            </h2>
        </h1>
      </div>
      {/* About Us Content */}
      <div>
      {/* <h2 style={{ fontFamily: "Doppio One" }}>
              "Serene Hotel: Where Tranquility Meets Luxury."
            </h2> */}
        </div>

      <div className="about-us-content-container">
        <div className="about-us-image">
          <img id="about-img" src="./src/assets/serene-hotel.jpg" alt="No Image to Display" />
        </div>
        <div className="about-us-content">
          <div className="about-us-content-col2">
          <h1>About Us</h1>
            <p>
              Welcome to Serene Hotel, a peaceful haven designed to offer you
              the perfect blend of luxury, comfort, and relaxation. Situated in
              a tranquil setting away from the hustle and bustle of everyday
              life, we invite you to immerse yourself in an environment where
              every detail is carefully curated for your well-being.
            </p>
            <p>
              At Serene Hotel, we pride ourselves on delivering personalized
              service with warmth and professionalism, ensuring your every need
              is met. Whether you’re here for business or pleasure, our
              elegantly appointed rooms, state-of-the-art amenities, and serene
              surroundings create the ideal atmosphere for both relaxation and
              productivity.
            </p>
            <p>
              Unwind in our lush gardens, indulge in exquisite dining
              experiences, or simply enjoy the peaceful ambiance that makes
              Serene Hotel a true escape from the ordinary. Whether it's a
              weekend getaway, a business trip, or a special occasion, we
              promise to make your stay a memorable one. At Serene Hotel,
              tranquility isn’t just a feeling—it’s a way of life.
            </p>
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
        <div style={{backgroundColor:"black",paddingTop:"2%",paddingBottom:"1%",width:"98.7vw"}}>
          <p style={{ color: "white", fontSize: "12px" }}>
            &copy; 2024 Serene Hotel, 1911 Cathcart
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
