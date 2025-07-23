import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"

export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [ ...prevTodos, { task: newTodo, id: uuidv4()}]
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
      setNewTodo(event.target.value) ;
    }

    let deleteTodo = (id) => {
        setTodos ((prevTodos) =>todos.filter((prevTodos) => prevTodos.id != id));
        console.log(copy);
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
                            <span>{todo.task}</span>
                            &nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}