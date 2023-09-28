import './style.global.css';
import { TodoList } from "./components/TodoList/TodoList";
import { useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo";

export function App() {
    const data = [];

    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : data;
    });

    function saveTodosToLocalStorage(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    function changeStatus(id){
        const changedStatus = todos.map(e => {
            if (e.id === id) {
                e.completed = !e.completed
            }

            return e
        });

        setTodos(changedStatus);
        saveTodosToLocalStorage(changedStatus);
    }
    function removeTodo(id) {
        const removedTodo = todos.filter(e => e.id !== id);

        setTodos(removedTodo);
        saveTodosToLocalStorage(removedTodo);
    }
    function addTodo(title){
        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false
        }

        setTodos([newTodo, ...todos]);
        saveTodosToLocalStorage([newTodo, ...todos]);
    }

    return(
        <div className="container">
            <h1 className="main-title">Список задач</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList
                todos={todos}
                changeStatus={changeStatus}
                removeTodo={removeTodo}
            />
        </div>
    )
}