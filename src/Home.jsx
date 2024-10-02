import { useState } from "react";
import "./Home.css";
import { useNavigate, useLocation } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleProfileNav=(()=>{
    navigate("/profile")
  })
  return (
    <div className="home-main-content">
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
                onClick={() => navigate("/about-us")}
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
          Get the best deals at Serene Hotel!!
        </h1>
      </div>
      {/* Activities part */}
      <div className="outside-and-activities">
        <div style={{ width: "80%" }}>
          <div className="outside-act">
            <h2 className="h2-text" style={{ lineHeight: "0%" }}>
              Our Outside Activities
            </h2>
            <h1 className="h1-text" style={{ lineHeight: "0%" }}>
              Get the Best Outside
            </h1>
            <h1 className="h1-text" style={{ lineHeight: "0%" }}>
              Activities With Us!
            </h1>
          </div>
          <div className="outside-act-images">
            <div className="act-container">
              <img
                src="./src/assets/out1.webp"
                alt="No Image To Display"
                className="act-image"
              />
              <h4 className="h4-text" style={{ lineHeight: "0%" }}>
                Kid's Pool
              </h4>
              <p>
                Kids pool has all the fun activities to get your kids
                entertained.
              </p>
            </div>

            <div className="act-container">
              <img
                src="./src/assets/out2.jpg"
                alt="No Image To Display"
                className="act-image"
              />
              <h4 className="h4-text" style={{ lineHeight: "0%" }}>
                Segway Races
              </h4>
              <p>Segway races keep both adults and teenagers entertained.</p>
            </div>

            <div className="act-container">
              <img
                src="./src/assets/out3.webp"
                alt="No Image To Display"
                className="act-image"
              />
              <h4 className="h4-text" style={{ lineHeight: "0%" }}>
                Game Activities
              </h4>
              <p>
                Fun activities keep both adults and teenagers entertained the
                whole day.
              </p>
            </div>

            <div className="act-container">
              <img
                src="./src/assets/out4.jpg"
                alt="No Image To Display"
                className="act-image"
              />
              <h4 className="h4-text" style={{ lineHeight: "0%" }}>
                Water Splash
              </h4>
              <p>
                Water splash activities for kids on hot scorching summer days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience part */}
      <div className="experience-container">
        <span id="experience-container-img">
          {/* <h2
            style={{
              lineHeight: "0%",
              color: "black",
              display: "flex",
              alignItems: "start",
              // marginTop: "5%",
            }}
          >
            Get Serene Experience With Us!
          </h2> */}
          <img style={{ height: "100%" }} src="./src/assets/bestHotel.jpg" />
        </span>
        <h2 className="h2-text">
          Experience the epitome of luxury at our award-winning hotel, nestled
          in the heart of paradise where elegance meets world-class service.
        </h2>
      </div>

      {/* Vision part */}
      <div className="vision">
        <div className="vision-container">
          <h2
            className="h2-text"
            style={{ lineHeight: "0%", color: "#786767" }}
          >
            Our Vision
          </h2>
          <h2 className="h2-text" style={{ lineHeight: "0%" }}>
            “We always provide the best for our hotel visitors,
          </h2>
          <h2 className="h2-text" style={{ lineHeight: "0%" }}>
            {" "}
            we are happy to help. We are <u>Serene</u>, the most
          </h2>
          <h2 className="h2-text" style={{ lineHeight: "0%" }}>
            appropriate hotel for you!!”
          </h2>
          <img src="./src/assets/BookRoom.jpg" alt="No Image to Display" />
        </div>
      </div>
      {/* Book now part */}
      <div className="home-book">
        <h1 className="h1-text">Get Your Dream Hotel Room!</h1>
        <button
          style={{
            // height: "20%",
            // fontSize: "28px",
            fontWeight: "bold",
            backgroundColor: "#D9D9D9",
            border: "2px solid black",
          }}
          onClick={() => navigate("/rooms")}
          id="home-book-a-room-button"
        >
          Book a Room
        </button>
      </div>

      <div className="footer--main-content">
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
              <li className="footer-headings">Physical Address</li>
              <br></br>
              <li>1911 Daliwe Location</li>
              <li>Cathcart</li>
              <li>5310</li>
              <li>South Africa</li>

              <li className="footer-headings">Postal Address</li>
              <br></br>
              <li>1911 Daliwe Location</li>
              <li>Cathcart</li>
              <li>5310</li>
              <li>South Africa</li>

              <li className="footer-headings">Contact Details</li>
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
            width: "100vw",
          }}
        >
          <p id="copyright-text">&copy; 2024 Serene Hotel, 1911 Cathcart</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
