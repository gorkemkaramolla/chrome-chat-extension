import React from "react";
import { useTodoContext } from "../../../Contexts/TodoContext";
const Items = ({ todoList, todo, setToDoList }) => {
    const { toggleToDo, deleteToDo } = useTodoContext();
    return (
        <>
            <li className={todo.completed && "completed"}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => {
                            toggleToDo(todo.id);
                        }}
                    />
                    <label>{todo.text}</label>
                    <button
                        onClick={() => {
                            deleteToDo(todo.id);
                        }}
                        className="destroy"
                    ></button>
                </div>
            </li>
        </>
    );
};

export default Items;
