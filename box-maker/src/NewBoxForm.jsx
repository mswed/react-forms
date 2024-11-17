import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ newBox }) => {
  const initialData = { width: '', height: '', color: '' };
  const [formData, setFormData] = useState(initialData);
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const key = uuid();
    const data = { ...formData, key };
    newBox(data);
    setFormData(initialData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        type="text"
        placeholder="width"
        name="width"
        id="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        type="text"
        placeholder="height"
        name="height"
        id="height"
        value={formData.height}
        onChange={handleChange}
      />
      <label htmlFor="color">Color</label>
      <input
        type="text"
        name="color"
        placeholder="color"
        id="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Create Box</button>
    </form>
  );
};

export default NewBoxForm;
