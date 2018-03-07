import React, { Component } from 'react';
import '../resources/styles/Home.css';
import ModalArticle from '../components/ModalArticle.js'						
import ArticleColumns from '../constants/ArticleColumns.js'
import { Link } from 'react-router'
 

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ArticleColumns />     
      </div>
    );
  }
}

export default Home;
