import React from 'react';
import './styles/header.css';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="highlight">Health</span><span>care.</span>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
        <div className="notification-icon">
          <FaBell />
        </div>
      </div>
    </header>
  );
};

export default Header;
