import React, { useState } from "react";
import "./header.css";
import { FaBell, FaComment, FaSearch, FaUser } from "react-icons/fa";

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [togglerIcon, setTogglerIcon] = useState("nav__toggler");

  const navToggler = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    togglerIcon === "nav__toggler"
      ? setTogglerIcon("nav__toggler toggler")
      : setTogglerIcon("nav__toggler");
  };

  return (
    <div className="header-container">
      <header className="header">
        <img className="logo" src="assets/Images/logo.png"/>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Explore
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Marketplace
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Creators
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Transfer's
            </a>
          </li>
        </ul>
        <div className="header-buttons-container">
          <button >
            <FaBell style={{ 
              color:'white',
              fontSize:'30px'
             }} />
          </button>
          <button >
          <FaComment style={{ 
              color:'white',
              fontSize:'30px',
            
             }}  />
          </button>
          <button>
            <FaUser style={{ 
              color:'white',
              fontSize:'30px'
             }} />
          </button>
          <div className="header-buttons">
            <button>Buy A MAs</button>
          </div>
          <div className="header-buttons">
            <button>Connect Wallet</button>
          </div>
        </div>
        <div onClick={navToggler} className={togglerIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;