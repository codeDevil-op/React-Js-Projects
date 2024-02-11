import React, { useState } from 'react'
import TaskList from './TaskList'
import './Task.css'
export const Task = () => {
  const [iscompleted,setIsCompleted] = useState(false)
  return (
    <>
    <h1>List Of Task</h1>
    <ul>
    <TaskList name='Task 1' isCompleted={iscompleted}/>
    <TaskList name='Task 2' isCompleted={iscompleted}/>
    <TaskList name='Task 3' isCompleted={iscompleted}/>
    </ul>
    <button onClick={()=>setIsCompleted(!iscompleted)}>Change it</button>
  
    </>
    
  )
}
