import React from 'react';
import { Todo } from '../types';
import './TodoItem.css';

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => (
  <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
    />
    <span>{todo.text}</span>
  </li>
);

export default TodoItem;
