
import React from "react";
import { Link } from "react-router-dom";
import "../Nav/Nav.css"

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <ul className="nav-links">
        <img src="https://o.remove.bg/downloads/f02de54b-7fb4-4f4e-a7b2-6ce050912cd6/1501482867_K8bab2_69888-removebg-preview.png" />
        <h1>NIPPON</h1>
        <br/>
        <h2>PAINT</h2>
        
        <Link to="/products" className="list">
          Products
        </Link>
        <Link to="/contact" className="list">
          Contact Us
        </Link>
        <Link to="/about" className="list">
          About Us
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
