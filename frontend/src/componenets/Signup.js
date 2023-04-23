import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import LoginContext from '../context/login/LoginContext';
import Navigation from './Navigation'

function Login() {

//   localStorage.setItem('auth-token', null);

//   const context = useContext(LoginContext);
//   const {login} = context;

  const [creds, setCreds] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [auth, setAuth] = useState(localStorage.getItem('auth-token'));

  const loginClickHandler = () => {
    // login(creds.email, creds.password);
    // const authToken = localStorage.getItem('auth-token');
    // console.log(authToken);
    // if (auth !== null) {
    //   navigate('/');
    // }

    // else {
      navigate('/')
    // }
  }

  const inputHandler = (event) => {
    setCreds({...creds, [event.target.id] : event.target.value});
  }
  

  return (
    <div className='login-background'>
      <div className="login-area">
        <h1>Login</h1>
        <div className="input-area">
          <label htmlFor="email">Email</label>
          <input value={creds.email} type="text" id="email" />

          <label htmlFor="password">Password</label>
          <input value={creds.password} type="password" id="password" />
          
          <button className="login-btn">Login</button>
        </div>
        <Link to='/sign-up' className='login-option'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Login