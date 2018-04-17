import React from 'react'
import './Publish.css'
import PublishContainer from '../../components/PublishComponent/PublishContainer.js'
import Profile from '../Profile/Profile.js';

const Publish = () => {
		return (
			<div>
				<Profile />
				<PublishContainer />
			</div>
		);
}

export default Publish;