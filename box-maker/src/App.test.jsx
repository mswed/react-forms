import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

it('Renders without crashing', async () => {
  render(<App />);
});

it('Matches snapshot', async () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
