import { useState } from "react";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";
import { ITodo } from "../types";

interface ITodoItemProps {
    todo: ITodo;
    editTodo: Function;
    deleteTodo: Function;
    completeTodo: Function;
}

export default function TodoItem({
    todo,
    editTodo,
    completeTodo,
    deleteTodo
}: ITodoItemProps) {
    const [editing, setEditing] = useState(false);

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleSave = (id: number, text: string) => {
        if (text.length === 0) {
            deleteTodo(id);
        } else {
            editTodo(id, text);
        }
        setEditing(false);
    };

    let element;
    if (editing) {
        element = (
            <TodoTextInput
                text={todo.text}
                editing={editing}
                onSave={(text: string) => handleSave(todo.id, text)}
            />
        );
    } else {
        element = (
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => completeTodo(todo.id)}
                />
                <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
                <button className="destroy" onClick={() => deleteTodo(todo.id)} />
            </div>
        );
    }

    return (
        <li
            className={classnames({
                completed: todo.completed,
                editing
            })}
        >
            {element}
        </li>
    );
}
