import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticleInfo.css'
import RatingComp from '../constants/RatingComp.js'
import SocialMediaShare from './SocialMediaShare.js'


const ModalArticleInfo = (props) => {
	
  return (
      <Card className='modal-card-master'>
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
          <CardText>
            <hr/>
            <p className='rate-header'>Rate this article:</p>
            <RatingComp />
            <hr/>
            <p className='share-header'>Share this article:</p>
            <SocialMediaShare />
            <hr/>
    			</CardText>
        </CardBody>
      </Card>
      
    
      )
}
 export default ModalArticleInfo;