import React from 'react'
import './InputButtons.css'

const InputButtons = (props) => {
	return (
		<div id='button-wrapper'>
			<button className='btn btn-secondary' onClick={props.showModal}>Preview</button>
			<button onClick={props.handlePublish} id ='publish-btn-publish'className='btn'>Publish</button>
			<button className='btn btn-secondary'>Save</button>
			<button onClick={props.handleDeleteInput} id='delete-btn-publish'className='btn btn-danger'>Delete</button>
		</div>
  	)
}
export default InputButtons

