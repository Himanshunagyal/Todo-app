import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./styles.css";

function App(){
    const[todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, {id: Date.now(), text}]);
    };

    const deleteTodo =(id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="app">
            <h1> Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;

