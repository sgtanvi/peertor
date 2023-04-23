import { Avatar } from '@mui/material';
import React from 'react';

function Home() {
  return (
    <div className="app">
      <div className="big-block"></div>
      <div className="my-schedule">
        <h2>My Schedule</h2>
      </div>
      <div className="centered-container">
        <Avatar className='round-icon' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>

      <div className="main">
        <div className="box"></div>
        <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="card">Math 39</div>
          <div className="card">CS 146</div>
          <div className="card">LING 21</div>
          <div className="card">card4</div>
        </div>

      </div>
    </div>
  );
}

export default Home;
