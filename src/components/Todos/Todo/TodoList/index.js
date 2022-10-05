import React from "react";
import Items from "./Item";
import { useTodoContext } from "../../../Contexts/TodoContext";

const TodoList = () => {
    const { todoList, setToDoList, toggleTodo } = useTodoContext();
    console.log();

    return (
        <ul className="todo-list">
            {todoList.map((todo) => (
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
