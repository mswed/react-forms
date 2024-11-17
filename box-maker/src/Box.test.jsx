import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Box from './Box';

it('Renders without crashing', async () => {
  render(<Box />);
});

it('Matches snapshot', async () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
