import React from 'react'
import Editor from '../components/Editor.js';
import InputField from '../components/InputField.js'
import '../resources/styles/Publish.css'
import Profile from './Profile.js';
import SettingsDropdownButton from '../components/SettingsDropdownButton.js'


class Publish extends React.Component {
	render() {
		return (

				<div>
					< Profile />
					<div id='publish-wrapper'>
						<div className='' id='content-wrapper'>
							<p>PLACEHOLDER</p>
							<p>img</p>
							<div id='image-wrapper'>
								<input id='image-field' className='border-publish' type='text'/>
								<div>
									<button id='image-btn-publish' className='btn'>Add Image</button>
								</div>
							</div>
							<div id='input-wrapper'>
								title
								<input id='title' className='border-publish' type='text'/>
								preamble
								<textArea id='preamble' className='border-publish' />
								content	
								<textArea id='content' className='border-publish'/>
							</div>
							<div id='button-wrapper'>
								<button className='btn btn-secondary'>Preview</button>
								<button id ='publish-btn-publish'className='btn'>Publish</button>
								<button className='btn btn-secondary'>Save</button>
								<button id='delete-btn-publish'className='btn btn-danger'>Delete</button>
							</div>
						</div>
						<div className=''id='settings-wrapper'>
						<p>PLACEHOLDER</p>
							<div id='add-wrapper'>
								<button className='btn'>Add Image</button>
								<button className='btn'>Add Element</button>
							</div>
							<div id='topic-wrapper'>
								<SettingsDropdownButton />
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