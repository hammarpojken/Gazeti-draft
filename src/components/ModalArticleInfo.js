import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import userlogo from '../resources/images/userlogo.svg'
import '../resources/styles/ModalArticleInfo.css'


const ModalArticleInfo = (props) => {
	
  return (
      <Card className='modal-card-master'>
        <div className='card-articleinfo'>
			<div className='card-author'>
				<img src={userlogo} className='card-avatar' />
				<p className='skribent'>{}</p>
			</div>
			<div className='card-timestamp'>
				<p className=''>1990-01-01 20:13</p>
			</div>
		</div>
        <CardBody>
          <CardTitle >{}
			</CardTitle>
          <CardText>{}
			</CardText>
         <hr/>
        </CardBody>
      </Card>
      
    
      )
}
 export default ModalArticleInfo;