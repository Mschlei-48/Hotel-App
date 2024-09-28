import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Rooms.css";
import { fetchData } from "./authReducer/dbSlice.js";
const today = new Date().toISOString().slice(0, 10);

function Rooms() {
  const navigate = useNavigate();
  
  const { data, loading, error } = useSelector((state) => state.db);
  const dispatch = useDispatch();
  const [checkIn,setCheckIn]=useState("")
  const [checkOut,setCheckOut]=useState("")
  const [filData,setFilData]=useState([])
  const [guests,setGuests]=useState(0)
  const [roomType,setRoomType]=useState("")
  const [pet,setPet]=useState(false)
  const [pool,setPool]=useState(false)
  const [sort,setSort]=useState("")
  const today = new Date().toISOString().slice(0, 10);
  // const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(data);
  console.log("Filtered Rooms:",filData)
  console.log("checkIn:",checkIn)
 

  useEffect(()=>{
    handleFilterDate()
    
  },[checkIn,checkOut])

  useEffect(()=>{
    handleFilterGeneral()
  },[pool,pet,guests,roomType])

  useEffect(() => {
    sortRooms();
  }, [sort, data]);

  const handleNavigate=((room)=>{
    navigate("/room",{
      state:{
        room
      }
    })
  })

function formatFirebaseTimestamp(firebaseTimestamp) {
  const date = new Date(firebaseTimestamp.seconds * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}


const sortRooms = () => {
  const sortedRooms = [...data]; // Create a copy of data to avoid mutating the original array
  sortedRooms.sort((a, b) => {
    if (sort === "ratings") {
      return b.ratings - a.ratings; // Sort by ratings in descending order
    } else if (sort === "price") {
      return a.price - b.price; // Sort by price in ascending order
    }
    return 0; // Default case, no sorting
  });

  setFilData(sortedRooms);
};

const handleFilterDate = () => {
  const filteredRooms = data.map((room) => {
    const roomCheckIn = formatFirebaseTimestamp(room.roomCheckIn);
    const roomCheckOut = formatFirebaseTimestamp(room.roomCheckOut);

    const RoomCheckIn = new Date(roomCheckIn);
    const RoomCheckOut = new Date(roomCheckOut);
    const CheckIn = new Date(checkIn);
    const CheckOut = new Date(checkOut);

    const isRoomAvailable = (RoomCheckIn <= CheckIn && RoomCheckOut >= CheckOut) ||
                            (CheckIn >= RoomCheckIn && CheckIn <= RoomCheckOut) ||
                            (CheckOut >= RoomCheckIn && CheckOut <= RoomCheckOut);

    return {
      ...room,
      matchScore: isRoomAvailable ? 1 : 0, // Assign a score based on date availability
    };
  });

  setFilData(filteredRooms.sort((a, b) => b.matchScore - a.matchScore)); // Sort rooms by match score
};

const handleFilterGeneral = () => {
  const filteredRooms = data.map((room) => {
    let matchScore = 0;

    if ((room.numberOfBeds == guests || room.numberOfBeds > guests)) matchScore++;
    if (room.typeOfRoom === roomType) matchScore++;
    if (room.petFriendly === pet) matchScore++;
    if (room.indoorPool === pool) matchScore++;

    return {
      ...room,
      matchScore,
    };
  });

  setFilData(filteredRooms.sort((a, b) => b.matchScore - a.matchScore)); // Sort rooms by match score
  console.log("Filtered Rooms:", filteredRooms);
};


  return (
    <div className="rooms-main-content">
      <div className="nav-bar">
        <div className="nav-bar-content">
          <img src="./src/assets/Logo2.png" id="rooms-logo" />
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
        <h1 style={{ color: "white" }}>View Available Rooms!!</h1>
        <div className="dates-and-guests">
          <div
            className="check-in-container"
            style={{ boderRight: "5px solid black" }}
          >
            <label for="check-in" className="filter-label">
              Check in
            </label>
            <br></br>
            <input
              type="date"
              name="check-in"
              className="check-in-out-input"
              min={today}
              onChange={(event)=>setCheckIn(event.target.value)}
            ></input>
          </div>
          <div
            className="check-out-container"
            style={{ boderRight: "5px solid black" }}
          >
            <label for="check-out" className="filter-label">
              Check out
            </label>
            <br></br>
            <input
              type="date"
              name="check-out"
              className="check-in-out-input"
              min={checkIn}
              onChange={(event)=>setCheckOut(event.target.value)}
            ></input>
          </div>

          <div className="guest_container">
            <div>
              <label className="filter-label">Guests</label>
              <br></br>
              <select className="select-rooms-guests" onChange={(event)=>setGuests(event.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
          </div>

          <div className="type-rooms_container">
            <div>
              <label className="filter-label">RoomType</label>
              <br></br>
              <select className="select-rooms-guests" onChange={(event)=>setRoomType(event.target.value)}>
                <option>Family Queen Room</option>
                <option>Single Room</option>
                <option>King Room</option>
                <option>Triple Room</option>
                <option>Quad Room</option>
              </select>
            </div>
          </div>

          {/* <div classsName="rooms-container">
            <div>
              <label className="filter-label">Beds</label>
              <br></br>
              <select className="select-rooms-guests">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
      <br></br>
      {/* Filter Content */}
      <div className="rooms-filter">
        <div>
          {/* <br></br> */}
          <div className="filter-content">
            <h2>Your perfect stay-cation start here!!</h2>
            <div className="filter-sort-content">
              <div className="filter">
                <button className="filter-buttons" onClick={()=>setPet(true)}>Pet friendly</button>
                <button
                  className="filter-buttons"
                  style={{ marginLeft: "16px" }}
                  onClick={()=>setPool(true)}
                >
                  Indoor Pool
                </button>
              </div>
              <div className="sort">
                <label style={{ fontWeight: "bold" }}>Sort By: </label>
                <select id="sort-by-content" onChange={(event)=>setSort(event.target.value)}>
                  <option value="ratings">Ratings</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
            {/* Rooms Content */}
            <br></br>
            <div className="Rooms">
              {filData.length==0?(
                            data.map((room)=>{
                              return(
                                  <div className="room-cards" onClick={() => handleNavigate(room)}>
                                  <img src={room.roomImg} alt="No Image to Display"className="room-images" />
                                  <h4>{room.name}</h4>
                                  <p>
                                    <span>🚿</span>{room.numberOfBathrooms}bathrooms
                                  </p>
                                  <p>
                                    <span>📶</span>{room.Wifi? (<span>Wifi</span>):(<span>No Wifi</span>)}
                                  </p>
                                  <p>
                                    <span>🧑‍🤝‍🧑</span>{room.numberOfBeds} bed(s)
                                  </p>
                                  <h4>R{room.price}</h4>
                                </div>
                                )
                                })
              ):(
                filData.map((room)=>{
                  return(
                      <div className="room-cards" onClick={() => handleNavigate(room)}>
                      <img src={room.roomImg} className="room-images" />
                      <h4>{room.name}</h4>
                      <p>
                        <span>🚿</span>{room.numberOfBathrooms}bathrooms
                      </p>
                      <p>
                        <span>📶</span>{room.Wifi? (<span>Wifi</span>):(<span>No Wifi</span>)}
                      </p>
                      <p>
                        <span>🧑‍🤝‍🧑</span>{room.numberOfBeds} bed(s)
                      </p>
                      <h4>R{room.price}</h4>
                    </div>
                    )
                    })
              )}

            </div>
          </div>
        </div>
      </div>
      {/* Next Button */}
      <div className="next-button-container">
        <button className="next-button">Next</button>
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
            width: "100vw",
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
export default Rooms;
