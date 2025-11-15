import React from "react";
import TodoItem from "./TodoItem.jsx";
import style from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className={style.todolist}>
      <ul>
        {sortedTodos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
}
