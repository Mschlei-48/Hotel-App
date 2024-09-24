import { useState } from "react";
import './Admin.css'
import Popup from 'reactjs-popup'

function Admin() {
  const handleAddRoom = () => {
    setRooms([...rooms,{"room":room,"name":name,"checkin":checkIn,"checkout":checkOut,"price":price,"request":request,
        "pickup":pickup
    }])
  };
  const [rooms,setRooms]=useState([])
  const [room,setRoom]=useState("")
  const [name,setName]=useState("")
  const [checkIn,setCheckIn]=useState("")
  const [checkOut,setCheckOut]=useState("")
  const [price,setPrice]=useState("")
  const [request,setRequest]=useState("")
  const [pickup,setPickup]=useState("")
  const [approve,setApprove]=useState("")

  console.log(rooms)

  return (
    <div className="admin-main-content">
      <div className="admin-logo">
        <img src="./src/assets/Logo.png" alt="No Image to Display" style={{width:"12%",height:"12%",borderRadius:"85px"}}/>
        <h1>Admin</h1>
      </div>
      
      <div className="add-book">
        <div className="admin-nav-bar">
          <h3>Nav Bar</h3>
          <button>Booked Rooms</button>
          <Popup trigger={<button>Add Room</button>} position="center">
          <div className="add-room-outer-div">
            <div className="add-room-fomr-div">
                <h1>Add a Room</h1>
                <input placeholder="Enter Room Name" type="text" onChange={(event)=>setRoom(event.target.value)}></input>
                {/* <br></br> */}
                <input placeholder="Enter Full Name" type="text" onChange={(event)=>setName(event.target.value)}></input>
                {/* <br></br> */}
                <input placeholder="Enter Check-In" type="date" onChange={(event)=>setCheckIn(event.target.value)}></input>
                {/* <br></br> */}
                <input placeholder="Enter Check-Out" type="date" onChange={(event)=>setCheckOut(event.target.value)}></input>
                {/* <br></br> */}
                <input placeholder="Enter Price" type="text" onChange={(event)=>setPrice(event.target.value)}></input>
                {/* <br></br> */}
                <textarea placeholder="Enter Special Requests" onChange={(event)=>setRequest(event.target.value)}></textarea>
                <br></br>
                <label style={{fontWeight:"bold",fontSize:"1rem"}}>Free Pick-up?</label>
                {/* <br></br> */}
                {/* <br></br> */}
                <select onChange={(event)=>setPickup(event.target.value)}  style={{width:"8%",padding:"1%",fontSize:"1rem",fontWeight:"bold"}}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                {/* <br></br>
                <br></br>
                <br></br> */}
                <br></br>
                <button onClick={()=>handleAddRoom()}>Add Room</button>
            </div>

          </div>
          </Popup>
          
        </div>
        <div className="booked_rooms-content">
            <table>
                <thead>
                    <th>Room</th>
                    <th>Full Name</th>
                    <th>Check-In</th>
                    <th>Check-Out</th>
                    <th>Price</th>
                    <th>Requests</th>
                    <th>Pickup</th>
                    <th>Approved</th>
                    <th>Edit</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Cozy Single Room</td>
                        <td>Mishi Makade</td>
                        <td>Tue,01/10/24</td>
                        <td>Tue,02/10/24</td>
                        <td>R400</td>
                        <td>Allergic to pets, ensure all material previously in contact with pets are gone.</td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td><button>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
export default Admin;
