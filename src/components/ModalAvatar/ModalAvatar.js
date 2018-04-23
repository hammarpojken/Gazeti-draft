import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import AvatarEditor from '../AvatarEditor/AvatarEditor.js'
import './ModalAvatar.css'

class ModalAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <button className='btn btn-secondary' onClick={() => this.openModal()}>Edit Avatar</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <ModalHeader toggle={this.props.isModalOpen}></ModalHeader>
              <ModalBody>
                <h1>Edit your avatar</h1>
                <div className='editor'>
                  <AvatarEditor />
                </div>
                  <button onClick={() => this.closeModal()} className='btn btn-secondary'>Save</button>
              </ModalBody>
        </Modal>
      </div>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}

export default ModalAvatar