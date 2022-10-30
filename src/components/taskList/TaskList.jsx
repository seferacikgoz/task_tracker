import axios from 'axios'
import React from 'react'
import {RiDeleteBack2Fill} from "react-icons/ri"

const TaskList = ({task, getTask}) => {

  const deleteTask = async (id)=> {
    const url = "https://635d8b5c07076ac24f3f23db.mockapi.io/api/task"
    try {
      await axios.delete(`${url}/${id}`)
    } catch (error) {
    }
    getTask()
  }

  

  return (
    <div>
      {task.map((item) => {
        const {id, task, date} = item;
        return(
          <div 
          key={id}
          className='mt-2 d-flex justify-content-between bg-secondary rounded-5 p-2'>
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill 
              onClick={()=> deleteTask(id)}
              style={{
                cursor:"pointer",
                marginRight:"20px",
                fontSize:"2rem",
                boxShadow:"2px 2px 2px #ECAB9E"
              }}/>
            </div>

          </div>
        )
      })}
      
    </div>
  )
}

export default TaskList

