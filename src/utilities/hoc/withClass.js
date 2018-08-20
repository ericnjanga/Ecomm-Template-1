
import React from 'react';
import PropTypes from 'prop-types';

/**
 * High-order Functions returning a component enriched with a specific className
 * @Component
 */

export const withBlueStyle = Component => props => {
  return (<Component
            {...props}
            className="style-blue"
          />);
};

export const withLimeStyle = Component => props => {
  return (<Component
            {...props}
            className="style-lime"
          />);
};