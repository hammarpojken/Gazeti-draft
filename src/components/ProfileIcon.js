import React from 'react';
import '../resources/styles/ProfileIcon.css';
import Person from '../resources/images/person.svg';
import { Link } from 'react-router';


const ProfileIcon = () => {
	return (
		<div>
			<Link to='Profile'>
				<img className='profile-icon' src={ Person } />
			</Link>	
		</div>
	);
}
export default ProfileIcon
