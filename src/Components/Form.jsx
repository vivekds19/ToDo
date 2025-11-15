import React from "react";
import { useState } from "react";
import style from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", completed: false });

  function AddTodo(e) {
    e.preventDefault();
    if (todo.name.trim() === "") {
      return;
    }
    setTodos([...todos, todo]);
    setTodo({ name: "", completed: false });
  }
  return (
    <div>
      <form className={style.todoform}>
        <div className={style.inputcontainer}>
          {" "}
          <input
            className={style.input}
            placeholder="Enter the Todo items....."
            onChange={(e) => {
              setTodo({ name: e.target.value, completed: false });
            }}
            value={todo.name}
            type="text"
          />
          <button className={style.button} onClick={AddTodo} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
    
  );
}
