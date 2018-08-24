import React from 'react';
import BrandLogo from './BrandLogo.js';

const TopNavigation = () => (
  <div className="top-navigation">
    <BrandLogo />

    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="#">Auth</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Home</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Single</a>
      </li>
      <li className="list-inline-item">
        <a href="#">Admin</a>
      </li>
    </ul>
  </div>
);

export default TopNavigation;
