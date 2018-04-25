import React from 'react'
import './UploadImage.css'

class UploadImage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImg: "http://localhost:3001/images/no-image.jpg"
		}

		this.saveImage = this.saveImage.bind(this)

	}
	handleImageShow(url, imgName) {
		this.setState({currentImg:  url})
		this.props.onChange(imgName, url);
	}

	saveImage(event) {
		if(!event.target.files[0])
			return

		const url = 'http://localhost:3001/images/'
		let id = this.props.author
		let img = event.target.files[0]
		
		let imgId = id.replace(/ /g,"-") + '-' + img.name.replace(/ /g,"-");

		var formData = new FormData();
		formData.append('id', imgId)
		formData.append('img', img)
		
		fetch('http://localhost:3001/upload', {
					  method: 'post',
					  body: formData
					})
					.then(response => {
						if(response.status === 200){
							this.handleImageShow((url + imgId), img.name)
						}

					})
						
		}

	render() {

		return (
			<div id='image-wrapper'>
				{/*<p id='image-field' className='border-publish'>{this.props.imgSelected}</p>*/}
				<img src={this.state.currentImg} style={{height:'200px'}}/>
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
	