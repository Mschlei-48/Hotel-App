import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Rooms.css'

function Rooms(){
    const navigate=useNavigate()
    return(
        <div>
            <div className="nav-bar">
                <div className="nav-bar-content">
                    <img src="./src/assets/Logo2.png" style={{height:"125%",color:"white",opacity:"1",filter:"contrast(300%)"}}/>
                    <ul className="nav-ul">
                        <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}} onClick={()=>navigate("/home")}>Home</button></li>
                        <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Rooms</button></li>
                        <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Reservations</button></li>
                        <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>About Us</button></li>
                        <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Contact Us</button></li>
                        <li className="nav-li"><button className="nav-buttons"style={{color:"white",opacity:"1",backgroundColor:"transparent"}} onClick={()=>navigate("/login")}>Logout</button></li>
                    </ul>   
                </div>
                    <h1 style={{color:"white"}}>Get the best deals at Serene Hotel!!</h1>
                    <div className="dates-and-guests">
                <div className="check-in-container">
                    <label for="check-in">Check in</label>
                    <br></br>
                    <input type="date" name="check-in" id="check-in-input"></input>
                </div>
                    <hr></hr>
                <div className="check-out-container">
                    <label for="check-out">Check out</label>
                    <br></br>
                    <input type="date" name="check-in" id="check-out-input"></input>
                </div>

            </div>
            </div>
            


        </div>
    )
}
export default Rooms;