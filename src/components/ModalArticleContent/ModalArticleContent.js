import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';
import userlogo from './userlogo.svg'
import './ModalArticleContent.css'


const ModalArticleContent = (props) => {
	
  return (
      <Card className='modal-card-content'>
        <CardImg className='modal-card-img' top width="100%" src={props.article.main_img_url} alt="Card image cap" />
        <div className='card-articleinfo'>
    			<div className='card-author'>
    				<img src={userlogo} alt='userlogo' className='card-avatar' />
    				<p className='skribent'>{props.article.author}</p>
    			</div>
    			<div className='card-timestamp'>
    				<p className=''>{props.article.timestamp}</p>
    			</div>
		    </div>
        <CardBody>
          <CardTitle >{props.article.title}
			</CardTitle>
            <p><strong>{props.article.preamble}</strong></p>
          <CardText>{props.article.main_content}
			</CardText>
         <hr/>
        </CardBody>
      </Card>
      
    
      )
}
 export default ModalArticleContent;