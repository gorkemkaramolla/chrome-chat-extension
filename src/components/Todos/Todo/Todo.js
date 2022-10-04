import React from "react";
import "./Todo.scss";
import Footer from "../Footer/Footer";
const Todo = () => {
    return (
        <>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">Mark all as complete</label>

                <ul className="todo-list">
                    <li className="completed">
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Learn JavaScript</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Learn React</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                    <li>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>Have a life!</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                </ul>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Todo;
