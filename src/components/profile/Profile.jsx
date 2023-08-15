import React from 'react'
import "./profile.css"
import { Link }  from "react-router-dom";
import Topbar from "../topbar/Topbar.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import Rightbar from "../rightbar/Rightbar.jsx"; 
import logo from "../images/pexels-pixabay-531321.jpg";
import photo_p from "../images/SH_ProfileP.jpeg";

export default function Profile() {
    return (
        <>
        <div>
            {/* <h1>Profile Page</h1> */}
            {/* <Link>Home</Link> */}
            </div>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profilerightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={logo} alt="" />
                            <img className='profileUserImg' src={photo_p} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Sheetal Kapoor</h4>
                            <span className='profileInfoDesc'>What should I write here?</span>
                        </div>
                    </div>
                    <div className="profilerightBottom">
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}
