import React from "react";
import { Avatar } from '@mui/material';
function MeetingsPage() {
    return (
      <div>
        <header className="big-board">
          <h2>Meetings</h2>
        </header>
  
        <div className="meeting-card">
          <div style={{display: 'flex'}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginRight: '20px'
            }}>
              <Avatar alt="meeting icon" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="details">
              <p>Name</p>
              <p>Time</p>
              <p>Location</p>
            </div>
          </div>
        </div>
        <div className="meeting-card">
          <div style={{display: 'flex'}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginRight: '20px'
            }}>
              <Avatar alt="meeting icon" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="details">
              <p>Name</p>
              <p>Time</p>
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default MeetingsPage;
  