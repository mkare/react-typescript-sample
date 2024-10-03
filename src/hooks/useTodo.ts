import { useState } from "react";
import { Todo } from "../types/types";

export function useTodo() {
  const [todos, setTodos] = useState<Array<Todo> | null>(null);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => (prev ? [...prev, todo] : [todo]));
  };

  return { todos, addTodo };
}
