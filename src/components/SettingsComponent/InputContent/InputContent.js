import React from 'react'
import './InputContent.css'
import GenderSelect from '../GenderSelect/GenderSelect.js'

const InputContent = () => {
	return (
		<div id='wrapper'>
			<p>First Name:</p>
			<input id='fname' className='border-publish' type='text'/>
			<p>Last Name:</p>
			<input id='lname' className='border-publish' type='text'/>
			<GenderSelect />
			<p>Location:</p>
			<input id='location' className='border-publish' type='text'/>
			<p>Email:</p>
			<input id='email' className='border-publish' type='text'/>
			<p>Bio</p>
			<textarea id='bio' className='border-publish'/>
		</div>
	)
}
export default InputContent