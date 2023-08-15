import React from 'react'
import './sidebar.css'
import {AddCircle,AddIcCall,VideoCall,Archive, PlayCircleFilledOutlined,Group,Bookmark,
    Favorite,Restore,SettingsApplications} from '@mui/icons-material'

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                <li className="sidebarListItem">
                        <AddCircle className='sidebarIcon'/>
                        <span className="sidebarListItemText">Add Posts</span>
                    </li>
                    <li className="sidebarListItem">
                        <AddIcCall className='sidebarIcon'/>
                        <span className="sidebarListItemText">Voice Call</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoCall className='sidebarIcon'/>
                        <span className="sidebarListItemText">Video Call</span>
                    </li>
                    <li className="sidebarListItem">
                        <Archive className='sidebarIcon'/>
                        <span className="sidebarListItemText">Archive</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Reels</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className='sidebarIcon'/>
                        <span className="sidebarListItemText">Supervision</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon'/>
                        <span className="sidebarListItemText">Saved</span>
                    </li>
                    <li className="sidebarListItem">
                        <Favorite className='sidebarIcon'/>
                        <span className="sidebarListItemText">Favourites</span>
                    </li>
                    <li className="sidebarListItem">
                        <Restore className='sidebarIcon'/>
                        <span className="sidebarListItemText">Your activity</span>
                    </li>
                    <li className="sidebarListItem">
                        <SettingsApplications className='sidebarIcon'/>
                        <span className="sidebarListItemText">Settings</span>
                    </li>
                
                    
                </ul>
            </div>
        </div>
    )
}

