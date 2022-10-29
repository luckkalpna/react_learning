import React from "react";
import "./App.css";

function Nav(props) {
	return (
		<div className="navbar">
      <h1 className="logo">Page</h1>
        <a href="/" className="links">Home</a>
        <a href="/about" className="links">About</a>
        <a href="/contact" className="links">Contact</a>
        <a href="/info" className="links">Info</a>
    </div>
	);
}

export default Nav;
