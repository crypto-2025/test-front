import React, { useState } from "react";
import "./header2.css";
import { FaBell, FaComment, FaSearch, FaUser } from "react-icons/fa";

function () {
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
        <img className="logo" src="assets/logo.png"/>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="search-icon" />
        </div>
        <div >
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
        </div>
       
        <div style={{ display:'flex' }}>
        <div className="header-buttons">
            <button>Create Profile
            </button>
          </div>
          <div className="header-buttons">
            <button>LogIn
            </button>
          </div>
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