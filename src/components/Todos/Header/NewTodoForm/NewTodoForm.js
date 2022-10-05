import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import validations from "./validations";
import { useTodoContext } from "../../../Contexts/TodoContext";
export const NewTodoForm = () => {
    const { todoList, setToDoList } = useTodoContext();
    return (
        <Formik
            initialValues={{ todo: "" }}
            onSubmit={(values, bag) => {}}
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
