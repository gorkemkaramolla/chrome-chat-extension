import React from "react";
import { NewTodoForm } from "./NewTodoForm/NewTodoForm";
const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <NewTodoForm></NewTodoForm>
            </header>
        </div>
    );
};

export default Header;
