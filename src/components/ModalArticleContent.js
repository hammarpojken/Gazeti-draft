import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticleContent.css'


const ModalArticleContent = (props) => {
	
  return (
      <Card className='modal-card-content'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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