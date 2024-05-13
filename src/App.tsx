import React, { useState } from "react";

import styles from "./App.module.css";

import { Header } from "./components/header/Header";
import { TodoPanel } from "./components/todoPanel/TodoPanel";
import { Todo } from "./Type";
import { TodoList } from "./components/todoList/TodoList";

const DEFAULT_TODO_LIST = [
  {
    id: 1,
    name: "task 1",
    description: "description 1",
    checked: false,
  },
  {
    id: 2,
    name: "task 2",
    description: "description 2",
    checked: false,
  },
  {
    id: 3,
    name: "task 3",
    description:
      "description 3 so long task description 3 so long task description 3 so long task description 3 so long task description 33 so long task description 33 so long task description 33 so long task description 33 so long task description 33 so long task description 33 so long task description 33 so long task",
    checked: true,
  },
];

export const App = () => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null);

  const selectTodoIdForEdit = (id: Todo["id"]) => {
    setTodoIdForEdit(id);
  };

  const addTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
    setTodos([
      ...todos,
      { id: todos[todos.length - 1].id + 1, description, name, checked: false },
    ]);
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = ({ name, description }: Omit<Todo, "id" | "checked">) =>{
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo,name,description };
        }

        return todo;
      })
    );
    setTodoIdForEdit(null)
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <Header todoCount={todos.length} />
        <TodoPanel addTodo={addTodo} mode="add"  />
        <TodoList
          todos={todos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          todoIdForEdit={todoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
};
