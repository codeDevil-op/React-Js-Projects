import { useContext } from 'react'
import './product.css'
import CountContext from '../../context/countContext'



const Product = ({product}) => {
  const {id,title,category,price,img} = product;
 const {addToCart} = useContext(CountContext)
  return (
   <>
   <div key={id} className='product --card'>
      <img src={img} alt="" />
      <div className='--bg-primary --center-all --p'>
        <h3 className='--text-light'>{title}</h3>
        <div className='--flex-between --width-100'>
          <p className='--text-light'>{price}</p>
          <button className='--btn --btn-danger' onClick={()=>addToCart(product)} >Add To Cart</button>
        </div>
      </div>
    </div>
    
   </>
  )
}

export default Product