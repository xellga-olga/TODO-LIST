import React, { useState } from "react";

import styles from "./App.module.css";
import { Header } from "./components/header/Header";

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

  const [todos, setTodos] = useState(DEFAULT_TODO_LIST)
   console.log("todos, setTodos", todos, setTodos)


  return (
    <div className={styles.appContainer}>
      <div className={styles.container}>
        <Header todoCount={todos.length}/>
      </div>
    </div>
  );
};
