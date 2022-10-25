import React from "react";
import "./App.css";
import {Link} from 'react-router-dom';

function Nav() {
	return (
		<nav className="nav">
      <h1>Logo</h1>
      <ul className="nav-links">
        <li>
        <Link to ='/'>Home</Link>
        </li>
        <li>
          <Link to ='/about'>About</Link>
        </li>
        <li>
          <Link to ='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
	);
}

export default Nav;
