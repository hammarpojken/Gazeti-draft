import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticle.css'
import ModalArticleContent from '../components/ModalArticleContent.js'
import ModalArticleInfo from '../components/ModalArticleInfo.js'

class ArticleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
              <div className='modal-wrapper'>
                <div className='modal-article-content'>
                  <ModalArticleContent />
                </div>
                <div className='modal-info'>
                  <ModalArticleInfo />
                </div>
              </div>
            </ModalBody>
          </Modal>
      
    );
  }
}

export default ArticleModal;