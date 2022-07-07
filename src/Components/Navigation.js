import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="navLogo">
      <h1>Bookstore CMS</h1>
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
  </nav>
);

export default Navigation;
