import { useEffect, useState } from "react";
import './Admin.css'
import Popup from 'reactjs-popup'
import {doc,setDoc,addDoc,collection,getDocs} from "firebase/firestore"
import { db } from "./firebase/firebaseConfig";
import {useSelector,useDispatch} from "react-redux"
import {fetchDataFirestore,AddToFireStore} from "./authReducer/AdminSlice.js"
import {useNavigate} from "react-router-dom" 


function Admin() {

  const dispatch=useDispatch()
  const {data,loading,error}=useSelector((state)=>state.admin)
  const navigate=useNavigate()
  
  useEffect(()=>{
    fetchDataFirestore(dispatch)
  },[])


  
// Fetch data from Firebase


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

  const handleAddRoom = () => {
    setOpenModal(false)
  };
  // const [rooms,setRooms]=useState([])
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
  const [number,setNumber]=useState("")
  const [email,setEmail]=useState("")
  const today = new Date().toISOString().slice(0, 10);
  // const [closeModal,setCloseModal]=useState(false)

  const rooms={
    "Firstname": name,
    "Lastname": lastName,
    "Price": price,
    "roomCheckIn": formatDate(checkIn),
    "roomCheckOut": formatDate(checkOut),
    "specialRequests": request,
    "roomType": room,
    "Paid": "Yes",
    "Number": number,
    "Email": email
    }


  return (
    <div className="admin-main-content">
      <button style={{width:"10%",backgroundColor:"#03327C",color:"white",position:"fixed",top:"4%",right:"10%"}} onClick={()=>navigate("/login")}>Logout</button>
      <br></br>
      <br></br>
      <div className="admin-logo">
        
        <img src="./src/assets/Logo.png" alt="No Image to Display" style={{width:"12%",height:"12%",borderRadius:"85px"}}/>
        <h1>Admin</h1>
      </div>
      <div className="add-book">
        <div className="admin-nav-bar">
          <h3>Nav Bar</h3>
          <button onClick={()=>setOpenModal(true)}>Add Room</button>

          <Popup open={openModal} onClose={()=>setOpenModal(false)} position="center">
          <div className="add-room-outer-div">
            <div className="add-room-fomr-div">
                <h1 style={{color:"white"}}>Add a Booking</h1>
                <br></br>
                <div style={{display:"flex",flexDirection:"row",width:"100%",alignItems:"flex-start",justifyContent:"center",gap:"2%"}} className="form-div">
                  <div style={{width:"40%"}}>
                    <input placeholder="Enter Room Type" type="text" onChange={(event)=>setRoom(event.target.value)}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Enter First Name" type="text" onChange={(event)=>setName(event.target.value)}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Enter Last Name" type="text" onChange={(event)=>setLastName(event.target.value)}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Enter Check-In" type="date" onChange={(event)=>setCheckIn(event.target.value)} min={today}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Enter Check-Out" type="date" onChange={(event)=>setCheckOut(event.target.value)} min={checkIn}></input>
                  </div>
                  <div style={{width:"40%"}}>
                    <input placeholder="Enter Price" type="text" onChange={(event)=>setPrice(event.target.value)}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Enter Number" type="text" onChange={(event)=>setNumber(event.target.value)}></input>
                    <br></br>
                    <br></br>
                    <input placeholder="Enter Email" type="email" onChange={(event)=>setEmail(event.target.value)}></input>
                    <br></br>
                    <br></br>
                    <textarea placeholder="Enter Special Requests" onChange={(event)=>setRequest(event.target.value)} style={{width:"70%"}}></textarea>
                    <br></br>
                    <br></br>
                    <label style={{fontWeight:"bold",fontSize:"1rem"}}>Free Pick-up?</label>
                    <select onChange={(event)=>setPickup(event.target.value)}  style={{width:"16%",padding:"1%",fontSize:"1rem",fontWeight:"bold"}}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <br></br>
                <button onClick={()=>{handleAddRoom();AddToFireStore(rooms,dispatch)}} style={{backgroundColor:"#03327C",color:"white",width:"15%",height:"auto",marginRight:"10%"}}>Submit Booking</button>
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
                    <th>Paid</th>
                    <th>Number</th>
                    <th>Email</th>
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
                    <td>{room.Number}</td>
                    <td>{room.Email}</td>
                    <td style={{width:"5%"}}><img src="https://cdn.iconscout.com/icon/free/png-256/free-edit-icon-download-in-svg-png-gif-file-formats--pen-write-pencil-ball-study-user-interface-vol-2-pack-icons-2202989.png?f=webp&w=256" style={{width:"50%"}}/></td>
                    <td style={{width:"5%"}}><img src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png" style={{width:"50%"}}/></td>
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
