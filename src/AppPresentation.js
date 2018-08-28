import React from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from './settings/basics.js';
import PreviewBox from './terminals/widgets/PreviewBox.js';
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import Divider from './terminals/Divider.js';
import Box from './utilities/comps/Box.js';
import TopNavigation from './terminals/TopNavigation.js';
import { toggleText } from './utilities/func/mix1.js';

const AppPresentation = ({
  screens,
  handleToggleSidebar,
  handleAdminPageToggle,
  handleUserLogin,
  handleAdminDataSubmit,
}) => {

  return(
    <GlobalContext.Consumer>
      {
        (globals) => (
          <div className="Et1">
            {/*------------------------*/}
            {/*--- application root ---*/}
            {/*------------------------*/}
            <ListActiveComponent
              data={screens}
              Component={
                (screen)=> (
                  <Box className={`screen ${screen.name} overflow-y-scroll`}>
                    <TopNavigation />
                    {/*----------------------------*/}
                    {/*--- Each view (or screen ---*/}
                    {/*----------------------------*/}
                    <p style={{ position:'absolute', top:0, left:0, background:'lime' }}>{screen.title}</p>
                    <PreviewBox
                      {...globals.user}
                    />
                    {
                      screen.dividers && 
                      <ListActiveComponent
                        data={screen.dividers}
                        Component={
                          (divider)=> (
                            <React.Fragment>
                              {/*--------------------*/}
                              {/*--- Each divider ---*/}
                              {/*--------------------*/}
                              <Divider
                                parentName={screen.name}
                                sections={screen.sections ? [...screen.sections] : []}
                                {...divider}
                                toggleSidebar={handleToggleSidebar}
                                togglePages={handleAdminPageToggle}
                                handleLogin={handleUserLogin}
                                adminDataSubmit={handleAdminDataSubmit}
                                className={`screen ${screen.name} ${divider.name} ${toggleText(divider.isOpen, 'isOpen', '')}`}
                                // {...screen}
                              />
                              {/* <p>{item.name} - {divider.name}</p> */}
                            </React.Fragment>
                          )
                        }
                      />
                    }
                  </Box>
                )
              }
            />
          </div>
        )
      }
    </GlobalContext.Consumer>
  );

};


// Props validation
AppPresentation.propTypes = {
  screens: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleToggleSidebar: PropTypes.func.isRequired,
  handleAdminPageToggle: PropTypes.func.isRequired,
  handleUserLogin: PropTypes.func.isRequired,
  handleAdminDataSubmit: PropTypes.func.isRequired,
};

AppPresentation.defaultProps = {
};


export default AppPresentation;
