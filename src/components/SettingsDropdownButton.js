import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      topic: this.props.topic
    };
    
  }
  componentDidMount() {
    
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
        {this.props.topic}
        </DropdownToggle> 
        <DropdownMenu className=''>
          <DropdownItem onClick={this.props.handleClick}>Local News</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>National News</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Global News</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Financial</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Entertainment</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Gaming</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Innovations</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Life & Home</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Health</DropdownItem>
          <DropdownItem onClick={this.props.handleClick}>Sports</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}