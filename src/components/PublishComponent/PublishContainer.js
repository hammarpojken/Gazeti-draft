import React from 'react'
import UploadImage from './UploadImage/UploadImage.js'
import ArticleInput from './ArticleInput/ArticleInput.js'
import TopicPicker from './TopicPicker/TopicPicker.js'
import TagPicker from './TagPicker/TagPicker.js'
import PublishSchedule from './PublishSchedule/PublishSchedule.js'
import InputButtons from './InputButtons/InputButtons.js'
import ElementPicker from './ElementPicker/ElementPicker.js'
import ModalArticle from '../ModalArticle/ModalArticle.js'
import './PublishContainer.css'


class PublishContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: 'Topics',
			img: undefined,
			main_img_url: '',
			author: 'Pontus Hammar',
			showModal: false,
			modalArticle: {}

		}
		this.handleTopic = this.handleTopic.bind(this)
		this.handlePublish = this.handlePublish.bind(this)
		this.handleDeleteInput = this.handleDeleteInput.bind(this)
		this.handleUpload = this.handleUpload.bind(this)
		this.showModal = this.showModal.bind(this)
		this.oncloseModal = this.oncloseModal.bind(this)
		
	}



	handlePublish() {
		let {author, imgUrl, topic} = this.state
        let title = document.getElementById('title').value
        let preamble = document.getElementById('preamble').value
        let content = document.getElementById('content').value
		let id = (author + title).replace(/ /g,"-");
     	let date = new Date();
        
        let article= [{
            id: id,
            fields: [
                
                {name: 'title', type:'string', value:title},
                {name: 'preamble', type:'string', value:preamble},
                {name: 'main_content', type:'string', value:content},
               	{name: 'topic', type:'string', value:topic},
                {name: 'main_img_url', type:'string', value:imgUrl},
                {name: 'timestamp', type:'string', value:date},
                {name: 'author', type:'string', value:author}
            ],

        }]
        fetch("http://localhost:8080/rest/gazeti_processed/documents.json", {
              method: "POST",
              headers: {
                   
              },
              body: JSON.stringify(article)
            }).then(result => {return result})

        console.log(JSON.stringify(article))
	}

	handleDeleteInput() {

		if(window.confirm('Are you sure about this?')) {
			document.querySelector('#title').value = '';
			document.querySelector('#preamble').value = '';
			document.querySelector('#content').value = '';

		}	
	}
	
	handleTopic(event) {
		this.setState({
			topic: event.target.firstChild.nodeValue
		});
	}
	handleUpload(imgName, imgUrl) {
		this.setState({img: imgName, main_img_url: imgUrl})
		
	}

	showModal(id) {
		let article = {
			main_img_url: this.state.main_img_url,
			title: document.querySelector('#title').value,
			preamble: document.querySelector('#preamble').value,
			main_content: document.querySelector('#content').value,
			timestamp: '2012-02-12',
			author: this.state.author,

		}
		this.setState({
			showModal: !this.state.showModal,
			modalArticle: article,
		});

	}
	oncloseModal() {
		this.setState({showModal: !this.state.showModal})
	}


	render() {
		let modal = this.state.showModal ? (
			<ModalArticle 
					show={this.state.showModal} 
					article={this.state.modalArticle}
					oncloseModal={this.oncloseModal} />	
			) : (
			<div>

			</div>
			)
		
		return(
			<div id='publish-wrapper'>
				<div id='content-wrapper'>	
					<UploadImage onChange={this.handleUpload} imgSelected={this.state.img} author={this.state.author} />
					<ArticleInput />
					<InputButtons 
					handleDeleteInput={this.handleDeleteInput} 
					handlePublish={this.handlePublish}
					showModal={this.showModal} />
				</div>
				<div id='settings-wrapper'>
					<ElementPicker />
					<TopicPicker topic={this.state.topic} handleTopic={this.handleTopic} />
					<TagPicker />
					<PublishSchedule /> 
				</div>
				{modal}			
			</div>
		)

	}

}
export default PublishContainer

