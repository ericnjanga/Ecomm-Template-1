import React from 'react';
import { GlobalContext } from './../settings/basics.js';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
  render() {

    // console.log('-2- TopNavigation');

    return (
      <Navbar
        // color="light"
        dark
        fixed="top"
        expand="md"
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
              <NavItem>
                <NavLink to="/" exact activeClassName="selected">items</NavLink>
              </NavItem>

              <GlobalContext.Consumer>
                {
                  (global) => (
                    global && global.user &&
                    // console.log('==============global.user.isAdmin', global.user.isAdmin )
                    global && global.user && global.user.isAdmin===true &&
                    <NavItem>
                      <NavLink to="/admin" activeClassName="selected">admin</NavLink>
                    </NavItem>
                  )
                }
              </GlobalContext.Consumer>
                
              
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
