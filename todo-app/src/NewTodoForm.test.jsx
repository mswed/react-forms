import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('Renders without crashing', async () => {
  render(<NewTodoForm />);
});

it('Matches the snapshot', async () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
