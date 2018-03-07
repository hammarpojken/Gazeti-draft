import React, { Component } from 'react';
import '../resources/styles/App.css';
import NavBar from '../NavBar.js';
import ModalArticle from '../components/ModalArticle.js'						
import ArticleColumns from '../constants/ArticleColumns.js'
import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="App">
      	<NavBar />
      	<Link to='Publish'>Publish</Link>
        <Link to='App'>Home</Link>   
        <ArticleColumns />     
      </div>
    );
  }
}

export default App;
