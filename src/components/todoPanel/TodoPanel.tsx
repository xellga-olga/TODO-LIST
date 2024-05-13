import React from 'react';


import styles from './TodoPanel.module.css';
import { Todo } from '../../Type';
import { Button } from '../button/Button';

const DEFAULT_TODO = { name: '', description: '' };

interface AddTodoPanelProps {
  mode: 'add';
  addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

interface EditTodoPanelProps {
  mode: 'edit';
  editTodo: Omit<Todo, 'id' | 'checked'>;
  changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  
  const isEdit = props.mode === 'edit';

  const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description }
    if (isEdit) {
      return props.changeTodo(todoItem);
    }
    props.addTodo(todo);
    setTodo(DEFAULT_TODO);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <div className={styles.todoPanelContainer}>
      <div className={styles.fieldsContainer}>
        <div className={styles.fieldContainer}>
          <label htmlFor='name'>
            <div>name</div>
            <input autoComplete='off' id='name' value={todo.name} onChange={onChange} name='name' />
          </label>
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor='description'>
            <div>description</div>
            <input
              autoComplete='off'
              id='description'
              value={todo.description}
              onChange={onChange}
              name='description'
            />
          </label>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {!isEdit && (
          <Button color='blue' onClick={onClick}>
            ADD
          </Button>
        )}
        {isEdit && (
          <Button color='orange' onClick={onClick}>
            EDIT
          </Button>
        )}
      </div>
    </div>
  );
};