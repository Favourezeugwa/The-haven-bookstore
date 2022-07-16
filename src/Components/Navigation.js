import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navigation.css';
import { FaUser } from 'react-icons/fa';

const Navigation = () => {
  const iconStyle = {
    color: '#0290ff',
    cursor: 'pointer',
  };

  return (
    <nav>
      <div className="navLogo">
        <h1 className="logo-title">Bookstore CMS</h1>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="/categories">
            CATEGORIES
          </Link>
        </li>
      </ul>
      <FaUser className="user-icon" style={iconStyle} />
    </nav>
  );
};

export default Navigation;
