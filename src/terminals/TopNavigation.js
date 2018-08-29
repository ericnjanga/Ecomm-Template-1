import React from 'react';
import { NavLink } from "react-router-dom";
import BrandLogo from './BrandLogo.js';

const TopNavigation = () => {

  return (
    <div className="top-navigation">
      <BrandLogo />
  
      <ul className="list-inline">
        <li className="list-inline-item">
          <NavLink to={`/items`}>Home</NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink to={`/`}>Single</NavLink>
        </li>
        <li className="list-inline-item">
          <NavLink to={`/admin`}>Admin</NavLink>
        </li>
      </ul>
    </div>
  );

};




export default TopNavigation;
