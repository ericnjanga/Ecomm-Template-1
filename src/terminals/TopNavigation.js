import React from 'react';
import { Link } from "react-router-dom";
import BrandLogo from './BrandLogo.js';

const TopNavigation = () => {

  return (
    <div className="top-navigation">
      <BrandLogo />
  
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="list-inline-item">
          <Link to={`/`}>Single</Link>
        </li>
        <li className="list-inline-item">
          <Link to={`/admin`}>Admin</Link>
        </li>
      </ul>
    </div>
  );

};




export default TopNavigation;
