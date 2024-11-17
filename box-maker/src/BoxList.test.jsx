import { it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

const createBox = (boxes) => {
  const { queryByText, getByLabelText } = boxes;
  const width = getByLabelText('Width');
  const height = getByLabelText('Height');
  const color = getByLabelText('Color');
  const addBtn = queryByText('Create Box');

  // No boxes should be found on the page
  expect(queryByText('X')).not.toBeInTheDocument();

  // Change the form values
  fireEvent.change(width, { target: { value: '100' } });
  fireEvent.change(height, { target: { value: '100' } });
  fireEvent.change(color, { target: { value: 'pink' } });

  // Click the button
  fireEvent.click(addBtn);

  return [width, height, color];
};
it('Renders without crashing', async () => {
  render(<BoxList />);
});

it('Matches snapshot', async () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('Addes a box', async () => {
  const boxes = render(<BoxList />);

  // No boxes should be found on the page
  expect(boxes.queryByText('X')).not.toBeInTheDocument();

  const [width, height, color] = createBox(boxes);

  // Check that the box is there
  const removeBtn = boxes.queryByText('X');
  expect(removeBtn).toBeInTheDocument();
  const box = removeBtn.previousSibling;
  expect(box).toHaveStyle(`
    width: 100px;
    height: 100px;
    backgroundColor: 'pink';
    display: inline-block;
    margin: 5px;`);

  // Check that inputs are clear
  expect(width.value).toBe('');
  expect(height.value).toBe('');
  expect(color.value).toBe('');
});

it('Removes a box', async () => {
  const boxes = render(<BoxList />);
  expect(boxes.queryByText('X')).not.toBeInTheDocument();
  createBox(boxes);

  const removeBtn = boxes.queryByText('X');
  expect(removeBtn).toBeInTheDocument();
  fireEvent.click(removeBtn);
  expect(boxes.queryByText('X')).not.toBeInTheDocument();
});
