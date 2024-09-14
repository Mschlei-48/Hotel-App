import {useState} from 'react'
import './NavBar.css'

function NavBar(){

return(
<div className="gen-nav-bar">
<div className="gen-nav-bar-content">
  <img
    src="./src/assets/Logo2.png"
    style={{
      height: "125%",
      color: "white",
      opacity: "1",
      filter: "contrast(300%)",
    }}
  />
  <ul className="gen-nav-ul">
    <li className="gen-nav-li">
      <button
        className="gen-nav-buttons"
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
    <li className="gen-nav-li">
      <button
        className="gen-nav-buttons"
        style={{
          color: "white",
          opacity: "1",
          backgroundColor: "transparent",
        }}
      >
        Rooms
      </button>
    </li>
    <li className="gen-nav-li">
      <button
        className="gen-nav-buttons"
        style={{
          color: "white",
          opacity: "1",
          backgroundColor: "transparent",
        }}
      >
        Reservations
      </button>
    </li>
    <li className="gen-nav-li">
      <button
        className="gen-nav-buttons"
        style={{
          color: "white",
          opacity: "1",
          backgroundColor: "transparent",
        }}
      >
        About Us
      </button>
    </li>
    <li className="gen-nav-li">
      <button
        className="gen-nav-buttons"
        style={{
          color: "white",
          opacity: "1",
          backgroundColor: "transparent",
        }}
      >
        Contact Us
      </button>
    </li>
    <li className="gen-nav-li">
      <button
        className="gen-nav-buttons"
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
</div>
)
}

export default NavBar;