import React from 'react';
import '../resources/styles/NavBar.css';
import DropdownButton from './DropdownButton';
import ProfileIcon from './ProfileIcon';
import SearchBar from './SearchBar.js';
import { Link } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
 } from 'reactstrap';

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
              <SearchBar />           
              <ProfileIcon />
            </div>
        </Navbar>
      </div>
    );
  }
}
export default NavBar
