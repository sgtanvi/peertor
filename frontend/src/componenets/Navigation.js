import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { Paper } from '@mui/material';


function Home() {
  return (
    <div className='nav'>
      
      <div className="navbar">
        <HomeIcon/>
        <SearchIcon/>
        <CalendarMonthIcon/>
        <PersonIcon/>
      </div>
    </div>
  );
}

export default Home;