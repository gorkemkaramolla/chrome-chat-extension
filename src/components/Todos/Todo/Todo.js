import React from "react";
import "./Todo.scss";
import Footer from "../Footer/Footer";
import TodoList from "./TodoList";
const Todo = () => {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>
                <TodoList></TodoList>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Todo;
