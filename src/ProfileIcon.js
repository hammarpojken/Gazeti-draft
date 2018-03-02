import React from 'react';
import './resources/styles/ProfileIcon.css';
import Person from './resources/images/person.svg';


const ProfileIcon = () => {
	return (
		<div>
	  		<img className='profile-icon' src={ Person } />
		</div>
	);
}
export default ProfileIcon
