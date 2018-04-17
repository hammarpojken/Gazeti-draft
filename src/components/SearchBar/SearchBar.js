import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
  return(
		 <div className='wrapper' >
			
		            <div className="input-group custom-search-form">
		              <input type="text" className="form-control" placeholder='Search category, article or author...'/>
		              <span className="input-group-btn">
		              <button className="btn" type="button">
		              <span className="fas fa-search"></span>
		             </button>
		             </span>
		             </div>
		
		</div>

  )
}
export default SearchBar

