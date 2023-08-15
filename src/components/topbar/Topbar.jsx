import React from "react"
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import logo from "../images/pexels-pixabay-531321.jpg"

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>
            <div className="topbarCentre">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search to know" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Edit Profile</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">3</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">5</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">20</span>
                    </div>
                </div>
                <img src={logo} alt="" className="topbarImg" />
            </div>
        </div>
    )
}
