import React from 'react';

const Todo = ({ text, id, remove }) => {
  const handleRemove = () => {
    console.log('Removing', id);
    remove(id);
  };
  return (
    <div>
      {text}
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Todo;
