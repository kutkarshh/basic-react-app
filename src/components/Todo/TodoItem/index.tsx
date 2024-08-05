import React from "react";

import './style.css';

interface TodoItemProps {
    title: string,
    id: string
}

// Destructured props --> props.title and props.id to {title} and {id}
const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
    console.log('TodoItem', id, title);
    return (
        <li key={id}>{title}</li>
    );
}

export default TodoItem;