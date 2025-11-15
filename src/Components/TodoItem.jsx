import React from "react";
import style from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (name) => {
    setTodos(todos.filter((todo) => todo.name !== name));
  };

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newArray);
  }

  const className1 = item.completed ? style.completed : "";

  return (
    <div className={style.todoitem}>
      <div className={style.itemName}>
        <span className={className1} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <button
          onClick={() => handleDelete(item.name)}
          className={style.delete}
        > x</button>
      </div>
      <hr className={style.line} />
    </div>
  );
}
