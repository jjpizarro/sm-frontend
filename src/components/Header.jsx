import React from 'react';
import {
        Link
  } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export default function Header() {
    const{isAuthenticated,logout} = React.useContext(AuthContext);
    const handleLogout = (ev)=>{
        ev.preventDefault();
        logout();
    }
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {isAuthenticated() && (<li>
            <a href="/#" onClick={handleLogout}>Salir</a>
          </li>)}
        </ul>
      </nav>
    );
  }