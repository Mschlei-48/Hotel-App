import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Reservation.css";

function Reservations() {
  const navigate = useNavigate();
  const [del, setDel] = useState(false);

  const location = useLocation();
  console.log(location.state.room);
  const room = location.state.room;

  const deleteBooking = () => {
    setDel(true);
    return (location.state.room = {});
  };
  return (
    <div className="Reservation-Main-Content">
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
                onClick={() => navigate("/reservations")}
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
                onClick={() => navigate("contact-us")}
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
          View Your Reservations!!
        </h1>
      </div>

      {/* Your Reservation */}
      <div className="reservations-container">
        {del===false?(
                  <div
                  style={{
                    border: "2px solid black",
                    padding: "10px",
                    width: "35%",
                    borderRadius: "15px",
                  }}
                  id="reservation-inner-container"
                >
                  <h1>{room.name}</h1>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      gap: "35%",
                    }}
                  >
                    <div>
                      <h3>Facilities</h3>
                      <p>
                        {room.Wifi ? <span>Free Wifi</span> : <span>No Wifi</span>}
                        <span>📶</span>
                      </p>
                      <p>
                        {room.Television ? (
                          <span>Television</span>
                        ) : (
                          <span>No Television</span>
                        )}
                        <span>📺</span>
                      </p>
                      <p>
                        {room.petFriendly ? (
                          <span>Pet-Friendly</span>
                        ) : (
                          <span>No Pets</span>
                        )}
                        <span>🐕</span>
                      </p>
                      <p>
                        {room.indoorPool ? (
                          <span>Indoor Pool</span>
                        ) : (
                          <span>No Pool</span>
                        )}
                        <span>🏊‍♀️</span>
                      </p>
                      <p>
                        Indoor Gym<span>💪</span>
                      </p>
                      <p>
                        {room.numberOfBathrooms}bathroom(s)<span>🚿</span>
                      </p>
                      <p>
                        {room.numberOfBeds} bed(s)<span>🧑‍🤝‍🧑</span>
                      </p>
                    </div>
                    <div>
                      <h3>Cancellation Fee</h3>
                      <p style={{ margin: "0" }}>R153.32</p>
                      <h3>Reserved Dates:</h3>
                      <p>Check-in {room.roomCheckIn.formattedDate}</p>
                      <p>Check-out {room.roomCheckOut.formattedDate}</p>
                      <h4>Price per night:</h4>
                      <p>R{room.price}</p>
                    </div>
                  </div>
                  <button
                    style={{ backgroundColor: "#03327C", color: "white" }}
                    onClick={() => deleteBooking()}
                  >
                    Delete
                  </button>
                </div>
        ):(
          <h1>No Booking nformation Available</h1>
        )}

      </div>
      <div></div>
    </div>
  );
}
export default Reservations;
