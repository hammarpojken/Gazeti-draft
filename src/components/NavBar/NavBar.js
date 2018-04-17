import React from 'react';
import DropdownButton from '../DropdownButton/DropdownButton.js';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 } from 'reactstrap';
 import './NavBar.css';


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
    return (
      <div className='wrapper'>
        <Navbar color="faded" light expand="md">
            <div className='main'>
              <Nav className="" navbar>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                 	<DropdownButton />
                 	<NavItem className='title'>
                    <Link to='Home' className='link'>
        				      GAZETI
                    </Link>
        			    </NavItem>
            		</div>                      
              </Nav>
            </div>
            <div className='right-side'>
                      
              <ProfileIcon />
            </div>
        </Navbar>
      </div>
    );
  }
}
export default NavBar
