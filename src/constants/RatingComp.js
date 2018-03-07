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
			<Rating
			  emptySymbol={<SvgIcon className='far fa-star fa-3x'/>}
			  fullSymbol={<SvgIcon className='fas fa-star fa-3x'/>}
			  fractions={2}
			  
			/>
			);
	}
}
export default RatingComp