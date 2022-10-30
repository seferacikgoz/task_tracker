import axios from 'axios'
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const AddTask = () => {

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();
    const newTask = {task,date};
    console.log("task geldi mi", newTask);
    addNewTask(newTask)

  }

  const addNewTask=async(newTask)=>{
    const url = "https://635d8b5c07076ac24f3f23db.mockapi.io/api/task"
    try {
      await axios.post(url,newTask)
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div onSubmit={handleSubmit}> 
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Task</Form.Label>
      <Form.Control type="text" 
      placeholder="Enter task"
      onChange={(e) => setTask(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date"
      onChange={(e)=> setDate(e.target.value)}/>
    </Form.Group>
    <Button variant="primary w-50" type="submit">
      SAVE
    </Button>
  </Form></div>
  )
}

export default AddTask