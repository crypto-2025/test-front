
import React, { useState, useRef, useEffect } from 'react';
import './header3.css';
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button/button';

const   Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false); 
 
  const menuRef = useRef(null); 

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); 
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // إغلاق القائمة إذا تم النقر خارجها
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className='logo1_contanier'>
        <img className="logo1" src="assets/Images/logo.png" alt="Logo" />
      </div>

    <div className='right'>
    <div className="search-container1">
        {isSearchVisible && (
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onBlur={() => setSearchVisible(false)}
          />
        )}
        <FaSearch
          style={{ fontSize: '20px', margin: '10px', cursor: 'pointer', color: 'rgb(80, 3, 95)' }}
          onClick={toggleSearch}
        />
      </div>

      <button className="burger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>



      <nav className={` nav-links1 ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <ul>
          <li><Link to="/bundles">Explore</Link></li>
          <li><Link to="/items">Marketplace</Link></li>
          <li><Link to="/creators">Creators</Link></li>
          <li><Link to="/user-list">Transfer</Link></li>



        </ul>


        <div className='btn_group'>
          <Button component="primaryButton">Create Profile</Button>

          <Link style={{ color: "white" }} to="/login">
            <Button component="primaryButton">LogIn</Button>

          </Link>
          <Link style={{ color: "white" }} to="/buymas"><Button component="primaryButton">Buy A Mas</Button></Link>
          <Link style={{ color: "white" }} to="/connectWallet"> <Button component="primaryButton">Connect Wallet</Button></Link>


        </div>




      </nav>


    </header>
  );
};

export default Header;


