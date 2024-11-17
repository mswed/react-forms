import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const newTodo = (todo) => setTodoList((todos) => [...todos, todo]);
  const removeTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todos:</h1>
      <NewTodoForm newTodo={newTodo} />
      {todoList.map((todo) => (
        <Todo text={todo.text} id={todo.id} key={todo.id} remove={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
