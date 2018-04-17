import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';


class Layout extends Component {
  render() {
    return (
    	<div>
	      <div>
	        <NavBar /> 
	      </div>
	      <div>
	      	{this.props.children}
	      </div>
	    </div>
    );
  }
}

export default Layout;


