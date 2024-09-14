import { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <>
      <button
        id="forgot-password-back-button"
        onClick={() => navigate("/login")}
      >
        <span>⬅</span>Back
      </button>
    <div id="forgot-password-content">
      <div className="forgot-password-main-content">
        <div id="logo--button-content">
          <br></br>
          <img src="./src/assets/Logo.png" id="logo" />
        </div>
        <div id="forgot-password-form">
          <h1 className="forgot-password-text" style={{ lineHeight: "0%" }}>Forgot Password?</h1>
          <p className="dont-worry-text" style={{ lineHeight: "0%", fontFamily: "Dhyana", fontSize: "48" }}>
            Dont worry, it happens. Enter the email address linked to
          </p>
          <p className="dont-worry-text" style={{ lineHeight: "0%", fontFamily: "Dhyana", fontSize: "48" }}>
            your account below, and a codes will be sent.
          </p>

          <label for="email">
            <h2 className="forgot-password-text">Email</h2>
          </label>
          <input
            placeholder="Enter Email Address"
            name="email"
            id="forgot-password-input"
          ></input>
          <br></br>
        </div>
        <button
          id="send-code-button"
          onClick={() => navigate("/verify-code")}
          style={{
            // fontSize: "20px",
            fontFamily: "Doppio One",
            textAlign: "center",
          }}
        >
          Send Code
        </button>
      </div>
    </div>
    </>
  );
}
export default ForgotPassword;
