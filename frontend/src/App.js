import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './componenets/Home';
import MeetingsPage from './componenets/MeetingsPage';
import Navigation from './componenets/Navigation';
import Search from './componenets/Search';
import Profile from './componenets/Profile';
import Login from './componenets/Login';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/meetings" element={<MeetingsPage />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
      <Navigation/>
    </Router>
  );
}

export default App;
