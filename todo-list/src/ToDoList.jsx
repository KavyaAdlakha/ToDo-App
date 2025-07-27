import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import './TodoList.css'

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [ ...prevTodos, { task: newTodo, id: uuidv4(), isDone:false}]
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
      setNewTodo(event.target.value) ;
    }

    let deleteTodo = (id) => {
        setTodos ((prevTodos) =>todos.filter((prevTodos) => prevTodos.id != id));
    }

    let markAllDone = () => {
        setTodos((prevTodos) => (
           prevTodos.map((todo) => {
                return {
                 ...todo, 
                 isDone:true,
                }
            })
        ))
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
              if(todo.id == id) { 
                return {
                 ...todo, 
                 isDone:true,
                }
               } else{
                return todo;
               }
            })
        ))
    }

    return(
        <>
        <header className='header'>
            <h1>ToDo List App</h1>
        </header>

        <main>
            <h2>Add Your ToDo Task</h2>
        <div className='inputTask'>
            <input placeholder="add a task"
             value={newTodo} 
             onChange={updateTodoValue}
             ></input>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask} >Add Task</button>

        </div>    
            <br />

            <hr /> 
        <div className='list'>    
            <h3> Tasks ToDo</h3>
            <ul className='listdata'>
                {
                    todos.map((todo) => (
                        <li key={todo.id} className='listitem'>
                            <div className='list-row'>
                              <span 
                              className='list-text'
                              style={todo.isDone ? 
                              {textDecorationLine:"line-through"} 
                              : {}}>
                                {todo.task}
                              </span>
                            
                              <div className='button'>
                              <button onClick={() => deleteTodo(todo.id)} className='button1'>delete</button>
                              <button onClick={() => markAsDone(todo.id)} className='button1'>Mark As Done</button>
                              </div>
                            </div>    
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={markAllDone} className='mark-button'>Mark All As Done</button>
        </div>
        </main>
        </>
    )
}