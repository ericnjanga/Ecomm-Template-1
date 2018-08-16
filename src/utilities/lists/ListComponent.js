

import React from 'react';
/*
 * Map a data list and each item, returns React Component
*/
const ListComponent = ({ data: listData, Component, className }) => {

  if (!listData) {

    return false;

  }

  return (
    <React.Fragment>
      {
        Component && listData.map((item, itemIndex) => (
          <React.Fragment key={item.id}>
            { Component(item, itemIndex) }
          </React.Fragment>
        ))
      }
    </React.Fragment>
  );

};

export default ListComponent;
