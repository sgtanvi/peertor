import { Avatar, Paper } from '@mui/material';
import React from 'react';


function Home() {
  return (
    <div className="app">
      <div className="big-block">
      </div>
      <Avatar className='round-icon' alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <div className="main">
        <div className="box"></div>
        <div className="content">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;