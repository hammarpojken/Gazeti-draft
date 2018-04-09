import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
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
        <DropdownToggle caret className=''>
        Topics
        </DropdownToggle> 
        <DropdownMenu className=''>
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
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}