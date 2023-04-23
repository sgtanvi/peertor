import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from "react-router-dom";


function Home() {

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path)
  }
  return (
    <div className='nav'>
      
      <div className="navbar">
      <Link to="/"><HomeIcon /></Link>
      <Link to="/search"><SearchIcon/></Link>
      <Link to="/meetings"><CalendarMonthIcon/></Link>
      <Link to="/profile"><PersonIcon/></Link>
      </div>
    </div>
  );
}

export default Home;