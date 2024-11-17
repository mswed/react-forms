import { it } from 'vitest';
import { render } from '@testing-library/react';
import Box from './Box';

it('Renders without crashing', async () => {
  render(<Box />);
});
