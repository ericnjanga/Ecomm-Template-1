import React from 'react';
import { toggleText } from './../utilities/func/mix1.js';
import ListComponent from './../utilities/lists/ListComponent.js';





// Text and button component with a couple of functionality
const TextAndButton = ({ className, btnState, text, handleClick }) => {
  return (
    <div className={`${toggleText(className, className, '')}`}>
      <h1 className={`${toggleText(className, className, '')}--text`}>{ text }</h1>
      <button onClick={handleClick}>
        {
          toggleText(btnState, 'Close', 'Open') 
        }
      </button>
    </div>
  );
};


const AdminSidebar = ({
  data,
  togglePages,
  toggleSidebar,
}) => {

  console.log('data=', data);
  return (
    <React.Fragment>
      <TextAndButton
        className="app__brand"
        text="Brand Name"
        btnState={true}
        handleClick={toggleSidebar}
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
