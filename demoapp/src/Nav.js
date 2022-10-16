import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<nav className="nav">
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link to ='/about'>
        <li>About</li>
        </Link>
        <Link to ='/contact'>
        <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
	);
}

export default Nav;
