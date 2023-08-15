import React from 'react'
import './rightbar.css'
import logo from "../images/ronaldo.webp"
import carphoto from "../images/peter-broomfield-m3m-lnR90uM-unsplash.jpg"
import djoko from "../images/Novak-Djokovic.webp"
import usop from "../images/US Open.png"
import messi from "../images/Messi.jpg"
import risers from "../images/SRH.webp"
import benz from "../images/mercedes.jpg"
export default function Rightbar({ profile }) {

    const HomeRightbar = () => {
        return (
            <></>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>Your information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Username</span>
                        <span className="rightbarInfoValue">sheetal_1224</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Posts:</span>
                        <span className="rightbarInfoValue">10</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Followers:</span>
                        <span className="rightbarInfoValue">235</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Following:</span>
                        <span className="rightbarInfoValue">387</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>Your friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={logo} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">CR7</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={carphoto} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Root</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={djoko} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Djokernole</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={usop} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">US Open</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={messi} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">leomessi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={risers} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Sunrisershyd</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={benz} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingname">Mercedes-Benz</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar/> }
            </div>
        </div>
    )
}