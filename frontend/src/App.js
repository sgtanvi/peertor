import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../src/componenets/Home';
import Login from '../src/componenets/Login';
import MeetingsPage from '../src/componenets/MeetingsPage';
import Navigation from '../src/componenets/Navigation';
import Search from '../src/componenets/Search';
import Signup from '../src/componenets/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/meetings' element={<MeetingsPage />}/>
        <Route path='/navigation' element={<Navigation />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </Router>
  );
}

export default App;
