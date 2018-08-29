import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import BrandLogo from './BrandLogo.js';

const TopNavigation = () => (
  <div className="top-navigation">
    <BrandLogo />

    <ul className="list-inline">
      <li className="list-inline-item">
        <Link to={`/`}>Auth</Link>
      </li>
      <li className="list-inline-item">
        <Link to={`/`}>Home</Link>
      </li>
      <li className="list-inline-item">
        <Link to={`/`}>Single</Link>
      </li>
      <li className="list-inline-item">
        <Link to={`/`}>Admin</Link>
      </li>
    </ul>
  </div>
);

export default TopNavigation;
