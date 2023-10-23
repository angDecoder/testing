import React from 'react';
import { Routes, Route, Outlet,NavLink } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import './App.css';

function App() {
  return (
    <Routes>

      <Route path='/' element={
        <>
          <nav>
            <NavLink to={''} >
              Home
            </NavLink>
            <NavLink to={'auth/login'} >
              Login
            </NavLink>
            <NavLink to={'auth/register'} >
              Register
            </NavLink>
          </nav>
          <Outlet />
        </>

      }>

        <Route path='/' element={<Home />} />
        <Route path='auth' >
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App