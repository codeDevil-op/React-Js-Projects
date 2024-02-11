import React from 'react'

const TaskList = ({name,isCompleted}) => {

    if(isCompleted){
        return <li className='taskCompleted'>{name} ✔</li>
    }
    return <li className='taskInCompleted'>{name}</li>
}

export default TaskList