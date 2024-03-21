import React from 'react'
import './search.css'
const Search = ({searchInput,handleChange}) => {
  return (
    <>
    <div className='--form-control'>
      <input type="text"  value={searchInput} onChange={handleChange} placeholder='Search Here...' />
    </div>
    </>
  )
}

export default Search