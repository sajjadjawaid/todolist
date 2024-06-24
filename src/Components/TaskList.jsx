import { useState } from "react";
import Task from "./Task";

function TaskList () {
    const [task, setTask] = useState([]);
    const [inputValue, setInputValue] = useState("");
   
    const handleChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setTask([...task, inputValue]);
        
        setInputValue("");
        }
    
    const deleteTask = (index) => {
        let task2 = task.filter((task, i) => i !== index );
        setTask(task2);
    }

    const editTask = (index, updatedTask) =>{
        const newTasks = [...task];
        newTasks[index] = updatedTask;
        setTask(newTasks);

    }
    
    return ( 
        <>
        <h1>ToDoList</h1>
        <input className="tasklist-input" onChange={handleChange} value={inputValue} placeholder="Enter your Tasks here!!"/>
        <button className="addtask-btn" onClick={handleClick}>Add Task</button>
        {task.map((data, index) => (
            <Task key = {index} data = {data} index = {index} deleteTask = {deleteTask} editTask ={editTask}/>
        ))}
      
        </>
     );
}

export default TaskList;