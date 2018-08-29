import React from 'react';
import GetData from './../utilities/funcAsChild/getData.js';
import { toggleText } from './../utilities/func/mix1.js';
import { brandSetting } from './../settings/app-structure.js';

const BrandLogo = ({
  className,
  handleClick,
  active,
  hasToggleButton,
}) => {

  const defaultValue = brandSetting.title;
  
  return (
    <div className={`${toggleText(className, className, '')}`}>
      <h1 className={`${toggleText(className, className, '')}--text`}>
        <GetData
          url={'site-info/brand'}
          singleData
        >
          {
            (brand) => (
              brand ? brand['brand-name'] : defaultValue
            )
          }
        </GetData>
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
