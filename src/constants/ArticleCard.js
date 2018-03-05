import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ArticleCard.css'


const ArticleCard = (props) => {
	
  return (
      <Card className='card-article'>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <div className='card-articleinfo'>
			<div className='card-author'>
				<img src={userlogo} className='card-avatar' />
				<p className='skribent'>{props.props.name}</p>
			</div>
			<div className='card-timestamp'>
				<p className=''>1990-01-01 20:13</p>
			</div>
		</div>
        <CardBody>
          <CardTitle onClick={props.onClick} >{props.props.headline}
			</CardTitle>
          <CardText>{props.props.about}
			</CardText>
         <hr/>
        </CardBody>
      </Card>
      
    
      )
}
 export default ArticleCard;



