import React, { Component } from 'react';
import NavBar from '../NavBar.js';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />	
        <Link to='Publish'>Publish</Link>
        <Link to='App'>Home</Link>
      </div>
    );
  }
}


