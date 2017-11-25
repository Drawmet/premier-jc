import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, NavDropdown,
            DropdownToggle, DropdownItem, DropdownMenu, Input, Label, FormGroup, Button} from 'reactstrap';

export default class Navba extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false,
          dropDownOpen: false,
          popoverOpen: false,
          user: {
            username: '',
            password: '',
          }
        };
      }

      handleUsernameOnChange = (e) => {
        this.setState({
          user: { ...this.state.user, username: e.target.value }
        })
      }

      handlePasswordOnChange = (e) => {
        console.log(this.state.user);
        this.setState({
          user: { ...this.state.user, password: e.target.value }
        })
      }



      toggleDropdown = () => {
        this.setState({
          dropDownOpen: !this.state.dropDownOpen,   
        });
      }
      
      toggleCollapse = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      tooglePopover = () => {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        })
      }
      

      render() {
        const data = this.props.data;
        let switchLanguage = this.props.switchLanguage;
        const getAuthentification = this.props.getAuthentification;

        console.log(this.state.user)

        return (
          <div>
            <Navbar color={this.props.color} dark={this.props.dark} light={this.props.light} expand="md">
              <NavbarBrand href="/">PremierJC</NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse isOpen={this.state.isOpen} navbar={true}>
                    <Nav className="ml-auto" navbar={true}>
                      <NavDropdown isOpen={this.state.popoverOpen} toggle={this.tooglePopover}>
                        <DropdownToggle nav={true} caret={true}>Sign In</DropdownToggle>
                        <DropdownMenu>
                            <FormGroup className="dropdown-item">
                              <Label for="username">Username</Label>
                              <Input type="text" name="username" id="username" placeholder="Username" onChange={this.handleUsernameOnChange} />
                            </FormGroup>
                            <FormGroup className="dropdown-item">
                              <Label for="password">Password</Label>
                              <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handlePasswordOnChange}/>
                            </FormGroup>
                            <FormGroup className="dropdown-item">
                              <Button onClick={() => getAuthentification(this.state.user)}>Sign In</Button>
                            </FormGroup>
                        </DropdownMenu>
                      </NavDropdown>
                        <NavItem>
                            <NavLink href="/">{data.home}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">{data.faq}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">{data.contacts}</NavLink>
                        </NavItem>
                        <NavDropdown isOpen={this.state.dropDownOpen} toggle={this.toggleDropdown}>
                          <DropdownToggle nav={true} caret={true}>
                            {data.lang}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem href="#" data-content="#" onClick={switchLanguage.bind(this,'en')}>English</DropdownItem>
                            <DropdownItem href="#" data-content="#" onClick={switchLanguage.bind(this,'ru')}>Русский</DropdownItem>
                          </DropdownMenu>
                        </NavDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
          </div>
        );
      }
}

