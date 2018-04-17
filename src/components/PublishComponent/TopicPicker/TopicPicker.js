import React from 'react'
import './TopicPicker.css'
import SettingsDropdownButton from '../../SettingsDropdownButton/SettingsDropdownButton.js'

const TopicPicker = (props) => {
	return (
		<div id='topic-wrapper'>
			<SettingsDropdownButton topic={props.topic} handleClick={props.handleTopic} />
		</div>
  	)
}
export default TopicPicker

