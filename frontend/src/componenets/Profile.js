import { Avatar } from "@mui/material";
import React from "react";

function Profile() {
  return (
    <div>
      <div className="big-block" >
      
        <Avatar id="round-icon-profile" className="round-icon" style={{ position: "aboslute", top: "65px", right: "200px"}}/>
      </div>
      <div className="profile-card">
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Name</p>
      </div>
      <div className="profile-card">
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Email address</p>
      </div>
      <div className="profile-card" style={{ height: "200px" }}>
        <p style={{ textAlign: "center", fontSize: "1.2rem" }}>Upcoming meetings</p>
      </div>
    </div>
  );
}

export default Profile;
