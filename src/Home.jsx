import {useState} from 'react'
import './Home.css'

function Home(){
    return(
        <div className="home-main-content">
            <div className="nav-bar">
                <div className="nav-bar-content">
                        <img src="./src/assets/Logo2.png" style={{height:"125%",color:"white",opacity:"1",filter:"contrast(300%)"}}/>
                        <ul className="nav-ul">
                            <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Home</button></li>
                            <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Reservations</button></li>
                            <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>About Us</button></li>
                            <li className="nav-li"><button className="nav-buttons" style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Contact Us</button></li>
                            <li className="nav-li"><button className="nav-buttons"style={{color:"white",opacity:"1",backgroundColor:"transparent"}}>Logout</button></li>
                        </ul>   
                </div>
                <h1 style={{color:"white"}}>Get the best deals at Serene Hotel!!</h1>
            </div>
            <div className="outside-act">
                <h2 style={{lineHeight:"0%"}}>Our Outside Activities</h2>
                <h1 style={{lineHeight:"0%"}}>Get the Best Outside</h1>
                <h1 style={{lineHeight:"0%"}}>Activities With Us!</h1> 
            </div>

            <div className="outside-act-images">
                <div className="act-container">
                    <img src="./src/assets/out1.webp" alt="No Image To Display" className="act-image"/>
                    <h2 style={{lineHeight:"0%"}}>Kid's Pool</h2>
                    <p>Kids pool has all the fun activities to get your kids entertained.</p>
                </div>

                <div className="act-container">
                    <img src="./src/assets/out2.jpg" alt="No Image To Display" className="act-image"/>
                    <h2 style={{lineHeight:"0%"}}>Segway Races</h2>
                    <p>Segway races keep both adults and teenagers entertained.</p>
                </div>

                <div className="act-container">
                    <img src="./src/assets/out3.webp" alt="No Image To Display" className="act-image"/>
                    <h2 style={{lineHeight:"0%"}}>Game Activities</h2>
                    <p>Fun activities keep both adults and teenagers entertained the whole day.</p>
                </div>

                <div className="act-container">
                    <img src="./src/assets/out4.jpg" alt="No Image To Display" className="act-image"/>
                    <h2 style={{lineHeight:"0%"}}>Water Splash</h2>
                    <p>Water splash activities for kids on hot scorching summer days.</p>
                </div>

            </div>
            <div className="experience-container">
                <img src="./src/assets/bestHotel.webp"/>
                <h2>Experience the epitome of luxury 
                    at our award-winning hotel, nestled in the heart of 
                    paradise where elegance meets world-class service.
                </h2>
            </div>

            <div className="vision-container">
                <h2 style={{fontSize:"48px",lineHeight:"0%",color:"#786767"}}>Our Vision</h2>
                <h2 style={{fontSize:"48px",lineHeight:"0%"}}>“We always provide the best for our hotel visitors,</h2>
                <h2 style={{fontSize:"48px",lineHeight:"0%"}}> we are happy to help. We are <u>Serene</u>, the most</h2>
                <h2 style={{fontSize:"48px",lineHeight:"0%"}}>appropriate hotel for you!!”</h2>
                <img src="./src/assets/BookRoom.jpg" alt="No Image to Display"/>
            </div>

            <div className="home-book">
                <h1>Get Your Dream Hotel Room!</h1>
                <button style={{width:"20%",height:"100px",fontSize:"28px",fontWeight:"bold",backgroundColor:"#D9D9D9",border:"2px solid black"}}>Book a Room</button>
            </div>

            <div className="footer">
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export default Home;