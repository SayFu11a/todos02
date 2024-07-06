import React, { useState } from 'react';
import './TodoInput.css';

interface Props {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
