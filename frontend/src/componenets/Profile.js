import { Avatar } from "@mui/material";
import React from "react";

function Profile() {
    return(
        <div>
            <div className="big-block" style={{marginBottom: "50px"}}>
                <Avatar id="round-icon-profile" className="round-icon"/>
            </div>
            <div className="profile-card"><p>Name</p></div>
            <div className="profile-card"><p>Email address</p></div>
            <div className="profile-card"><p>upcoming meetings</p></div>
        </div>
    );
}

export default Profile;