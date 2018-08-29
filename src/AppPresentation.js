import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { GlobalContext } from './settings/basics.js';
import PreviewBox from './terminals/widgets/PreviewBox.js';
import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
import Divider from './terminals/Divider.js';
import ItemDetail from './terminals/widgets/itemDetail.js';
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
    <Router>
      <div className="Et1">
        {/* <h1>2) ... hide login for now</h1>
        <h1>3) ... trigger modal only when user navites to root/items/itemID</h1> */}
        {/*------------------------*/}
        {/*--- application root ---*/}
        {/*------------------------*/}
        
        <TopNavigation />


        <ListActiveComponent
          data={screens}
          Component={
            (screen)=> (
              <Route path={screen.path} render={(props) => (
                <React.Fragment>
                  {
                    screen.name === 'home' &&
                    <Route path={`${screen.path}/:itemId`} component={ItemDetail}
                    />
                  }
                  <Box className={`${screen.name!=='auth'?`screen ${screen.name} overflow-y-scroll`:``}`}>
                    {/*----------------------------*/}
                    {/*--- Each view (or screen ---*/}
                    {/*----------------------------*/}
                    <p style={{ position:'absolute', top:0, left:0, background:'lime' }}>{screen.title}</p>

                    <GlobalContext.Consumer>
                      {
                        (globals) => (
                        <PreviewBox
                          {...globals.user}
                        />)
                      }
                    </GlobalContext.Consumer>
                    

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
                </React.Fragment>
              )} />
            )
          }
        />


        {/* Home page loads the list of items */}
        {/* <Redirect exact from="/" to="/items" /> */}
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
