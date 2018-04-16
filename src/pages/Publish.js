import React from 'react'
import Editor from '../components/Editor.js';
import InputField from '../components/InputField.js'
import '../resources/styles/Publish.css'
import Profile from './Profile.js';
import SettingsDropdownButton from '../components/SettingsDropdownButton.js'
import SimpleReactFileUpload from '../components/SimpleReactFileUpload.js'



class Publish extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: 'Topics'
		}
		this.handleTopic = this.handleTopic.bind(this)
		
	}



	handlePublish() {
        let title = document.getElementById('title').value
        let preamble = document.getElementById('preamble').value
        let content = document.getElementById('content').value
        let topic = document.querySelector('#topic')

        
        let article= [{
            id: 'Pontus Hammar' + {title},
            fields: [
                
                {name: 'title', type:'string', value:title},
                {name: 'preamble', type:'string', value:preamble},
                {name: 'main_content', type:'string', value:content}
               // {name: 'topic', type:'string', value:topic}
                //{name: 'main_content', type:'string', value:mainContent}
                //{name: 'main_content', type:'string', value:mainContent}
                //{name: 'main_content', type:'string', value:mainContent}
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
 

		render() {
			console.log(this.state)
			return (

					<div>
						< Profile />
						<div id='publish-wrapper'>
							<div className='' id='content-wrapper'>
								
								<label>Article Image</label>
								<div id='image-wrapper'>
									<input id='image-field' className='border-publish' type='text'/>
									<div>
										<button htmlFor='mymy' id='image-btn-publish' className='btn'>Add Image</button>
										<input name='mymy' id='input-file' type='file' className='btn btn-primary'/>
									</div>
								</div>
								<div id='input-wrapper'>
									<label>Title</label>
									<input id='title' className='border-publish' type='text'/>
									<label>Preamble</label>
									<textarea id='preamble' className='border-publish' />
									<label>Content</label>
									<textarea id='content' className='border-publish'/>
								</div>
								<div id='button-wrapper'>
									<button className='btn btn-secondary'>Preview</button>
									<button onClick={this.handlePublish} id ='publish-btn-publish'className='btn'>Publish</button>
									<button className='btn btn-secondary'>Save</button>
									<button onClick={this.handleDeleteInput} id='delete-btn-publish'className='btn btn-danger'>Delete</button>
								</div>
							</div>
							<div className=''id='settings-wrapper'>
							<p>Settings</p>
								<div id='add-wrapper'>
									<button className='btn'>Add Image</button>
									<button className='btn'>Add Element</button>
								</div>
								<div id='topic-wrapper'>
									<SettingsDropdownButton topic={this.state.topic} handleClick={this.handleTopic} />
								</div>
								<div id='tag-wrapper'>
									<input type='text' id='tags'/>	
								</div>
								<div id='schedule-wrapper'>
									<input type='text' id='time'/>	
								</div>
							</div>	
						</div>
						
					</div>
			);
		}
	}
export default Publish;