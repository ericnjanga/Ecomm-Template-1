import React from 'react';
import { toggleText } from './../../utilities/func/mix1.js';
import BrandLogo from './../BrandLogo.js';
import { NavLink } from "react-router-dom";

 


const AdminSidebar = ({
  toggleSidebar,
  isOpen,
  className
}) => {

  // console.log('data=', data);
  return (
    <section className={`${className} ${toggleText(isOpen, 'isOpen', '')}`}>
      
      <BrandLogo
        className="app__brand"
        handleClick={toggleSidebar}
        active={isOpen}
        hasToggleButton
      />

      <nav>
        <h2>Site Info</h2>
        <ul>
          <li>
            <NavLink to="/admin/admin-user" exact activeClassName="selected">Admin User</NavLink> 
          </li>
          <li>
            <NavLink to="/admin/brand" exact activeClassName="selected">Brand</NavLink> 
          </li>
          <li>
            <NavLink to="/admin/system" exact activeClassName="selected">System</NavLink>
          </li>
        </ul>

        <h2>Products</h2>
        <ul>
          <li>
            <NavLink to="/admin/create-products" exact activeClassName="selected">Create a product</NavLink>
          </li>
          <li>
            <NavLink to="/admin/list-products" exact activeClassName="selected">Product List</NavLink>
          </li>
        </ul>


        <h2>Subscriptions</h2>
        <ul>
          <li>
            <NavLink to="/admin/subscriptions" exact activeClassName="selected">All Subscriptions</NavLink>
          </li>
        </ul>

      </nav>
    </section>
  );
};

export default AdminSidebar;
