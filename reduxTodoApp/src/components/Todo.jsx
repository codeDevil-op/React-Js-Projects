import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMe,handleCheckBox } from '../actions/action'

function Todo({handleEditClick, editFormVisibility}) {
  const displayData = useSelector((state)=>state)
  const dispatch = useDispatch()
  return (   
    <div>
    <button onClick={()=>dispatch(handleComplete())}>Completed</button>
      {displayData.map((data)=>(
        <div key={data.id}>
        <div>
        <input type='checkbox' checked={data.completed} onChange={()=>dispatch(handleCheckBox(data.id))}/>
        <p style={data.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>{data.message}</p></div>
        {data.completed===true?"":<><button onClick={()=>handleEditClick(data)}>Edit It</button>
        <button onClick={()=>dispatch(deleteMe(data.id))}>Delete Me</button></>}
        </div>
        
      ))}
    </div> 
  )
}

export default Todo