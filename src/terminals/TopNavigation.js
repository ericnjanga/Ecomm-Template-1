import React from 'react';
// import { NavLink } from "react-router-dom";
import BrandLogo from './BrandLogo.js';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
    return (
      <div>
        <Navbar
          color="light"
          light
          fixed="top"
          expand="md"
        >
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.pinterest.ca/pin/360780620132182510/" target="_blank">Layout Inspiration</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.pinterest.ca/pin/326370304220578446/" target="_blank">Admin Inspiration</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
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
