import React from 'react'

const GenderSelect = () => {
	return (
		<div>
			<p>Gender:</p>
			<select className='border-publish' id='select'>
				<option selected disabled>Choose a gender</option>
				<option value="female">female</option>
				<option value="male">male</option>
				<option value="other">other</option>
			</select>
		</div>
	)
}
export default GenderSelect