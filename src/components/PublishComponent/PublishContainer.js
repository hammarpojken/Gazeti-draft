import React from 'react'
import UploadImage from './UploadImage/UploadImage.js'
import ArticleInput from './ArticleInput/ArticleInput.js'
import TopicPicker from './TopicPicker/TopicPicker.js'
import TagPicker from './TagPicker/TagPicker.js'
import PublishSchedule from './PublishSchedule/PublishSchedule.js'
import InputButtons from './InputButtons/InputButtons.js'
import ElementPicker from './ElementPicker/ElementPicker.js'
import './PublishContainer.css'


class PublishContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: 'Topics',
			img: undefined,
			imgUrl: '',
			author: 'Pontus Hammar',

		}
		this.handleTopic = this.handleTopic.bind(this)
		this.handlePublish = this.handlePublish.bind(this)
		this.handleDeleteInput = this.handleDeleteInput.bind(this)
		this.handleUpload = this.handleUpload.bind(this)
		
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
                {name: 'timestamp', type:'string', value:date}
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
		this.setState({img: imgName, imgUrl: imgUrl})
		
	}

	render() {
		return(
			<div id='publish-wrapper'>
				<div id='content-wrapper'>	
					<UploadImage onChange={this.handleUpload} imgSelected={this.state.img} author={this.state.author} />
					<ArticleInput />
					<InputButtons handleDeleteInput={this.handleDeleteInput} handlePublish={this.handlePublish} />
				</div>
				<div id='settings-wrapper'>
					<ElementPicker />
					<TopicPicker topic={this.state.topic} handleTopic={this.handleTopic} />
					<TagPicker />
					<PublishSchedule /> 
				</div>
			</div>
		)

	}

}
export default PublishContainer

