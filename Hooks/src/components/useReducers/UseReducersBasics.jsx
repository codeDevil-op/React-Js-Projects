import React, { useReducer, useState } from 'react'

const countReducer = (state,action)=>{
    switch(action.type){
        case 'ADD':
            return {count:state.count+1};
        case 'SUB':
            return {count:state.count-1};
        case 'RES':
            return {count:0};    
        default:
            return state;
    }
    // if(action.type==='ADD'){
    //     return {count:state.count+1}
    // }if(action.type==='SUB'){
    //     return {count:state.count-1}
    // }if(action.type==='RES'){
    //     return {count:0}
    // }
    // return state;
}

const initialState = {
    count:0,
};

const UseReducersBasics = () => {
    // const [count, setCount] = useState(0)
    const [state,dispatch] = useReducer(countReducer,initialState)

    function handleAdd(){
        dispatch({
            type:'ADD'
        })
    }
    function handleSub(){
        dispatch({
            type:'SUB'
        })
    }
    function handleRes(){
        dispatch({
            type:'RES'
        })
    }
    
  return (
    <>
        <div className='content-container'>  
        <div className='all-content'>
        <h3>React Counter App</h3>
      <p>{state.count}</p>
      <div className='incre-decre-reset'>
        <button className='sub' onClick={handleSub}>Subtract</button>
        <button className='res' onClick={handleRes}>Reset</button>
        <button className='add' onClick={handleAdd}>Add</button>
      </div>
        </div>
        
      
      </div>
    </>
  )
  }
export default UseReducersBasics