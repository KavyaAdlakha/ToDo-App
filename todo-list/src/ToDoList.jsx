import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

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
        <div>
            <input placeholder="add a task"
             value={newTodo} 
             onChange={updateTodoValue}></input>
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />

            <hr /> 
            <h3> Tasks ToDo</h3>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                            &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    )
}