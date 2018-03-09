import React from 'react'
import Editor from '../components/Editor.js';
import InputField from '../components/InputField.js'
import '../resources/styles/Publish.css'


class Publish extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='input-container'>
					<h3>Title</h3>
					<div className='title'>
						<input type="text" id="title" />	
										</div>
					<h3>Ingress</h3>
					<div className='ingress'>
						<InputField />
					</div>
					<h3>Body</h3>
					<div className='body'>
						<Editor />
					</div>
					<button className='btn btn-success' id='publish-button'>Publish</button>
				</div>
			</div>
		);
	}
}
export default Publish;