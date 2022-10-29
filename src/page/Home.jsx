import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button"

const Home = () => {
  return (
    <div>

      <Button variant="primary">Show Task Bar</Button>
      <AddTask/>   
      <TaskList/>
    </div>
  );
};

export default Home;
