import React, { Component } from 'react';
import getCompDisplayName from './../func/getCompDisplayName.js';


/**
 * Only return the component if it's "active" property has true for value
 * @param {*} Component 
 */
export const withActiveProp = Component => props => {
  
  const WithActiveProp = props => {
    
    if(!props.active) {
      return false;
    }
    
    WithActiveProp.displayName = `WithActiveProp(${getCompDisplayName(Component)})`;
  
    return <Component {...props} />;
  };

  return WithActiveProp;
};
