import React from 'react'
import './NavigateBar.css'
import { Link } from 'react-router'


class NavigateBar extends React.Component {
	render() {
		return (
			<div id='wrapper'>
				<div id='container'>
					<ul id='ul-profile'>
						<li><Link to='Profile-Publish' className='profile-links'>PUBLISH</Link></li>
						<li><Link to='Profile-Portfolio' className='profile-links'>PORTFOLIO</Link></li>
						<li><Link to='Profile-Expertise' className='profile-links'>EXPERTISE</Link></li>
						<li><Link to='Profile-Rating' className='profile-links'>RATING</Link></li>
						<li><Link to='Profile-Settings' className='profile-links'>SETTINGS</Link></li>
					</ul>
				</div>	
				<div>
		      	{this.props.children}
		      </div>
		    </div>		);
	}
}
export default NavigateBar;