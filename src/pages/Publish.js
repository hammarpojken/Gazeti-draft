import React from 'react'
import Editor from '../components/Editor.js';
import InputField from '../components/InputField.js'
import '../resources/styles/Publish.css'


class Publish extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='input-container'>
					<div className='title-wrapper'>
						<h3 className='header'>Title:</h3>
						<input type="text" id="title" />	
					</div>
					<div className='ingress-wrapper'>
						<h3 className='header'>Preamble:</h3>
						<div className='border'>
							<InputField />
						</div>
					</div>
					
					<div className='body-wrapper'>
						<h3 className='header'>Body:</h3>
						<div className='border'>
							<Editor />
						</div>
					</div>
					<button className='btn btn-success' id='publish-button'>Publish</button>
				</div>
			</div>
		);
	}
}
export default Publish;