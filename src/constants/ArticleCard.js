import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ArticleCard.css'


const ArticleCard = (props) => {
	
  return (
      <div className='wrapper-card'>
        <Card className='card-article' onClick={props.onClick}>
          <CardImg className='articlecard-img' top width="100%" src={props.props.main_img_url + props.props._id * 10} alt="Card image cap" />
          <div className='card-articleinfo'>
  			<div className='card-author'>
  				<img src={userlogo} className='card-avatar' />
  				<p className='skribent'>{props.props.author}</p>
  			</div>
  			<div className='card-timestamp'>
  				<p className=''>{props.props.timestamp}</p>
  			</div>
  		</div>
          <CardBody>
            <CardTitle >{props.props.preamble}
  			</CardTitle>
            <CardText>{props.props.main_content}
  			</CardText>
           <hr/>
          </CardBody>
        </Card>
      </div>
    
      )
}
 export default ArticleCard;



