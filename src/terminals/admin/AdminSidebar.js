import React from 'react';
import { toggleText } from './../../utilities/func/mix1.js';
import ListComponent from './../../utilities/lists/ListComponent.js';
import BrandLogo from './../BrandLogo.js';
import { NavLink } from "react-router-dom";

 


const AdminSidebar = ({
  data,
  togglePages,
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

      
      { /* <ListActiveComponent /> not needed here (we'll use the active state for styling only) */ }
      {/* <ListComponent
        data={data}
        Component={
          (sidebarItem)=>(
            <div className={`menu ${toggleText(sidebarItem.active, 'active', '')}`}>
              <button
                onClick={()=>{ togglePages(data, sidebarItem.name) }}
              >
                { sidebarItem.title }
              </button>
              {
                sidebarItem.items &&
                <ul> 
                  <ListComponent
                    data={sidebarItem.items}
                    Component={
                      (subitem, subitemIndex)=>(
                        <li className={`${toggleText(subitem.active, 'active', '')}`}>
                          <button
                            onClick={()=>{ togglePages(sidebarItem.items, subitem.name, sidebarItem.id) }}
                          >{ subitem.title }</button>
                        </li>
                      )
                    }
                  />
                </ul>
              }
            </div>
          )
        }
      /> */}
    </section>
  );
};

export default AdminSidebar;
