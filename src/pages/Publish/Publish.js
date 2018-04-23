import React from 'react'
import './Publish.css'
import PublishContainer from '../../components/PublishComponent/PublishContainer.js'
import NavigateBar from '../../components/NavigateBar/NavigateBar.js';

const Publish = () => {
		return (
			<div>
				<NavigateBar />
				<PublishContainer />
			</div>
		);
}

export default Publish;