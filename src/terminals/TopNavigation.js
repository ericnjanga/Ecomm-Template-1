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

    console.log('-2- TopNavigation');

    return (
      <Navbar
        // color="light"
        dark
        fixed="top"
        expand="md"
      >
        <div className="container">
          <NavLink to="/items" className="text-uppercase navbar-brand">
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
              {/* <NavItem>
                <NavLink href="/admin">admin</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink to="/admin" activeClassName="selected">admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/items" activeClassName="selected">items</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
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
              </UncontrolledDropdown>
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
//           <NavLink to={`/items`}>Home</NavLink>
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
