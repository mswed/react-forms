import { it } from 'vitest';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

it('Renders without crashing', async () => {
  render(<BoxList />);
});
