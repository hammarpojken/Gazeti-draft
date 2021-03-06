import React from 'react'
import Avatar from 'react-avatar-edit'
import './AvatarEditor.css'
 
class AvatarEditor extends React.Component {
 
  constructor(props) {
    super(props)
//    const src = './example/lady.jpg'
    this.state = {
      preview: null,
      src: false,
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }
  
  render () {
    return (
      <div className='content'>
        <div>
          <Avatar
            width={390}
            height={295}
            onCrop={this.onCrop}
            onClose={this.onClose}
            src={this.state.src}
          />
        </div>
        <div>
            <img src={this.state.preview} alt='avatar' className='avatar-preview' />
        </div>
      </div>
    )
  }
}

export default AvatarEditor
 