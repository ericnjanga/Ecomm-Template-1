import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch/*, Redirect*/ } from "react-router-dom";

import ItemDetail from './terminals/widgets/itemDetail.js';
import Box from './utilities/comps/Box.js';

import AuthContent from './terminals/pageContents/AuthContent.js';
import HomeHero from './terminals/pageContents/HomeHero.js';
import HomeFocus from './terminals/pageContents/HomeFocus.js';
import HomeContent from './terminals/pageContents/HomeContent.js';
import HomeFooter from './terminals/pageContents/HomeFooter.js';
import AdminSidebar from './terminals/AdminSidebar.js';
import AdminContent from './terminals/AdminContent.js';


// DELETE THESE FILES
// import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
// import Divider from './terminals/Divider.js';


import TopNavigation from './terminals/TopNavigation.js';
import { toggleText } from './utilities/func/mix1.js';
import { GlobalContext } from './settings/basics.js';


class AppPresentation extends React.Component {
  // componentDidMount() {
  //   console.log('-2- AppPresentation mounted');
  // }

  /**
   * ---------------------------
   * UPDATE COMPONENT IF:
   * - shouldUpdate props is positive (managed from the global function)
   * ---------------------------
   */
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('-[AppPresentation] shouldComponentUpdate: [this.props]=', this.props.shouldUpdate);
    // console.log('-[AppPresentation] shouldComponentUpdate: [nextProps]=', nextProps.shouldUpdate);
    return nextProps.shouldUpdate;
  }


  render() {

    const {
      screens,
      views,
      handleToggleSidebar,
      handleAdminPageToggle,
      handleUserLogin,
      handleAdminDataSubmit,
    } = this.props;

    return(
      <React.Fragment>
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
        

        <Router>
          <div className="Et1">
            
            <TopNavigation />
            
            {/* Auth screen */}
            {
              views.auth.active &&
              <Box className="screen full-screen auth content">
                <AuthContent
                  handleLogin={handleUserLogin}
                />
              </Box>
            }
            


            <Switch>
              {/* Home screen */}
              <Route path={'/'} exact render={(props) => (
                <Box className="screen">
                  <HomeHero />
                  <HomeFocus />
                  <HomeContent />
                  <HomeFooter />
                </Box> 
              )} />


            
              {/* Admin */}
              <Route path={'/admin'} exact render={(props) => (
                <Box className="screen admin full-screen overflow-y-scroll">
                  <div className="screen undefined admin sidebar isOpen">
                    <AdminSidebar
                      // data={sections}
                      toggleSidebar={handleToggleSidebar}
                      togglePages={handleAdminPageToggle}
                      className="$$$$$"
                      isOpen={true}
                    />
                  
                    <AdminContent
                      // data={sections}
                      handleSubmit={handleAdminDataSubmit}
                      togglePages={handleAdminPageToggle}
                    />
                  </div>
                </Box> 
              )} />


              
              {/* Home screen will render for any 404 page */}
              <Route render={(props) => (
                <Box className="screen">
                  <HomeHero />
                  <HomeFocus />
                  <HomeContent />
                  <HomeFooter />
                </Box> 
              )} />

            </Switch>



            {/* <ListActiveComponent
              data={screens}
              Component={
                (screen)=> (
                  <Route path={screen.path} exact render={(props) => (
                    
                      <Box className={screen.className}>
                         
                        {
                          screen.dividers && 
                          <ListActiveComponent
                            data={screen.dividers}
                            Component={
                              (divider)=> (
                                <React.Fragment>
                                   
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
                                   
                                </React.Fragment>
                              )
                            }
                          />
                        }
                      </Box>
                    
                  )} />
                )
              }
            /> */}


            {/* Home page loads the list of items */}
            {/* <Redirect exact from="/" to="/" /> */}
          </div>  
        </Router>
      </React.Fragment>


    );
  }

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
