import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

it('Renders without crashing', async () => {
  render(<BoxList />);
});

it('Matches snapshot', async () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
