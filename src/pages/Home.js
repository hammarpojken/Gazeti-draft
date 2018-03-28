import React, { Component } from 'react';
import '../resources/styles/Home.css';
import ModalArticle from '../components/ModalArticle.js'						
import ArticleColumns from '../constants/ArticleColumns.js'
import RatingComp from '../constants/RatingComp.js'
import { Link } from 'react-router'
import SearchBar from '../components/SearchBar.js'
 

class Home extends Component {
  render() {
    return (
      <div className="home">
      	<SearchBar />
        <ArticleColumns />     
      </div>
    );
  }
}

export default Home;
