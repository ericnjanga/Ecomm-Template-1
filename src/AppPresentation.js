import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import ItemDetail from './terminals/widgets/itemDetail.js';
import Admin from './terminals/admin/Admin.js';
import VisitorPresentation from './terminals/visitor/VisitorPresentation.js';
import AdminLogin from './terminals/admin/login';
import DialogInfo from './terminals/widgets/DialogInfo.js'
import TopNavigation from './terminals/TopNavigation.js';
import { GlobalContext } from './settings/basics.js';
import { TEXT_COPY } from './settings/language-and-text.js';
import CheckBoxOffIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOnIcon from '@material-ui/icons/CheckBox';
import Page404 from './terminals/404Page';


class AppPresentation extends React.Component {

  render() {

    const {
      authPanel, 
      handleUserLogin,
      dialogInfo,
      appLoader,
    } = this.props;

    if(!appLoader.firstRenderReady) {
      return (
        <section className="app-preloder">
          <div className="app-preloder__frame">
            <h3>{ TEXT_COPY.gen.loading } ...</h3>
            <ul>
              <li className={appLoader.appInfo ? 'active' : ''}>
                {
                  appLoader.appInfo ?  <CheckBoxOnIcon className="app-preloder__icon" /> : <CheckBoxOffIcon className="app-preloder__icon" />
                }
                { TEXT_COPY.appInit.settings }
              </li>
              <li className={appLoader.userInfo ? 'active' : ''}>
                {
                  appLoader.userInfo ?  <CheckBoxOnIcon className="app-preloder__icon" /> : <CheckBoxOffIcon className="app-preloder__icon" />
                }
                { TEXT_COPY.appInit.userInfo }
              </li>
            </ul>
          </div>
        </section>
      );
    }



    console.log('[render] -AppPresentation');

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
            
            
            <Switch>
              {/* Home screen */}
              <Route 
                path={'/'}
                exact
                render={
                  () => {
                    return(
                      <React.Fragment>
                        <TopNavigation />
                        <VisitorPresentation
                          authPanel={authPanel}
                          handleUserLogin={handleUserLogin}
                        />
                      </React.Fragment>
                    )
                  }
                }
              />


              {/* 
                Admin: 
                If user cannot authenticate, any handle after '/admin/' must redirect to '/admin'
              */}
              <Route path={'/admin'} render={(props) => (
                <React.Fragment>
                  <AdminLogin />
                  <Route path={'/admin/:id'} render={(props) => (
                    <GlobalContext.Consumer>
                      {
                        (global) => (
                          global && global.admin ?
                          <Admin />
                          :
                          <Redirect
                            to={{
                              pathname: "/admin",
                              state: { from: props.location }
                            }}
                          />
                        )
                      }
                    </GlobalContext.Consumer>
                  )} />
                  
                  <Admin />
                </React.Fragment>
              )} />
              
            
              {/* Home screen will render for any 404 page */}
              <Route 
                render={
                  () => {
                    return(
                      <React.Fragment>
                        <TopNavigation />
                        <Page404 />
                      </React.Fragment>
                    )
                  }
                }
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
