import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
//import userlogo from './userlogo.svg'
import './ModalArticle.css'
import ModalArticleContent from '../ModalArticleContent/ModalArticleContent.js'
import ModalArticleInfo from '../ModalArticleInfo/ModalArticleInfo.js'

class ArticleModal extends React.Component {

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