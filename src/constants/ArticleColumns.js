import React from 'react'
import {CardColumns} from 'reactstrap'
import ArticleCard  from './ArticleCard.js'

const ArticleColumns = (props) => {
	const b = [<ArticleCard/>, <ArticleCard/>, <ArticleCard/>]
	return(
		<CardColumns>
			{b}
		</CardColumns>

		)
}
export default ArticleColumns;