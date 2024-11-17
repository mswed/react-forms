import { it, expect } from 'vitest';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('Renders without crashing', async () => {
  render(<NewBoxForm />);
});

it('Matches snapshot', async () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});
