
import React from 'react';
import { withActiveProp } from './../hoc/withActiveProp.js';
/*
 * Map a data list and each item, returns React Component
*/
 
const ListActiveComponent = ({ data: listData, Component }) => {


  if (!listData) {

    return false;

  }
  
  return (
    <React.Fragment>
      {
        listData.map((item, itemIndex) => {
          const Comp = withActiveProp(Component)();
          return (<Comp key={item.id} {...item} />);
        })
      }
    </React.Fragment>
  );

};

export default ListActiveComponent;
