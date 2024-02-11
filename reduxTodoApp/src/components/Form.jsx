import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtodos,saveUpdate } from '../actions/action';
import Todo from './Todo';


function Form() {
  const [addtodo,setAddTodo] = useState('')
  const [editvalue,setEditValue] = useState('')
  const [editFormVisibility,setEditFormVisibility] = useState(false);
  const [edittodo,setEditTodo] = useState('')
  const handleEditClick = (todo) =>{
    setEditFormVisibility(true)
    setEditTodo(todo)
  }
  const dispatch = useDispatch()
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    let todoListObj = {
      id:Date.now(),
      message:addtodo,
      completed:false,
    }
    if(addtodo===''){}
    else{
      dispatch(addtodos(todoListObj))
    } 
    setAddTodo('')
  }

  const handleEditSubmit =(e) =>{
    e.preventDefault();
    let editedListObj = {
      id:edittodo.id,
      message:editvalue,
      
    }
    dispatch(saveUpdate(editedListObj))
    setEditValue('')
    setEditFormVisibility(false)
  }

  useEffect(()=>{
    setEditValue(edittodo.message)
  },[edittodo])
  return (
    <>
      {!editFormVisibility?(<form onSubmit={handleFormSubmit}>
      <label>Add Your Todo</label>
      <div>
        <input type='text' value={addtodo} onChange={(e)=>setAddTodo(e.target.value)}/>
        <button type='submit'>Add Todo</button>
      </div>
    </form>):(<form onSubmit={handleEditSubmit}>
      <label>Update Your Todo</label>
      <div>
        <input type='text' value={editvalue} onChange={(e)=>setEditValue(e.target.value)}/>
        <button type='submit'>Update Todo</button>
      </div>
    </form>)}
    <Todo handleEditClick = {handleEditClick} editFormVisibility = {editFormVisibility}/>
    </>
    
  )
}

export default Form