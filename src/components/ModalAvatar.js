import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AvatarEditor from './AvatarEditor.js'
import '../resources/styles/ModalAvatar.css'

class ModalAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.openModal()}>Edit Avatar</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <ModalHeader toggle={this.props.isModalOpen}></ModalHeader>
              <ModalBody>
                <h1>Edit your avatar</h1>
                <div className='editor'>
                  <AvatarEditor />
                </div>
                  <p><button onClick={() => this.closeModal()}>Save</button></p>
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