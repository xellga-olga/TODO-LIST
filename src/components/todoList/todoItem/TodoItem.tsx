import React from "react";
import { Todo } from "../../../Type";

import styles from "./TodoItem.module.css";
import { Button } from "../../button/Button";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
}) => {
  console.log("@", todo);

  return (
    <div className={styles.todoItem_container}>
      <div>
        <div
          style={{
            opacity: todo.checked ? 0.5 : 1,
            textDecoration: todo.checked ? "line-through" : "none",
          }}
          className={styles.todoItem_title}
          aria-hidden
          onClick={() => checkTodo(todo.id)}
        >
          {todo.name}
        </div>
        <div className={styles.todoItem_description} aria-hidden>
          {todo.description}
        </div>
      </div>
      <div className={styles.todoItem_button_container}>
        <Button color="orange" onClick={() => selectTodoIdForEdit(todo.id)}>EDIT</Button>
        <Button color="red" onClick={() => deleteTodo(todo.id)}>
          DELETE
        </Button>
      </div>
    </div>
  );
};
