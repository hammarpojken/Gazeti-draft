import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticleContent.css'


const ModalArticleContent = (props) => {
	
  return (
      <Card className='modal-card-content'>
        <CardImg className='modal-card-img' top width="100%" src={props.article.main_img_url + props.article._id * 10} alt="Card image cap" />
        <div className='card-articleinfo'>
    			<div className='card-author'>
    				<img src={userlogo} className='card-avatar' />
    				<p className='skribent'>{props.article.author}</p>
    			</div>
    			<div className='card-timestamp'>
    				<p className=''>{props.article.timestamp}</p>
    			</div>
		    </div>
        <CardBody>
          <CardTitle > Titel
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