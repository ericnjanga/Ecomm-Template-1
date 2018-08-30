import React from 'react';
import PropTypes from 'prop-types';
import AdminSidebar from './AdminSidebar.js';
import AdminContent from './AdminContent.js';
import Box from './../utilities/comps/Box.js';

import HomeHero from './../terminals/pageContents/HomeHero.js';
import HomeFocus from './../terminals/pageContents/HomeFocus.js';
import HomeContent from './../terminals/pageContents/HomeContent.js';
import HomeFooter from './../terminals/pageContents/HomeFooter.js';
import AuthContent from './../terminals/pageContents/AuthContent.js';





/**
 * 
 * @param {*} param0 
 */
const Divider = ({
  parentName,
  name,
  sections,
  togglePages,
  toggleSidebar,
  handleLogin,
  adminDataSubmit,
  className,
  isOpen,
}) => {


  let finalComponent;

  switch(parentName) {
    case 'auth':
      if(name==='content'){
        finalComponent = <AuthContent handleLogin={handleLogin} />;
      }
      break;

    case 'home':
      if(name==='hero'){
        finalComponent = <HomeHero />;
      } else if (name==='focus') {
        finalComponent = <HomeFocus />;
      } else if (name==='content') {
        finalComponent = <HomeContent />;
      } else if (name==='footer') {
        finalComponent = <HomeFooter />;
      }
      break;

    case 'admin':
      if(name==='sidebar'){
        finalComponent = (<AdminSidebar
          data={sections}
          toggleSidebar={toggleSidebar}
          togglePages={togglePages}
          className="$$$$$"
          isOpen={isOpen}
        />);
      } else if (name==='content') {
        finalComponent = (<AdminContent
          data={sections}
          handleSubmit={adminDataSubmit}
          togglePages={togglePages}/>);
      }
      break;
    
    default:
      finalComponent = 'false';
  }

  // console.log('>>>>finalComponent=', finalComponent);


  return (<Box className={className}>
    { finalComponent }
  </Box>);
};


// Props validation
Divider.propTypes = {
  parentName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.shape({})),
};

Divider.defaultProps = {
  sections: [],
};


export default Divider;
















