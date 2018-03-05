import React, { Component } from 'react';
import './resources/styles/App.css';
import NavBar from './NavBar.js';
import ModalArticle from './components/ModalArticle.js'						
import ArticleColumns from './constants/ArticleColumns.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar /> 
        <ArticleColumns />     
      </div>
    );
  }
}

export default App;
