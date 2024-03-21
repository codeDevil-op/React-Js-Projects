import React from "react";
import './taskManager.css'
import { FaEdit, FaTrashAlt, FaCheckDouble } from "react-icons/fa";

const Task = ({id, name, date,completed,handleDelete,handleComplete,editTask}) => {
  return (
    <>
      <div className={completed ? 'task complete': 'task'}>
        <span>
         <p>
          <b>Task:</b> {name}
         </p>
         <p>
          <b>Date:</b> {date}
         </p>
        </span>

        <span>
          <button disabled={completed} className={completed?'disabled':undefined} >
            <FaEdit color={completed? 'grey':'green'} onClick={()=>editTask(id)}/>
          </button>
          <button onClick={()=>handleDelete(id)}>
            <FaTrashAlt color="red" />
          </button>
          <button onClick={()=>handleComplete(id)}>
            <FaCheckDouble color="purple" />
          </button>
        </span>
      </div>
    </>
  );
};

export default Task;
