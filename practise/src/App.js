import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {Task} from "./Task";

function App() {
  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");

  const handleChange=(e)=>{
    setNewTask(e.target.value);
  };

  const addTask=(e)=>{
    //const newTodoList=[...todoList,newTask];
    const task={
      id:todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName:newTask,
      completed:false
    }
    setTodoList([...todoList,task]);
  };

  const deleteButton=(id)=>{
    const newTodoList=todoList.filter((task)=>{
      if(task.id===id){
        return false;
      }
      else{
        return true;
      }
    });
    setTodoList(newTodoList);
  };

  const complete=(id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id===id){
          return {...task,completed:true};
        }
        else{
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className='addList'>
        <input type='text' onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
       {
        todoList.map((task)=>{
          return <Task taskName={task.taskName} id={task.id } deleteButton={deleteButton} completed={task.completed} complete={complete}/>;

        })
       }
      </div>
    </div>
  );
}

export default App;
