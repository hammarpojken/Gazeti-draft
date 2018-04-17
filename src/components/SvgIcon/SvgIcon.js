import React from 'react'


const SvgIcon = (props) => {
		return(
				<div>
					<svg className={props.className}>
						 <use xlinkHref={props.href} />
					 </svg>
				</div>
			);
}
export default SvgIcon