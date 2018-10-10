import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import ItemDetail from './terminals/widgets/itemDetail.js';
import Admin from './terminals/admin/Admin.js';
import AuthPresentation from './terminals/auth/AuthPresentation.js';
import VisitorPresentation from './terminals/visitor/VisitorPresentation.js';
import DialogInfo from './terminals/widgets/DialogInfo.js'
import TopNavigation from './terminals/TopNavigation.js';
import { GlobalContext } from './settings/basics.js';


class AppPresentation extends React.Component {

  render() {

    const {
      views, 
      handleUserLogin,
      dialogInfo,
    } = this.props;

    return(
      <React.Fragment>
        
        <DialogInfo
          {...dialogInfo}
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
