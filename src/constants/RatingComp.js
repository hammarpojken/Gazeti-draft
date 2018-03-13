import React from 'react'
import Rating from 'react-rating'
import '../resources/styles/RatingComp.css'
import SvgIcon from './SvgIcon.js'

class RatingComp extends React.Component {
	constructor() {
		super();
	}


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