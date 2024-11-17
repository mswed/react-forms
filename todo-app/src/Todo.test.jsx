import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Todo from './Todo';

it('Renders without crashing', async () => {
  render(<Todo />);
});

it('Matches snapshot', async () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
