/*global chrome*/

import { createContext, useContext, React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useChromeStorageLocal } from "use-chrome-storage";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todoList, setToDoList] = useState([
        {
            id: 1,
            text: "learn react",
            completed: true,
        },
    ]);
    const addTodo = (text) => {
        setToDoList((prev) => [
            ...prev,
            {
                id: uuidv4(),
                completed: false,
                text,
            },
        ]);
    };
    const toggleToDo = (id) => {
        const clone_todo = [...todoList];
        const todoIndex = clone_todo.findIndex((todo) => todo.id === id);
        let item = clone_todo[todoIndex];
        item.completed = !item.completed;
        setToDoList(clone_todo);
    };
    const deleteToDo = (id) => {
        const filtered_clone_todo = todoList.filter((todo) => {
            return todo.id !== id;
        });
        setToDoList(filtered_clone_todo);
    };
    const values = {
        todoList,
        setToDoList,
        addTodo,
        toggleToDo,
        deleteToDo,
    };
    return (
        <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error(
            "useTodo Hook must be call inside TodoProvider component"
        );
    }
    return context;
};
