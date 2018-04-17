import React from 'react'
import './ArticleInput.css'

const ArticleInput = (props) => {
	return(
		<div id='input-wrapper'>
			<label>Title</label>
			<input id='title' className='border-publish' type='text'/>
			<label>Preamble</label>
			<textarea id='preamble' className='border-publish' />
			<label>Content</label>
			<textarea id='content' className='border-publish'/>
		</div>
		)
}
export default ArticleInput