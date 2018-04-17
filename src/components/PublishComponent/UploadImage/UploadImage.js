import React from 'react'
import './UploadImage.css'

const UploadImage = (props) => {
	return (
		<div id='image-wrapper'>
			<p id='image-field' className='border-publish'>{props.imgSelected}</p>
				<div className='file-upload-btn'>
					<label htmlFor="file-upload" className="btn btn-primary">
			  			<i className="fas fa-cloud-upload-alt"></i> Upload image
					</label>
					<input onChange={props.onChange} id="file-upload" type="file" accept="image/*"/>
				</div>
		</div>
	)
}

export default UploadImage
	