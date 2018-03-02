import React from 'react';
import { 
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu, 
  DropdownItem } from 'reactstrap';
import './resources/styles/DropdownButton.css'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle className='button_menu'>
        <span className="navbar-toggler-icon b"></span>
        </DropdownToggle> 
        <DropdownMenu className='dropdown_menu'>
          <DropdownItem header>Categories</DropdownItem>
          <DropdownItem>Local News</DropdownItem>
          <DropdownItem>National News</DropdownItem>
          <DropdownItem>Global News</DropdownItem>
          <DropdownItem>Financial</DropdownItem>
          <DropdownItem>Entertainment</DropdownItem>
          <DropdownItem>Gaming</DropdownItem>
          <DropdownItem>Innovations</DropdownItem>
          <DropdownItem>Life & Home</DropdownItem>
          <DropdownItem>Health</DropdownItem>
          <DropdownItem>Sports</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>My Profile</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}