import React from 'react'
import './search.styles.css';

export const SearchField = props => {
  return (
    <div>
      <input
        className='search-box'
        type='search'
        placeholder='search'
        onChange={props.handleChange}
      />
    </div>
  )
}
