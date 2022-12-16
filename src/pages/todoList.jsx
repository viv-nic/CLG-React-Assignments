import React from "react";
import Todo from "../components/TodoList/todo";

const TodoList = () => {
    return (
        <section className="todolist-layout">
            <h1>ToDo List</h1>
            <Todo />
        </section>
    );
};

export default TodoList;