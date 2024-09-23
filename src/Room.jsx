import { useState,useEffect } from "react";
import "./Room.css";
import { useNavigate, useLocation } from "react-router-dom";

function Room() {


  const navigate = useNavigate();
  const location = useLocation();
  console.log("location is:", location.state.room);
  const room = location.state.room;
  const [edit, setEdit] = useState(false);
  const [checkIn,setCheckIn]=useState("")
  const [checkOut,setCheckOut]=useState("")

  const today = new Date().toISOString().slice(0, 10);

  const [extractCheckIn,setExtractCheckIn]=useState()
  const [extractCheckOut,setExtractCheckOut]=useState()

  useEffect(()=>{
    console.log("Changed Room:",room)
    console.log("Check In:",checkIn)
    console.log("Check Out:",checkOut)
    if(checkIn=="" && checkOut==""){
      room.roomCheckIn.formattedDate=formatFirebaseTimestamp(room.roomCheckIn.seconds,room.roomCheckIn.nanoseconds)
      room.roomCheckOut.formattedDate=formatFirebaseTimestamp(room.roomCheckOut.seconds,room.roomCheckOut.nanoseconds)
      setExtractCheckIn(room.roomCheckIn.formattedDate)
      setExtractCheckOut(room.roomCheckOut.formattedDate)
      console.log("ëxtract:",extractCheckIn)
      console.log("ëxtract:",extractCheckOut)
    }
    
  },[checkIn,checkOut])





    // Change seconds and milliseconds to format Wed, 12/09/24
    function formatFirebaseTimestamp(seconds, nanoseconds) {
      const timestamp = seconds * 1000 + Math.floor(nanoseconds / 1000000);
      const date = new Date(timestamp);
      const options = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
      return date.toLocaleDateString('en-US', options).replace(',', ''); // Return the formatted date
    }
  
  function formatDate(dateString) {
    const date = new Date(dateString);
  
    // Specify options for the format you need
    const options = { 
      weekday: 'short',   // Abbreviated day of the week (e.g., Wed)
      year: '2-digit',    // Last two digits of the year
      month: '2-digit',   // Two-digit month
      day: '2-digit'      // Two-digit day of the month
    };
  
    // Format the date and remove the comma
    return date.toLocaleDateString('en-US', options).replace(',', '');
  }



const handleBookingDate=(()=>{
  if(checkIn!=="" & checkOut!==""){
    const CheckIn=formatDate(checkIn)
    const CheckOut=formatDate(checkOut)
    room.roomCheckIn.formattedDate=CheckIn;
    room.roomCheckOut.formattedDate=CheckOut;
    console.log("Came here")
    setExtractCheckIn(room.roomCheckIn.formattedDate)
    setExtractCheckOut(room.roomCheckOut.formattedDate)
  }
   
 
})





// console.log("Testing:",handleDisplayDate()[1])
  const handleNav = () => {
    navigate("/book-room", {
      state: room,
    });
  };

  const handleCheckInCheckOut = () => {
    if (edit == true) {
      return (
        <>
        <div
          className="dates-and-guests"
          style={{ boderRight: "5px solid black", width: "90%" }}
        >
          <div className="check-in-container">
            <label
              for="check-in"
              className="filter-label"
              style={{ width: "80%", fontSize: "12px" }}
            >
              Check in
            </label>
            <br></br>
            <input
              type="date"
              name="check-in"
              className="check-in-out-input"
              style={{ width: "90%" }}
              min={today}
              onChange={(event)=>setCheckIn(event.target.value)}
            ></input>
          </div>
          <div
            className="check-out-container"
          >
            <label
              for="check-out"
              className="filter-label"
              style={{ width: "80%", fontSize: "12px" }}
            >
              Check out
            </label>
            <br></br>
            <input
              type="date"
              name="check-out"
              className="check-in-out-input"
              min={checkIn}
              style={{ width: "90%" }}
              onChange={(event)=>setCheckOut(event.target.value)}
            ></input>
          </div>
        </div>
      <button onClick={()=>setEdit(false)}>Cancel</button>
      <button onClick={()=>{setEdit(false);handleBookingDate()}}>Save</button>
      </>
      );
    } else if (edit == false) {
      return (
        <div>
          <h5
            style={{
              width: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              marginLeft: "6%",
            }}
          >
            Check-in- {extractCheckIn}
            {/* {formatFirebaseTimestamp(room.roomCheckIn.seconds,room.roomCheckIn.nanoseconds)} */}
          </h5>
          <h5
            style={{
              width: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
              marginLeft: "6%",
            }}
          >
            Check-out- {extractCheckOut}
            {/* {formatFirebaseTimestamp(room.roomCheckOut.seconds,room.roomCheckOut.nanoseconds)} */}
          </h5>
          <a onClick={() => setEdit(true)}>Edit</a>
        </div>
      );
    }
  };

  return (
    <div className="room-main-content">
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
            </li>
          </ul>
        </div>
        <h1 className="h1-text" style={{ color: "white" }}>
          Explore Rooml!!
        </h1>
      </div>

      {/* Room Content (Images)*/}
      <div>
        <h2>{room.name}</h2>
      </div>
      <div className="room-img-container" style={{ backgroundColor: "white" }}>
        <div>
          <img
            src="./src/assets/room1.jpeg"
            alt="No Image to Display"
            id="room-img"
          />
        </div>
        <div className="imgs-room">
          <div>
            <img src="./src/assets/bathroom.jpg" className="room-imgs" />
          </div>
          <div>
            <img src="./src/assets/view1.jpg" className="room-imgs" />
          </div>
        </div>
      </div>
      {/* Room Content (Information)*/}
      <div className="room-info-container">
        <div className="about-the-room-container">
          <h2>About the Room</h2>
          <p>{room.desc.slice(0, 119)}</p>
          <p>{room.desc.slice(120, 252)}</p>
          <p>{room.desc.slice(253)}</p>
        </div>
        <hr></hr>
        <div className="facilities-container">
          <div style={{ width: "50%" }}>
            <h2>Facilities</h2>
            <p>
              <span>📶</span>
              {room.Wifi ? <span>Free Wifi</span> : <span>No Wifi</span>}
            </p>
            <p>
              <span>📺</span>
              {room.Television ? (
                <span>Television</span>
              ) : (
                <span>No Television</span>
              )}
            </p>
            <p>
              <span>🐕</span>
              {room.petFriendly ? (
                <span>Pet-Friendly</span>
              ) : (
                <span>No Pets</span>
              )}
            </p>
            <p>
              <span>🏊‍♀️</span>
              {room.indoorPool ? (
                <span>Indoor Pool</span>
              ) : (
                <span>No Pool</span>
              )}
            </p>
            <p>
              <span>💪</span>Indoor Gym
            </p>
            <p>
              <span>🚿</span>
              {room.numberOfBathrooms}bathrooms
            </p>
            <p>
              <span>🧑‍🤝‍🧑</span>
              {room.numberOfBeds} bed(s)
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <h2
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              Check-In Check-Out:
            </h2>
            {handleCheckInCheckOut()}
            <h2
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              Price per night:
            </h2>
            <h5
              style={{
                width: "100%",
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                marginLeft: "6%",
              }}
            >
              R{room.price}
            </h5>
          </div>
        </div>
      </div>
      {/* Room Content (Boomk Button)*/}
      <div className="book-room-container">
        <button
          className="book-room-button-container"
          style={{ backgroundColor: "#03327C", color: "white" }}
          onClick={() => handleNav()}
        >
          Book Room
        </button>
      </div>

      {/* Footer */}
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
        <div
          style={{
            backgroundColor: "black",
            paddingTop: "2%",
            paddingBottom: "1%",
            width: "98.7vw",
          }}
        >
          <p style={{ color: "white", fontSize: "12px" }}>
            &copy; 2024 Serene Hotel, 1911 Cathcart
          </p>
        </div>
      </div>
    </div>
  );
}

export default Room;
