import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticle.css'
import ModalArticleContent from '../components/ModalArticleContent.js'
import ModalArticleInfo from '../components/ModalArticleInfo.js'

class ArticleModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div>
          <Modal isOpen={this.props.show} toggle={this.props.oncloseModal} className={this.props.className}>
            <ModalHeader toggle={this.props.oncloseModal}></ModalHeader>
            <ModalBody>
              <div className='modal-wrapper'>
                <div className='modal-article-content'>
                  <ModalArticleContent article={this.props.article}/>
                </div>
                <div className='modal-info'>
                  <ModalArticleInfo article={this.props.article} />
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
    );
  }
}


export default ArticleModal;