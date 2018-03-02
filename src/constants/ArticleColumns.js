import React from 'react'
import {CardColumns} from 'reactstrap'
import ArticleCard  from './ArticleCard.js'
import articles from '../articles.js'

const ArticleColumns = (props) => {
	const b = articles;
	let c = [];
	for(let i = 0; i < b.length; i++) {
		c.push(<ArticleCard props={b[i]} />);
	
	}
	return(
		<CardColumns>
			{c}
		</CardColumns>

		)
}
export default ArticleColumns;