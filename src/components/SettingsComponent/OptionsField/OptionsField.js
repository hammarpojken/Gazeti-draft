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
			<select className='select'>
				<option value="female">female</option>
				<option value="male">male</option>
				<option value="other">other</option>
			</select>
			<p>Location:</p>
			<input id='location' className='border-publish' type='text'/>
			<p>Email:</p>
			<input id='email' className='border-publish' type='text'/>
		</div>
		// Make components of these
	)
}
export default OptionsField