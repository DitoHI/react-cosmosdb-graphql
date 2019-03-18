import * as React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import '../styles/MenuItem.css';

interface State {
  isOpen: boolean;
}

class MenuItem extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar light expand="sm" className="wrapper--introduction__parent">
        <NavbarBrand className="wrapper--introduction__brand">Me</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={isOpen} navbar className="wrapper--introduction__collapsed-toolbar">
          <Nav navbar>
            <NavItem>
              <NavLink className="wrapper--introduction__navbar__link">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="wrapper--introduction__navbar__link">Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="wrapper--introduction__navbar__link">Project</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MenuItem;
