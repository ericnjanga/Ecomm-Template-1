import React from 'react';
import { toggleText } from './../utilities/func/mix1.js';
import { GlobalContext } from './../settings/basics.js';

const BrandLogo = ({
  className,
  handleClick,
  active,
  hasToggleButton,
}) => {
  
  return (
    <div className={`${toggleText(className, className, '')}`}>
      <h1 className={`${toggleText(className, className, '')}--text text-uppercase`}>
        <GlobalContext.Consumer>
          {
            (global) => (
              global.brand && global.brand.name
            )
          }
        </GlobalContext.Consumer>
      </h1>
      
      {
        hasToggleButton &&
        <button onClick={handleClick}>
          {
            toggleText(active, 'Close', 'Open') 
          }
        </button>
      }
      
    </div>
  )

};

export default BrandLogo;
