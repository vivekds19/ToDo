import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function AddTodo(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
          type="text"
        />
        <button onClick={AddTodo} type="submit">
          Add
        </button>
        <ul>
          {todos.map((items) => (
            <TodoItem key={items} item={items} />
          ))}
        </ul>
      </form>
    </div>
  );
}
