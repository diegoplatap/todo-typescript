import React, { useState } from "react";
import { AddTodoForm } from "./AddTodoForm";
import Title from "./Title";
import { TodoList } from "./TodoList";

const initialTodos: Todo[] = [
  {
    text: "Paseando a zeus",
    complete: false,
  },
  {
    text: "Escribir App",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Title title="Todo App with Typescript" />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
