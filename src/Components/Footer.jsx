import style from "./footer.module.css";
import React from "react";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Todos: {completedTodos}</span>
      <span className={style.item}>Total Todos: {totalTodos}</span>
    </div>
  );
}
