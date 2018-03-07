import React from 'react'
import '../resources/styles/Profile.css'
import { Link } from 'react-router'


class Profile extends React.Component {
	render() {
		return (
			<div>
			{/*Add routes for every possible next page*/}
				<div id='container'>
					<ul id='ul-profile'>
						<li><Link to='Publish' id='li'>PUBLISH</Link></li>
						<li>PORTFOLIO</li>
						<li>EXPERTISE</li>
						<li>RATING</li>
						<li>SETTINGS</li>
					</ul>
				</div>

					
				<div>
		      	{this.props.children}
		      </div>
		    </div>		);
	}
}
export default Profile;