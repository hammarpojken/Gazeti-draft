import React from 'react'
import { Card, CardText, CardBody } from 'reactstrap';
import userlogo from './userlogo.svg'
import './ModalArticleInfo.css'
import RatingComp from '../RatingComp/RatingComp.js'
import SocialMediaShare from '../SocialMediaShare/SocialMediaShare.js'


const ModalArticleInfo = (props) => {
	
  return (
      <Card className='modal-card-master'>
        <div className='card-articleinfo'>
    			<div className='card-author'>
    				<img src={userlogo} className='card-avatar' alt='userlogo' />
    				<p className='skribent'>{props.article.author}</p>
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