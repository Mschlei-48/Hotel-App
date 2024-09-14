import { useState } from "react";
import "./CodeVerification.css";
import { useNavigate } from "react-router-dom";

function CodeVerification() {
  const navigate = useNavigate();
  return (
    <>
      <button
        id="forgot-password-back-button"
        onClick={() => navigate("/forgot-password")}
      >
        <span>⬅</span>Back
      </button>
      <div className="verifiy-code">
      <div className="code-verification-main-content">
        <br></br>
        <img src="./src/assets/Logo.png" id="logo" />
        <div className="verify-code-content">
          <h1 id="otp-verification-h1-text" style={{ lineHeight: "0%", fontFamily: "Doppio One" }}>
            OTP Verification
          </h1>
          <p
            style={{
              lineHeight: "58%",
              fontFamily: "Doppio One",
            }}
            id="enter-code-p-text"
          >
            Enter the verification code sent to your email address.
          </p>
        </div>
        <input className="code-input" type="number"></input>
        <input className="code-input" type="number"></input>
        <input className="code-input" type="number"></input>
        <input className="code-input" type="number"></input>
        <input className="code-input" type="number"></input>
        <br></br>
        <br></br>
        <button
          className="verify-code-button"
          onClick={() => navigate("/reset-password")}
          style={{
            fontFamily: "Doppio One",
            textAlign: "center",
          }}
        >
          Verify
        </button>
        <p id="not-receive-code-text"style={{ fontFamily: "Doppio One"}}>
          Did no receive code? <a>Resend</a>
        </p>
      </div>
      </div>
    </>
  );
}
export default CodeVerification;
