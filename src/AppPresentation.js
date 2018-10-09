import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch/*, Redirect*/ } from "react-router-dom";

import ItemDetail from './terminals/widgets/itemDetail.js';

import AuthPresentation from './terminals/auth/AuthPresentation.js';
import VisitorPresentation from './terminals/visitor/VisitorPresentation.js';

import Admin from './terminals/admin/Admin.js';

import AppSnackbar from './components/AppSnackbar.js';
import CircularProgressBar from './components/CircularProgressBar.js';




// DELETE THESE FILES
// import ListActiveComponent from './utilities/lists/ListActiveComponent.js';
// import Divider from './terminals/Divider.js';
import Box from './utilities/comps/Box.js';


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
  // shouldComponentUpdate(nextProps, nextState) {

  //   console.log('-nextProps.snackbar=', nextProps.snackbar);
  //   console.log('-this.props.snackbar=', this.props.snackbar);
  //   return nextProps.shouldUpdate;
  // }


  render() {

    const {
      views, 
      handleUserLogin,
      snackbar,
    } = this.props;

    return(
      <React.Fragment>
        
        <div
          style={{ position:'absolute', top:'100px', right:'0', zIndex:'9999' }}
        >
          <CircularProgressBar />
        </div>
          


        <AppSnackbar
          {...snackbar}
          vertical='bottom'
          horizontal='right'
          handleClose={snackbar.handleClose}
        />

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
            <AuthPresentation
              className="screen-auth screen-fixed opaque-black full-screen"
              active={views.auth.active}
              handleLogin={handleUserLogin}
            />
            
            <Switch>
              {/* Home screen */}
              <Route 
                path={'/'}
                exact
                component={VisitorPresentation}
              />

              {/* Admin (only if user is admin) */}
              <GlobalContext.Consumer>
                {
                  (global) => (
                    global && global.user &&
                    global && global.user && global.user.isAdmin===true ?
                    <Route path={'/admin'} render={(props) => (
                      <Admin />
                    )} />
                    :
                    <VisitorPresentation />
                  )
                }
              </GlobalContext.Consumer>
            
              {/* Home screen will render for any 404 page */}
              <Route 
                component={VisitorPresentation}
              />

            </Switch>



            {/* <ListActiveComponent
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
          </div>  
        </Router>
      </React.Fragment>


    );
  }

};


// Props validation
AppPresentation.propTypes = {
  handleUserLogin: PropTypes.func.isRequired, 
};

AppPresentation.defaultProps = {
};


export default AppPresentation;
