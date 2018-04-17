import React, { Component } from 'react';
import './Home.css';
//import ModalArticle from '../../components/ModalArticle/ModalArticle.js'						
import ArticleColumns from '../../components/ArticleColumns/ArticleColumns.js'
//import RatingComp from '../../components/RatingComp/RatingComp.js'
//import { Link } from 'react-router'
import SearchBar from '../../components/SearchBar/SearchBar.js'
 

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
