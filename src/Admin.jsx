import { useEffect, useState } from "react";
import './Admin.css'
import Popup from 'reactjs-popup'
import {doc,setDoc,addDoc,collection,getDocs} from "firebase/firestore"
import { db } from "./firebase/firebaseConfig";

function Admin() {

  useEffect(()=>{
    fetchDataFirestore()
  },[])
  // Fetch data from Firebase
  const fetchDataFirestore=async()=>{
    const docSnap = await getDocs(collection(db,"Bookings"));
    if (docSnap.docs.length>0) {
      docSnap.docs.map((data)=>{
        setRooms([...rooms,data.data()])
        console.log("Rooms:",rooms)
      })
      console.log("Document data:", docSnap.docs);
    } else {
      console.log("No such document!");
    }
  }

  const handleAddRoom = () => {
    setOpenModal(false)
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
  const [openModal,setOpenModal]=useState(false)
  // const [closeModal,setCloseModal]=useState(false)


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
          <button onClick={()=>fetchDataFirestore()}>Get Data</button>
          <button onClick={()=>setOpenModal(true)}>Add Room</button>

          <Popup open={openModal} onClose={()=>setOpenModal(false)} position="center">
          <div className="add-room-outer-div">
            <div className="add-room-fomr-div">
                <h1>Add a Room</h1>
                <input placeholder="Enter Room Name" type="text" onChange={(event)=>setRoom(event.target.value)}></input>
                <input placeholder="Enter Full Name" type="text" onChange={(event)=>setName(event.target.value)}></input>
                <input placeholder="Enter Check-In" type="date" onChange={(event)=>setCheckIn(event.target.value)}></input>
                <input placeholder="Enter Check-Out" type="date" onChange={(event)=>setCheckOut(event.target.value)}></input>
                <input placeholder="Enter Price" type="text" onChange={(event)=>setPrice(event.target.value)}></input>
                <textarea placeholder="Enter Special Requests" onChange={(event)=>setRequest(event.target.value)}></textarea>
                <br></br>
                <label style={{fontWeight:"bold",fontSize:"1rem"}}>Free Pick-up?</label>
                <select onChange={(event)=>setPickup(event.target.value)}  style={{width:"8%",padding:"1%",fontSize:"1rem",fontWeight:"bold"}}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
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
                {rooms.map((room)=>{
                  return(
                <tr>
                    <td>Room1</td>
                    <td>{room.name}</td>
                    <td>{room.checkin}</td>
                    <td>{room.checkout}</td>
                    <td>R{room.price}</td>
                    <td>{room.request}</td>
                    <td>{room.pickup}</td>
                    <td>Yes</td>
                    <td><button>Edit</button></td>
                </tr>
                  )
                })}
            </tbody>
                

            </table>
        </div>
      </div>
    </div>
  );
}
export default Admin;
