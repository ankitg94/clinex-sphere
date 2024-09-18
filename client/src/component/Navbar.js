import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Health Report System</h1>
        <ul className="nav-links">
          <li><Link className="nav-link" to="/login">Login</Link></li>
          <li><Link className="nav-link" to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
