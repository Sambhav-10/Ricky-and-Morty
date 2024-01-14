import React from 'react'
import "./search.css"
const Search = ({setSeacrch}) => {

  return (
    <div className='searchbar'>
      
      <input  onChange={(e)=>setSeacrch(e.target.value)} type="text" className='input'  placeholder='Search any chareacter' />
     
      <button className='btn btn-primary'>Search</button>
  
  
 
    </div>
  )
}

export default Search
