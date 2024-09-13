import { useState } from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <>
      <button
        id="reset-password-back-button"
        onClick={() => navigate("/verify-code")}
      >
        <span>⬅</span>Back
      </button>
      <div className="password-reset">
      <div className="reset-password-main-content">
        <div id="logo--button-content">
          <br></br>
          <img src="./src/assets/Logo.png" id="logo" />
        </div>
        <div id="reset-password-form">
          <h1 style={{ lineHeight: "0%", fontFamily: "Doppio One" }}>
            Create New Password
          </h1>
          <p style={{ fontFamily: "Doppio One", fontSize: "16px" }}>
            Your new password must be unique from the one previously used.
          </p>
          <label htmlFor="new-password">
            <h2>New Password</h2>
          </label>
          <input
            placeholder="Enter New Password"
            name="new-password"
            id="reset-password-input"
            className="reset-password-input"
          ></input>
          <label htmlFor="conf-new-password">
            <h2>Confirm New Password</h2>
          </label>
          <input
            placeholder="Confirm New Password"
            name="conf-new-password"
            id="reset-password-input"
            className="reset-password-input"
          ></input>
          <br></br>
        </div>
        <button
          id="reset-password-button"
          onClick={() => navigate("/login")}
          style={{
            fontSize: "20px",
            fontFamily: "Doppio One",
            textAlign: "center",
          }}
        >
          Reset Password
        </button>
      </div>
      </div>
    </>
  );
}

export default ResetPassword;
