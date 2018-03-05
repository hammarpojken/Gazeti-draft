import React from 'react'
import {CardColumns} from 'reactstrap'
import ArticleCard  from './ArticleCard.js'
import articles from '../articles.js'
import ModalArticle from '../components/ModalArticle.js'

class ArticleColumns extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			articles: articles,
			modalArticle: {}

		};
		this.showModal = this.showModal.bind(this)
		this.oncloseModal = this.oncloseModal.bind(this)
		

	}

	
	renderArticle(articles){
		let articleArray = [];

		for(let i = 0; i < articles.length; i++) {
			articleArray.push(<ArticleCard key={this.state.articles[i]._id} props={articles[i]} onClick={() => this.showModal(i)} />);
		}

		return articleArray;
	
	}
	showModal(id) {
		this.setState({
			showModal: !this.state.showModal,
			modalArticle: this.state.articles[id]
		});
	}
	oncloseModal() {
		this.setState({showModal: !this.state.showModal})
	}

	render() {
		return(
			<div>
			<CardColumns>
				{this.renderArticle(this.state.articles)}
			</CardColumns>
			<ModalArticle show={this.state.showModal} onShow={this.showModal} oncloseModal={this.oncloseModal} article={this.state.modalArticle}/>
			
			</div>
			)
	
	}
}
export default ArticleColumns;