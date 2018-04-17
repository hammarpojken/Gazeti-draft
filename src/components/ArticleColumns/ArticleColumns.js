import React from 'react'
import {CardColumns} from 'reactstrap'
import ArticleCard  from '../ArticleCard/ArticleCard.js'
import ModalArticle from '../ModalArticle/ModalArticle.js'

class ArticleColumns extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			articles: [],
			modalArticle: {}

		};
		this.showModal = this.showModal.bind(this)
		this.oncloseModal = this.oncloseModal.bind(this)
		

	}
	componentDidMount() {
	    fetch('http://localhost:8090/rest/apps/gazeti/searchers/gazeti?q=*')
	    .then(respons => respons.json())
	    .then(results => {
	    	const resultArray = []
			for(let i = 0; i < results.documentList.documents.length; i++) {
	      		resultArray.push(results.documentList.documents[i])
        	}
        	this.setState({
    		articles: resultArray
    	});
    	})
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