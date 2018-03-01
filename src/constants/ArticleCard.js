import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/card.css'


const ArticleCard = (props) => {
  return (
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <div className='card-articleinfo'>
			<div className='card-author'>
				<img src={userlogo} className='card-avatar' />
				<p className='skribent'>tobias</p>
			</div>
			<div className='card-timestamp'>
				<p className=''>1990-01-01 20:13</p>
			</div>
		</div>
        <CardBody>
          <CardTitle >Ut enim ad minim veniam,
					  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					  consequat.
			</CardTitle>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					  consequat.
			</CardText>
         <hr/>
        </CardBody>
      </Card>
      
    
      )
}
 export default ArticleCard;



