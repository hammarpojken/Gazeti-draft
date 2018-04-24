import React from 'react'
import './ArticleInput.css'

const ArticleInput = (props) => {
	return(
		<div id='input-wrapper'>
			<label>Title</label>
			<input id='title' className='border-publish' type='text' required/>
			<label>Preamble</label>
			<textarea id='preamble' className='border-publish' required/>
			<label>Content</label>
			<textarea id='content' className='border-publish'required/>
		</div>
		)
}
export default ArticleInput