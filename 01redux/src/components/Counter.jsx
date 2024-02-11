import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleAdd,handleAddNum,handleRes,handleSub,toggleAuth } from '../store/actions/actions';

export default function Counter() {
    const count = useSelector((state) => state.count);
    const isLoggedIn = useSelector((state) => state.authIs)
    const dispatch = useDispatch();

    
  return (
    <>
        <div className='content-container'>
        <button className='logout' onClick={()=>dispatch(toggleAuth())}>{isLoggedIn?"Logout":"Login kar bey"}</button>
      
        {!isLoggedIn?<p>Please Login</p>:<div className='all-content'>
        <h3>React Counter App</h3>
      <p>{count}</p>
      <div className='incre-decre-reset'>
        <button className='sub' onClick={()=>dispatch(handleSub())}>Subtract</button>
        <button className='res' onClick={()=>dispatch(handleRes())}>Reset</button>
        <button className='add' onClick={()=>dispatch(handleAdd())}>Add</button>
        <button className='add' onClick={()=>dispatch(handleAddNum(5))}>Add 5</button>
      </div>
        </div>}
        
      
      </div>
    </>
  )
}
