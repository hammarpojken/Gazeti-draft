import React, { Component } from 'react';
import './App.css';

import ArticleColumns from './constants/ArticleColumns.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <ArticleColumns />
      </div>
    );
  }
}

export default App;
