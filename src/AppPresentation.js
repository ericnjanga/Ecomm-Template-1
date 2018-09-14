import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route/*, Redirect*/ } from "react-router-dom";
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import Divider from './terminals/Divider.js';
import ItemDetail from './terminals/widgets/itemDetail.js';
import Box from './utilities/comps/Box.js';
import TopNavigation from './terminals/TopNavigation.js';
import { toggleText } from './utilities/func/mix1.js';
import { GlobalContext } from './settings/basics.js';


const AppPresentation = ({
  screens,
  handleToggleSidebar,
  handleAdminPageToggle,
  handleUserLogin,
  handleAdminDataSubmit,
}) => {


  console.log('-2- AppPresentation mounted');

  return(
    <Router>
      <div className="Et1">
        
        <TopNavigation />

        <GlobalContext.Consumer>
          {
            (global) => (
              <ItemDetail
                show={global.itemDetailModal}
                toggle={global.toggleItemDetailModal}
                data={global.itemDetail}
              />
            )
          }
        </GlobalContext.Consumer>
        

        <ListActiveComponent
          data={screens}
          Component={
            (screen)=> (
              <Route path={screen.path} exact render={(props) => (
                
                  <Box className={screen.className}>
                    {/*----------------------------*/}
                    {/*--- Each view (or screen ---*/}
                    {/*----------------------------*/}
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
                                className={`screen ${divider.className} ${screen.name} ${divider.name} ${toggleText(divider.isOpen, 'isOpen', '')}`}
                                // {...screen}
                              />
                              {/* <p>{item.name} - {divider.name}</p> */}
                            </React.Fragment>
                          )
                        }
                      />
                    }
                  </Box>
                
              )} />
            )
          }
        />


        {/* Home page loads the list of items */}
        {/* <Redirect exact from="/" to="/" /> */}
      </div>  
    </Router>
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
