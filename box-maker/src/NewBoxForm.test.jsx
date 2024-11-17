import { it } from 'vitest';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('Renders without crashing', async () => {
  render(<NewBoxForm />);
});
