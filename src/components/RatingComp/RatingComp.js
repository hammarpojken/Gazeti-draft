import React from 'react'
import Rating from 'react-rating'
import './RatingComp.css'
//import SvgIcon from '../SvgIcon/SvgIcon.js'

class RatingComp extends React.Component {

	render() {
		return(
			<div className='rating-wrapper'>
				<Rating className='rating-body' 
				  emptySymbol='far fa-star fa-2x'
				  fullSymbol='fas fa-star fa-2x'
				  fractions={2} 
				/>
			</div>
			);
	}
}
export default RatingComp