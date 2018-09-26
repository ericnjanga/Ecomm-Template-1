import React from 'react';
import { toggleText } from './../../utilities/func/mix1.js';
import ListComponent from './../../utilities/lists/ListComponent.js';
import BrandLogo from './../BrandLogo.js';

 


const AdminSidebar = ({
  data,
  togglePages,
  toggleSidebar,
  isOpen,
}) => {

  // console.log('data=', data);
  return (
    <React.Fragment>
      
      <BrandLogo
        className="app__brand"
        handleClick={toggleSidebar}
        active={isOpen}
        hasToggleButton
      />

      
      { /* <ListActiveComponent /> not needed here (we'll use the active state for styling only) */ }
      <ListComponent
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
                  { /* <ListActiveComponent /> not needed here (we'll use the active state for styling only) */ }
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
      />
    </React.Fragment>
  );
};

export default AdminSidebar;
