import React, {useEffect, useState} from 'react'
import './productlist.css'
import Search from '../search/Search'
import Categories from '../categories/Categories'
import Product from '../products/Product'
import { products } from '../../products-data'


const ProductList = () => {
  const [productsdata, setProductsData] = useState(products)
  const [count,setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [searchedproducts, setSearchedProducts] = useState([])
  const [catego,setCatego] = useState('all')
  const allCategories = [
    'all',
    ...new Set(products.map((product)=>product.category)),
  ]
  const handleInputChange = (e)=>{
    setSearch(e.target.value)
  }
  const filteredProducts = (category)=>{
    if(category==='all'){
      setProductsData(products)
      setCatego(category)
      return;
    }
    else{
      const newProducts = products.filter(
        (product)=>product.category===category
        );
      setProductsData(newProducts)
      setCatego(category)
    }
    
    
   
  }
  const addToCart = ()=>{
    setCount((prev)=>prev+1)
      
  }
  useEffect(()=>{
    
    const searchedProductsAre = productsdata.filter((product)=>product.title.toLowerCase().includes(search.toLowerCase()));
    setSearchedProducts(searchedProductsAre)
    
    
  },[search,productsdata])
 
  return (
    <>

      <div className='header'>
        <header className='container'>
          <h1 className='--color-white --text-center'><span className='--color-danger'>Product</span> Filter</h1>
          <div className='--flex-between --flex-dir-column'>
            <Search searchInput={search} handleChange = {handleInputChange}/>
            <Categories categories ={allCategories} filteredItem = {filteredProducts} singleCategory={catego}/>
          </div>
        </header>
      </div>
      
      <div className='product-container'>
      <div className="products container --grid-25 --py2">
      {searchedproducts.length===0? (
        <h1>No Products Found</h1>
      ):(searchedproducts.map((product)=>{
    
    return(
      <div key={product.id} >
      <Product  product={product}/>
      </div>
     
    )
   }
   ))
        }
        
      </div>
      </div>
      
    </>
  )

}

export default ProductList