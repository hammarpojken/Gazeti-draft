import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';

import ArticleColumns from './constants/ArticleColumns.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />      

      </div>
    );
  }
}

export default App;
