import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem} from 'reactstrap';

export default class Navba extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          color: this.props.color,
          dark: this.props.dark,
          light: this.props.light,
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
            <Navbar color={this.state.color} dark={this.state.dark} light={this.state.light} expand="md">
              <NavbarBrand href="/">PremierJC</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contacts</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">FAQ</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
          </div>
        );
      }
}