import React from 'react';
import PropTypes from 'prop-types';
import ListActiveComponent from './../utilities/lists/ListActiveComponent.js';
import AdminSidebar from './AdminSidebar.js';
import AdminContent from './AdminContent.js';
import Box from './../utilities/comps/Box.js';




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
  adminDataSubmit,
  className,
  isOpen,
}) => {


  // console.log('>>>>parentName=', parentName);


  let finalComponent;

  switch(parentName) {
    case 'home':
      if(name=='hero'){
        finalComponent = <HomeHero />;
      } else if (name=='focus') {
        finalComponent = <HomeFocus />;
      } else if (name=='content') {
        finalComponent = <HomeContent />;
      }
      break;

    case 'single':
      if(name=='hero'){
        finalComponent = <SingleHero />;
      } else if (name=='content') {
        finalComponent = <SingleContent />;
      }
      break;

    case 'admin':
      if(name=='sidebar'){
        finalComponent = (<AdminSidebar
          data={sections}
          toggleSidebar={toggleSidebar}
          togglePages={togglePages}
          className="$$$$$"
          isOpen={isOpen}
        />);
      } else if (name=='content') {
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








const HomeHero = () => {
  return <h2>DividerHomeHero</h2>;
};
const HomeFocus = () => {
  return <h2>DividerHomeFocus</h2>;
};
const HomeContent = () => {
  return <h2>DividerHomeContent</h2>;
};



const SingleHero = () => {
  return <h2>DividerSingleHero</h2>;
};
const SingleContent = () => {
  return <h2>DividerSingleContent</h2>;
};






