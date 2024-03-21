import { createContext, useState } from "react";
import { products } from "../products-data";
import useLocalStorage from 'use-local-storage'
const CountContext = createContext();

 
export const CartContextProvider = ({children})=>{

    const [count,setCount] = useLocalStorage('count',0)
    const [cart,setCart] =useLocalStorage('cart',[])
    
const addToCart = (prod)=>{
   const existingCart = cart.find((item)=>item.id===prod.id);
   if(existingCart){
   let updatedCart = cart.map((curElem)=>{
    if(curElem.id===prod.id){
        // return {...curElem,quantity:curElem.quantity+1}
        alert('already added to the cart')
    }
    return curElem
   })
   setCart(updatedCart)
   }
   else{
    setCart([...cart,prod])
    setCount((prev)=>prev+1)
   }
}

const incree = (id)=>{
    const increItem = cart.map((item)=>{
        if(item.id===id){
            let incree = item.quantity+1;
            if(incree>=5){
                incree=5
            }
            return {...item,quantity:incree}
        }
        return item
       })
       setCart(increItem)
}
const decree = (id)=>{
   const decreItem = cart.map((item)=>{
    if(item.id===id){
        let decree = item.quantity-1;
        if(decree<=0){
            decree = 1
        }
        return {...item,quantity:decree}
    }
    return item
   })
   setCart(decreItem)
}

const handleDelete = (id)=>{
    const filteredItem = cart.filter((item)=>item.id!==id)
    setCart(filteredItem)
    setCount((prev)=>prev-1)
}
const clearCart = ()=>{
    setCart([])
    setCount(0)
}

const updateQuantity = (quantity,id)=>{
   setCart(
    cart.map((curElem)=>{
        if(curElem.id===id){
            return{...curElem,quantity:quantity}
        }
        return curElem
    })
   )
}
const getTotalAmount = ()=>{
    let totalAmount = 0;
    cart.map((item)=>{
        (totalAmount += item.price*item.quantity).toFixed(0)
        
    })
    return totalAmount
}

    return(
        <CountContext.Provider value={{count,cart,addToCart,decree,incree,handleDelete,clearCart,updateQuantity,getTotalAmount}}>
            {children}
        </CountContext.Provider>
    )
}



export default CountContext;