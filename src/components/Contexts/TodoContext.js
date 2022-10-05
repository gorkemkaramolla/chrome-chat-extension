import { createContext, useContext, React, useState } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todoList, setToDoList] = useState([
        {
            id: 1,
            text: "learn react",
            completed: true,
        },
    ]);

    const values = {
        todoList,
        setToDoList,
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
