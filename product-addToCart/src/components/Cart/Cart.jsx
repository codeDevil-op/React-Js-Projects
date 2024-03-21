import React, { useContext } from 'react'
import './cart.css'
import image from '../../../public/images/1.png'
import CountContext from '../../context/countContext'
import {FaTrash} from 'react-icons/fa'

const Cart = () => {
  const {addToCart,cart,decree,incree,handleDelete,clearCart,updateQuantity,getTotalAmount} = useContext(CountContext)
  
 const totalAmount = getTotalAmount();
  let n = totalAmount.toFixed(2)
  return (
    <>
   
    <h1 className='heading'>Cart Items</h1>

    
    <div className='cart-items'>

    {
      cart.map((item)=>{
        const {id,title,category,price,img,quantity} = item
        return(
          <div key={id} className='item-card'>
      <div className='image'>
        <img src={img} alt="" />
      </div>
      <div className='text'>
        <h4 className='item-heading'>{title}</h4>
        <p className='amount'>{price}</p>
      </div>
      <div className='buttons'>
        <button className='decre' onClick={()=>decree(id)}>-</button>
        <input type="number" value={quantity} onChange={(e)=>updateQuantity(e.target.value,id)} min={1} max={5}/>
        <button className='incree' onClick={()=>incree(id)}>+</button>
      </div>
      <div className='subTotal'> 
      <h3>Sub Total</h3>
      <p>{price*quantity}</p>
      </div>
      <FaTrash size={30} color='red' onClick={()=>handleDelete(id)}/>
    </div>
        )
      })
    }
    <hr />
    <div className='clear-total'>
      {cart.length<=1?'':<button onClick={clearCart}>Clear Cart</button>}
      <div>
        <h4>Total :</h4>
        <p>Rs: {n}</p>
      </div>
    </div>
   
    </div>
    
    
    
    </>    
  )
}

export default Cart