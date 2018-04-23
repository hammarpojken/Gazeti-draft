import React from 'react'
import './OptionsField.css'

const OptionsField = () => {
	return (
		<div id='wrapper'>
			<p>First Name:</p>
			<input id='fname' className='border-publish' type='text'/>
			<p>Last Name:</p>
			<input id='lname' className='border-publish' type='text'/>
			<p>Gender:</p>
			<select className='border-publish' id='select'>
				<option selected disabled>Choose a gender</option>
				<option value="female">female</option>
				<option value="male">male</option>
				<option value="other">other</option>
			</select>
			<p>Location:</p>
			<input id='location' className='border-publish' type='text'/>
			<p>Email:</p>
			<input id='email' className='border-publish' type='text'/>
			<p>Bio</p>
			<textarea id='bio' className='border-publish'/>
			<button className='btn btn-secondary'>Save</button>
		</div>
		// Make components of these
	)
}
export default OptionsField