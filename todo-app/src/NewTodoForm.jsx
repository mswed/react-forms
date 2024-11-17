import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ newTodo }) => {
  const initialState = { text: '' };
  const [formData, setFormData] = useState(initialState);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    newTodo({ text: formData.text, id: uuid() });
    setFormData(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>New Todo</h2>
      <label htmlFor="text">Todo Text:</label>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Todo text"
        value={formData.text}
        onChange={handleChange}
      />
      <button>Create!</button>
    </form>
  );
};

export default NewTodoForm;
