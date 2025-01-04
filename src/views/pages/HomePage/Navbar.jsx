import React from "react";
import './Navbar.css';

function Navbar({text}) {
 

  return (
    <nav className="navbar">
   
     
      <button className="button">{text}</button>
    </nav>
  );
}

export default Navbar;