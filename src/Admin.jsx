import { useEffect, useState } from "react";
import './Admin.css'
import Popup from 'reactjs-popup'
import {doc,setDoc,addDoc,collection,getDocs} from "firebase/firestore"
import { db } from "./firebase/firebaseConfig";
import {useSelector,useDispatch} from "react-redux"
import {fetchDataFirestore} from "./authReducer/AdminSlice.js"

function Admin() {

  const dispatch=useDispatch()
  const {data,loading,error}=useSelector((state)=>state.admin)
  useEffect(()=>{
    fetchDataFirestore(dispatch)
  },[])
  console.log("Data is:",data)
  




  // Fetch data from Firebase
  // const fetchDataFirestore=async()=>{
  //   setRooms([])
  //   const docSnap = await getDocs(collection(db,"Bookings"));
  //   if (docSnap.docs.length>0) {
  //     docSnap.docs.map((data)=>{
  //       setRooms([...rooms,data.data()])
  //       console.log("Rooms:",rooms)
  //     })
  //     console.log("Document data:", docSnap.docs);
  //   } else {
  //     console.log("No such document!");
  //   }
  // }

  const handleAddRoom = () => {
    setOpenModal(false)
  };
  const [rooms,setRooms]=useState([])
  const [room,setRoom]=useState("")
  const [name,setName]=useState("")
  const [lastName,setLastName]=useState("")
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
          <button onClick={()=>setOpenModal(true)}>Add Room</button>

          <Popup open={openModal} onClose={()=>setOpenModal(false)} position="center">
          <div className="add-room-outer-div">
            <div className="add-room-fomr-div">
                <h1>Add a Room</h1>
                <input placeholder="Enter Room Type" type="text" onChange={(event)=>setRoom(event.target.value)}></input>
                <input placeholder="Enter First Name" type="text" onChange={(event)=>setName(event.target.value)}></input>
                <input placeholder="Enter Last Name" type="text" onChange={(event)=>setLastName(event.target.value)}></input>
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
                    <th>Paid</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                
                <tbody>
                {data.map((room)=>{
                  return(
                <tr>
                    <td>{room.roomType}</td>
                    <td>{room.Firstname}{room.Lasttname}</td>
                    <td>{room.roomCheckIn.formattedDate}</td>
                    <td>{room.roomCheckOut.formattedDate}</td>
                    <td>R{room.Price}</td>
                    <td>{room.specialRequests}</td>
                    <td>{room.Paid}</td>
                    <td>Yes</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
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
