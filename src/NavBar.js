import React from 'react';
import './NavBar.css';
import DropdownButton from './DropdownButton';
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

class NavBar extends React.Component {
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
  	console.log('navbar')
    return (
      <div>
        <Navbar color="faded" light expand="md" className='Navback'>
            <Nav className="" navbar>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
             	<DropdownButton />
             	<NavItem className='title'>
    				GAZETI
    			</NavItem>
    		</div>
              
            </Nav>
        </Navbar>
      </div>
    );
  }
}
export default NavBar
