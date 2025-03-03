function TodoItem({ todo, deleteTodo }){
    return (
        <li>
            {todo.text}
            <button onclick ={() => deleteTodo(todo.id)}>❌</button>
        </li>
    );
}

export default TodoItem;
