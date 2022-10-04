import React from "react";
import "./Todos.scss";
import Todo from "./Todo/Todo";
import Header from "./Header/Header";
const Todos = () => {
    return (
        <>
            <section className="todoapp">
                <Header></Header>
                <Todo></Todo>
            </section>

            <footer className="info">
                <p>Click to edit a todo</p>
                <p>
                    Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
                </p>
                <p>
                    Part of <a href="http://todomvc.com">TodoMVC</a>
                </p>
            </footer>
        </>
    );
};

export default Todos;
