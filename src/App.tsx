import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Todo } from './types';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'all' ? true : filter === 'active' ? !todo.completed : todo.completed
  );

  return (
    <div className="App">
      <h1>todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <div className="footer">
        <span>{todos.filter(todo => !todo.completed).length} items left</span>
        <div className="filters">
          <button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active</button>
          <button className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</button>
        </div>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};

export default App;
