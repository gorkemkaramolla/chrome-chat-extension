import React from "react";
import Items from "./Item";
import { useTodoContext } from "../../../Contexts/TodoContext";

const TodoList = () => {
    const { todoList, setToDoList, toggleTodo, activeFilter, setActiveLength } =
        useTodoContext();
    console.log();
    let filteredList = todoList;

    activeFilter !== "all" &&
        (filteredList = filteredList.filter((todo) =>
            activeFilter === "active"
                ? todo.completed === false
                : todo.completed === true
        ));
    setActiveLength(filteredList.length);
    return (
        <ul className="todo-list">
            {filteredList.map((todo) => (
                <Items
                    setToDoList={setToDoList}
                    todoList={todoList}
                    todo={todo}
                    key={todo.id}
                ></Items>
            ))}
        </ul>
    );
};

export default TodoList;
