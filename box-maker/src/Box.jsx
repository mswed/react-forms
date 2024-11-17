import React from 'react';

const Box = ({ width = 100, height = 100, color = 'red', id, remove }) => {
  const handleClick = (evt) => {
    remove(id);
  };
  return (
    <>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
          display: 'inline-block',
          margin: '5px',
        }}
      ></div>
      <button onClick={handleClick}>X</button>
    </>
  );
};

export default Box;
