import React from 'react';
import { Button } from 'reactstrap';

import { GlobalContext } from './../settings/basics.js';
import { TEXT_COPY } from './../settings/language-and-text.js';
import { NavLink } from "react-router-dom";
import { APP_PREFIX } from './../settings/basics.js';
import { localStorageRemove } from './../utilities/func/mix1.js';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

export default class TopNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  /**
   * Clear saved information and reload the page
   * (Admin info saved in the global context will be lost)
   */
  logout = () => {
    localStorageRemove({ prefix:`${APP_PREFIX}-`, name:'name' });
    localStorageRemove({ prefix:`${APP_PREFIX}-`, name:'email' });
    localStorageRemove({ prefix:`${APP_PREFIX}-`, name:'phone' });
    window.location.reload();
  }



  render() {

    return (
      <Navbar
        // color="light"
        dark
        fixed="top"
        expand="md"
        className="bg-dark1"
      >
        <div className="container">
          <NavLink to="/" className="text-uppercase navbar-brand">
            <GlobalContext.Consumer>
              {
                (global) => (
                  global.brand && global.brand.name
                )
              }
            </GlobalContext.Consumer>
          </NavLink>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>


              <React.Fragment>

                <GlobalContext.Consumer>
                  {
                    (global) => (
                      global && global.adminUser && 
                      <React.Fragment>
                        <NavItem>
                          <NavLink to="/" exact activeClassName="selected">Page d'acceuil</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink to="/admin" exact activeClassName="selected">Admin</NavLink>
                        </NavItem>
                      </React.Fragment>
                    )
                  }
                </GlobalContext.Consumer>
                <NavItem>
                  <Button
                    color="link"
                    onClick={this.logout}
                  >
                    { TEXT_COPY.nav.logout }
                  </Button>
                </NavItem>
              </React.Fragment>
                
              
              {/* HIDDING FILTERS FOR NOW */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Make
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Make 1
                  </DropdownItem>
                  <DropdownItem>
                    Make 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Make 3
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Colours
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Make 1
                  </DropdownItem>
                  <DropdownItem>
                    Make 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Make 3
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}




// const TopNavigation = () => {

//   return (
//     <div className="top-navigation">
//       <BrandLogo />
  
//       <ul className="list-inline">
//         <li className="list-inline-item">
//           <NavLink to={`/`}>Home</NavLink>
//         </li>
//         <li className="list-inline-item">
//           <NavLink to={`/`}>Single</NavLink>
//         </li>
//         <li className="list-inline-item">
//           <NavLink to={`/admin`}>Admin</NavLink>
//         </li>
//       </ul>
//     </div>
//   );

// };




// export default TopNavigation;
