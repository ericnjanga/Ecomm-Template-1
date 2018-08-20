import React from 'react';
import { toggleText } from './../utilities/func/mix1.js';
import ListActiveComponent from './../utilities/lists/ListActiveComponent.js';





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
      <ListActiveComponent
        data={data}
        Component={
          (sidebarItem, itemIndex)=>(
            <div className={`menu ${toggleText(sidebarItem.active, 'active', '')}`}>
              <button
                onClick={()=>{togglePages(data, sidebarItem.name)}}
              >
                { sidebarItem.title }
              </button>
              {
                sidebarItem.items &&
                <ul>
                    <ListActiveComponent
                      data={sidebarItem.items}
                      Component={
                        (subitem, subitemIndex)=>(
                          <li className={`${toggleText(subitem.active, 'active', '')}`}>
                            <button
                              onClick={()=>{/*this.togglePages(sidebarItem.items, subitem.name, itemIndex)*/}}
                            >{ subitem.name }</button>
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
