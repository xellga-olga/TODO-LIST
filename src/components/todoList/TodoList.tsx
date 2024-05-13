import React from "react";

import { Todo } from "../../Type";
import { TodoItem } from "./todoItem/TodoItem";
import { TodoPanel } from "../todoPanel/TodoPanel";


interface TodoListProps {
  todos: Todo[];
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
  todoIdForEdit: Todo['id'] | null; 
  changeTodo: ({ name, description }: Omit<Todo, "id" | "checked">) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
  todoIdForEdit,
  changeTodo
}) => (
   <div>
      {todos.map((todo) => {

         if (todo.id === todoIdForEdit)
           return (
             <TodoPanel
               key={todo.id}
               mode="edit"
               changeTodo={changeTodo}
               editTodo={{ name: todo.name, description: todo.description }}
             />
           );
         return (
            <TodoItem
               key={todo.id}
               todo={todo}
               checkTodo={checkTodo}
               deleteTodo={deleteTodo}
               selectTodoIdForEdit={selectTodoIdForEdit}
            />
         );
      }
      )}
   </div>
);
