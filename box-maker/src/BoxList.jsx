import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
  const initialState = [
    { width: '100', height: '100', color: 'red', key: uuid() },
    { width: '100', height: '100', color: 'yellow', key: uuid() },
    { width: '50', height: '50', color: 'green', key: uuid() },
  ];
  const [boxList, setBoxList] = useState([]);
  const newBox = (box) => setBoxList((list) => [...list, box]);
  const remove = (id) => {
    setBoxList(boxList.filter((box) => box.key !== id));
  };
  return (
    <div>
      <NewBoxForm newBox={newBox} />
      {boxList.map((box) => (
        <Box
          width={box.width}
          height={box.height}
          color={box.color}
          key={box.key}
          id={box.key}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default BoxList;
