import React from "react";
import { Todo } from "../../../Type";

import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  console.log("@", todo);

  return (
    <div className={styles.todoItem_container}>
      <div>
        <div className={styles.todoItem_title} aria-hidden>
          {todo.name}
        </div>
        <div className={styles.todoItem_description} aria-hidden>
          {todo.description}
        </div>
      </div>
    </div>
  );
};
