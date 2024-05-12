import React from "react";

import styles from "./TodoItem.module.css";

import { Todo } from "../../Type";
import { TodoItem } from "./todoItem/TodoItem";



interface TodoListProps {
   todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
   <div>
      {todos.map((todo) => (
         <TodoItem todo={todo}/>
      ))}
   </div>
);
