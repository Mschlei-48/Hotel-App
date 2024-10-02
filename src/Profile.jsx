import { useState } from "react";
import "./Profile.css";
import { useNavigate, useLocation } from "react-router-dom";
import { setData } from "./authReducer/profileSlice.js";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.prof.data);
  console.log("State data:", data);

  return (
    <div className="profile-main-content">
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
              <button
                className="nav-buttons"
                style={{
                  color: "white",
                  opacity: "1",
                  backgroundColor: "transparent",
                }}
                onClick={() => navigate("profile")}
              >
                Profile
              </button>
            </li>
          </ul>
        </div>
        <h1 className="h1-text" style={{ color: "white" }}>
          Your Profile!!
        </h1>
      </div>
      <div className="prof-info">
        <div style={{width:"40%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <img src={data.profile} alt="No Image" style={{width:"300px",height:"300px",borderRadius:"50%"}}/>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start"}}>
          <h2 style={{lineHeight:"1.5rem",width:"100%"}}>{data.Name}</h2>
          <p style={{lineHeight:"1.5rem"}}>{data.profession}</p>
          <p style={{lineHeight:"1.5rem"}}>{data.Gender}</p>
          <p style={{lineHeight:"1.5rem"}}>{data.Age}</p>
          <p style={{lineHeight:"1.5rem"}}>{data.Number}</p>
          <p style={{lineHeight:"1.5rem"}}>{data.Email}</p>
          </div>

        </div>
        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "flex-start",
            backgroundColor:"white"
          }}
          className="hobbies"
        >
            <h3>{data.Name} likes the following...</h3>
          
           <p><span style={{marginRight:"10px"}}>⚽</span>{data.hobbies[0]}</p>
           <br></br>
           <p><span style={{marginRight:"10px"}}>🔴</span>{data.hobbies[1]}</p>
           <br></br>
           <p><span style={{marginRight:"10px"}}>📺</span>{data.hobbies[2]}</p>
           <br></br>
           <p><span style={{marginRight:"10px"}}>🎗️</span>{data.hobbies[3]}</p>
           <br></br>
           <p><span style={{marginRight:"10px"}}>🏊‍♀️</span>{data.hobbies[4]}</p>
         
        </div>
      </div>
    </div>
  );
}

export default Profile;
