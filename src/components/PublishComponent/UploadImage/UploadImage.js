import React from 'react'
import './UploadImage.css'

class UploadImage extends React.Component {
	constructor(props) {
		super(props);

	}

	saveImage(event) {
		var formData = new FormData();
		let img = event.target.files[0]
		formData.append('img', img)
		
		fetch('http://localhost:3001/upload', {
					  method: 'post',
					  body: formData
					})
					.then(response => response.json())
					.catch(error => console.error('Error:', error))
					.then(response => console.log('Success:', response));
}
	render() {
		return (
			<div id='image-wrapper'>
				<p id='image-field' className='border-publish'>{this.props.imgSelected}</p>
					<div className='file-upload-btn'>
						<label htmlFor="file-upload" className="btn btn-primary">
				  			<i className="fas fa-cloud-upload-alt"></i> Upload image
						</label>
						<input onChange={this.saveImage} name='img' id="file-upload" type="file" accept="image/*"/>
					</div>
			</div>
		)
	}
}

export default UploadImage
	