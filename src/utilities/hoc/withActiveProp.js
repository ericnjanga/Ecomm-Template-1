import React from 'react';
import {getCompDisplayName} from './../func/mix1.js';


/**
 * Only return the component if it's "active" property has true for value
 * @param {*} Component 
 * 
 * Example implementation: const Comp = withActiveProp(Component)();
 */
export const withActiveProp = Component => props => {
  
  // Function which:
  // - Helps name the High Order Component
  // - Attaches the decorating functionality
  // - Truely returns the component
  const NameWrapper = props => {

    NameWrapper.displayName = `WithActiveProp(${getCompDisplayName(Component)})`;
    
    if(!props.active) {
      return false;
    }
    
    return <Component {...props} />;
  };

  return NameWrapper;
};
