import React,{useState, useEffect} from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button"
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState("Show Task Bar")
  const [task, setTask] = useState()
  const url = "https://635d8b5c07076ac24f3f23db.mockapi.io/api/task"

  const toggle = () => {
    setIsOpen(!isOpen)
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText);
  }
  //! CRUD  -READ-
  const getTask = async () => {
    const {data} = await axios(url)
    setTask(data)
    console.log(data);
  }

  useEffect(() => {
    getTask()
  
    
  }, [])
  


  return (
    <div>

      <Button 
      onClick={() => {toggle()}}
      variant="danger" size="lg">{text}</Button>

      {isOpen && <AddTask/> }
        
      <TaskList/>
    </div>
  );
};

export default Home;
