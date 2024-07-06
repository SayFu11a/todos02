import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import './TodoList.css';

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
);

export default TodoList;
