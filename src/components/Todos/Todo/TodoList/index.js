import React from "react";
import Items from "./Item";
import { useTodoContext } from "../../../Contexts/TodoContext";

const TodoList = () => {
    const { todoList, setToDoList } = useTodoContext();

    return (
        <ul className="todo-list">
            {todoList.map((todo) => (
                <Items todo={todo} key={todo.id}></Items>
            ))}
        </ul>
    );
};

export default TodoList;
