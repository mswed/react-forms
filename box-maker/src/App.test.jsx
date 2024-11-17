import { it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

it('Renders without crashing', async () => {
  render(<App />);
});
