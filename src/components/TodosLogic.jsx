import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';

import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      // ...
    },
  ]);
  // ...
  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
    </div>
  );
};
export default TodosLogic;
