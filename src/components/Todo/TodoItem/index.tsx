import React from "react";

import './style.css';

interface TodoItemProps {
    title: string,
    id: string
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    console.log('TodoItem', props);
    return (
        <li key={props.id}>{props.title}</li>
    );
}

export default TodoItem;