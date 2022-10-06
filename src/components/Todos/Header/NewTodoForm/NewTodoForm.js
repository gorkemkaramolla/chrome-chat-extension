/*global chrome*/

import { Formik, Form, Field } from "formik";
import React from "react";
import validations from "./validations";
import { useTodoContext } from "../../../Contexts/TodoContext";

export const NewTodoForm = () => {
    const { todoList, addTodo } = useTodoContext();
    return (
        <Formik
            initialValues={{ todo: "" }}
            onSubmit={(values, bag) => {
                addTodo(values.todo);
                bag.resetForm();
            }}
            validationSchema={validations}
        >
            <Form>
                <Field
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    id="todo"
                    name="todo"
                />
            </Form>
        </Formik>
    );
};
