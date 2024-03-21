import React from 'react'
import './categories.css'
import Product from '../products/Product'

const Categories = ({singleCategory,categories,filteredItem}) => {
  return (
    <>
    <div className='--flex-center'>
    <select value={singleCategory} onChange={(e)=>filteredItem(e.target.value)}>
    {categories.map((category,index)=>{
      return(

        <option value={category} key={index} >{category}</option>
       
        
      )   
    })}
    
       {/* <button  type='button' className='--btn btn --btn-secondary' onClick={()=>filteredItem(category)} key={index}>{category}</button> */}
      
    </select>
    </div>
      
    </>
  )
}

export default Categories