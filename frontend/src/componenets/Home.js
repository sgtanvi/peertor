import { Avatar, Paper } from '@mui/material';
import React from 'react';


function Home() {
  return (
    <div className="container">

      <Paper elevation={3} />
      <div style={{alignItems:'center'}} className="color-panel"></div>
      <Avatar  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <div className="content">
        {/* add main content here */}
      </div>
    </div>
  );
}

export default Home;