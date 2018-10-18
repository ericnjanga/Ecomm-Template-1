import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import ItemDetail from './terminals/widgets/itemDetail.js';
import Admin from './terminals/admin/Admin.js';
import CarsPresentation from './terminals/visitor/CarsPresentation.js';
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
      adminActive,
      authPanel, 
      handleAdminLogin,
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
              {/* 
                Welcome screen:
                --------------
                - Top nav (visible)
                - Cars presentation
              */}
              <Route 
                path={'/'}
                exact
                render={
                  () => {
                    return(
                      <React.Fragment>
                        <TopNavigation />
                        <CarsPresentation
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
                ------
                - Unauthenticated users:
                -- Redirected to'/admin/'
                -- Never get to '/admin/:id'
                -- Top nav (not visible)
                - Authenticated users:
                -- Redirected to '/admin/:id'
                -- Never get to '/admin/'
                -- Top nav (visible)
              */}
              <Route path={'/admin'} render={(props) => (
                <React.Fragment>
                  {/* Declaring '/admin/' route with content (redirecting to 'admin landing' if authenticated) */}
                  <GlobalContext.Consumer>
                    {
                      (global) => (
                        global && global.adminUser ? 
                        <Redirect to={{ pathname:'/admin/admin-user' }} />
                        :
                        <AdminLogin
                          handleLogin={handleAdminLogin}
                        />
                      )
                    }
                  </GlobalContext.Consumer>
                  {/* Declaring '/admin/:id' route with content (redirecting to 'admin login' if unauthenticated) */}
                  <Route path={'/admin/:id'} render={(props) => (
                    <GlobalContext.Consumer>
                      {
                        (global) => (
                          global && global.adminUser ? 
                          <React.Fragment>
                            <TopNavigation />
                            <Admin />
                          </React.Fragment>
                          :
                          <Redirect to={{ pathname:'/admin' }} />
                        )
                      }
                    </GlobalContext.Consumer>
                  )} />
                </React.Fragment>
              )} />
              
            
              {/*
                404 Page: 
                ---------
                - Top nav (visible)
                - 404 content
              */}
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
