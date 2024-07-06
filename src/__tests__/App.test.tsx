import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.submit(input);
  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.submit(input);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  expect(screen.getByText('Test Todo')).toHaveStyle('text-decoration: line-through');
});
