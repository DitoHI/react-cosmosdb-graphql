import * as React from 'react';
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

import '../styles/Main.css';
import '../styles/MenuItem.css';

interface Props {
  refs: any[];
  showAlertViewNotReady: any;
}

interface State {
  isOpen: boolean;
}

class MenuItem extends React.Component<Props, State> {
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
    const { refs, showAlertViewNotReady } = this.props;
    const { isOpen } = this.state;
    return (
      <Navbar light expand="sm" className="wrapper--introduction__parent animated fadeInDown">
        <NavbarBrand onClick={() => {
          refs[0].current.scrollIntoView({ behavior: 'smooth' });
        }} className="wrapper--introduction__brand wrapper--introduction__navbar__link">
          <Button outline color="secondary wrapper--btn-outline-radius">
            Me
          </Button>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={isOpen} navbar className="wrapper--introduction__collapsed-toolbar">
          <Nav navbar>
            <NavItem onClick={() => {
              if (refs[1].current) {
                showAlertViewNotReady(false);
                refs[1].current.scrollIntoView({ behavior: 'smooth' });
              } else {
                showAlertViewNotReady(true, 'education');
              }
            }}>
              <NavLink
                className="wrapper--introduction__navbar__link
                wrapper--padding-left-right-20">
                <Button outline color="danger wrapper--btn-outline-radius">
                  Education
                </Button>
              </NavLink>
            </NavItem>
            <NavItem onClick={() => {
              if (refs[2].current) {
                showAlertViewNotReady(false);
                refs[2].current.scrollIntoView({ behavior: 'smooth' });
              } else {
                showAlertViewNotReady(true, 'project');
              }
            }}>
              <NavLink
                className="wrapper--introduction__navbar__link
                wrapper--padding-left-right-20">
                <Button outline color="danger wrapper--btn-outline-radius">
                  Project
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="wrapper--introduction__navbar__link
                wrapper--padding-left-right-20">
                <Button outline color="danger wrapper--btn-outline-radius">
                  Experience
                </Button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MenuItem;
