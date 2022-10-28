import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<nav className="nav">
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to ='/'>
          <li className="navStyle">Home</li>
        </Link>
        <Link to ='/about'>
          <li className="navStyle">About</li>
        </Link>
        <Link to ='/contact'>
          <li className="navStyle">Contact Us</li>
        </Link>
        <Link to ='/info'>
          <li className="navStyle">Info</li>
        </Link>
      </ul>
    </nav>
	);
}

export default Nav;
