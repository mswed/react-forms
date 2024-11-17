import { it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('Renders without crashing', async () => {
  render(<TodoList />);
});

it('Matches the snapshot', async () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('Adds a todo', async () => {
  const todos = render(<TodoList />);
  const newTodoInput = todos.getByLabelText('Todo Text:');
  const newTodoBtn = todos.queryByText('Create!');

  // Expect the form to be empty
  expect(todos.queryByText('X')).not.toBeInTheDocument();

  fireEvent.change(newTodoInput, { target: { value: 'upload to git' } });
  fireEvent.click(newTodoBtn);

  expect(todos.queryByText('upload to git')).toBeInTheDocument();
});
