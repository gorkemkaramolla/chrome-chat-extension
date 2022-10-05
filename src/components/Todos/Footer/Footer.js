import React from "react";
import { useTodoContext } from "../../Contexts/TodoContext";
const Footer = () => {
    const {
        clearCompleted,
        todoList,
        activeFilter,
        setActiveFilter,
        activeLength,
    } = useTodoContext();
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeLength} </strong>
                {todoList.length === 1 ? "item" : "items"} left
            </span>

            <ul className="filters">
                <li>
                    <a
                        onClick={() => {
                            setActiveFilter("all");
                        }}
                        href="#/"
                        className={activeFilter === "all" ? "selected" : ""}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setActiveFilter("active");
                        }}
                        className={activeFilter === "active" ? "selected" : ""}
                        href="#/"
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setActiveFilter("completed");
                        }}
                        className={
                            activeFilter === "completed" ? "selected" : ""
                        }
                        href="#/"
                    >
                        Completed
                    </a>
                </li>
            </ul>

            <button onClick={clearCompleted} className="clear-completed">
                Clear completed
            </button>
        </footer>
    );
};

export default Footer;
