import React from "react";
import TodoItem from "./TodoItem";

import "./style.css";

interface TodoItem {
    id: string;
    title: string;
}

interface TodoProps {
    items: TodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {

    return (
        <div className="todo-container">
            <ol className="todo-list">
                {props.items.map((title) => <TodoItem title={title.title} id={title.id} />)}
                {/* <TodoItem title="Todo Item 1" />
                <TodoItem title="Todo Item 2" />
                <TodoItem title="Todo Item 3" />
                <TodoItem title="Todo Item 4" /> */}
            </ol>
        </div>
    );
}

export default Todo;