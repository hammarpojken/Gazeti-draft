import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticleContent.css'


const ModalArticleContent = (props) => {
	
  return (
      <Card className='modal-card-content'>
        <CardImg className='modal-card-img' top width="100%" src={props.article.picture + props.article.index * 10} alt="Card image cap" />
        <div className='card-articleinfo'>
    			<div className='card-author'>
    				<img src={userlogo} className='card-avatar' />
    				<p className='skribent'>{props.article.name}</p>
    			</div>
    			<div className='card-timestamp'>
    				<p className=''>1990-01-01 20:13</p>
    			</div>
		    </div>
        <CardBody>
          <CardTitle > Titel
			</CardTitle>
            <p><strong>{props.article.headline}</strong></p>
          <CardText>{props.article.about}
			</CardText>
         <hr/>
        </CardBody>
      </Card>
      
    
      )
}
 export default ModalArticleContent;