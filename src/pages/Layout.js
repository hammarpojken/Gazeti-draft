import React, { Component } from 'react';
import NavBar from '../components/NavBar.js';
import { Link } from 'react-router';
import SearchBar from '../components/SearchBar.js'


class Layout extends Component {
  render() {
    return (
    	<div>
	      <div>
	        <NavBar />
	        <SearchBar />
	      </div>
	      <div>
	      	{this.props.children}
	      </div>
	    </div>
    );
  }
}

export default Layout;


