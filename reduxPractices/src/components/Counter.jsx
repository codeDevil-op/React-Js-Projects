import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import store from '../store/store'

import {
    handleAdd,
    handleSub,
    handleAddFive,
    handleReset,
    handleAuthToggle,
} from '../store/actions/action'


function Counter() {
    const count = useSelector(store=>store.count)
    const dispatch = useDispatch()
    const authIs = useSelector(store => store.authIs)
  return (
    <>
         <div className='content-container'>
        <button className='logout' onClick={()=>dispatch(handleAuthToggle())}>{!authIs? "Login": "Logout"}</button>
        {authIs? 
        <>
        <div className='all-content'>
        <h3>React Counter App</h3>
      <p>{count}</p>
      <div className='incre-decre-reset'>
        <button className='sub' onClick={()=>dispatch(handleSub())}>Subtract</button>
        <button className='res' onClick={()=>dispatch(handleReset())} >Reset</button>
        <button className='add' onClick={()=>dispatch(handleAdd())} >Add</button>
        <button className='add'  onClick={()=>dispatch(handleAddFive(5))}>Add 5</button>
      </div>
        </div>
        </>:<p>Please Login</p>
        }
        
      </div>
    </>
  )
}

export default Counter