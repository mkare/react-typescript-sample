import React, { useState } from "react";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([
    { id: "1", title: "Learn TypeScript", completed: false },
    { id: "2", title: "Learn React", completed: false },
    { id: "3", title: "Learn Redux", completed: false },
  ]);

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <ul className="todo-list">
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            id={todo.id}
          />
          <label htmlFor={todo.id}>{todo.title}</label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
